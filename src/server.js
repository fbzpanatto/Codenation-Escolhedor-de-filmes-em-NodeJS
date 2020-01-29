const express = require('express')
const app = express()
const { randomMovie, randomByDirector } = require('./tools/randomMov')
const { readMovies } = require('./tools/readFile')

app.get('/v1/movie', async (req, res, next) => {
  readMovies()
    .then(dados => res.status(200).send(randomMovie(dados)))
    .catch(err => res.status(500).send(err))
})


app.get(`/v1/movie/:director`, async (req, res, next) => {
  readMovies()
    .then(dados => {
      const mov = randomByDirector(dados, req.params.director)
      if (mov) {
        res.status(200).send(mov)
      } else {
        res.status(404).send('Not Found')
      }
    })
    .catch(err => res.status(500).send(err))
})

const start = async (port = 8080) => {
  app.listen(port, function () {
    console.info('%s listening at port %s', app.name, port)
  })
}

const stop = () => {
  app.close(() => {
    console.info('App Stopped')
  })
}

module.exports = {
  app,
  start,
  stop
}