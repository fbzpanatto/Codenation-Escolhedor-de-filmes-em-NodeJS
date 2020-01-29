const request = require('supertest')
const server = require('../src/server')

describe('Random Movies API Endpoints...', () => {
  test('/v1/movie', async () => {
    const res = await request(server.app)
      .get('/v1/movie')

    expect(res.statusCode).toEqual(200)
  })

  test('/v1/movie/:director', async () => {
    const res = await request(server.app)
      .get('/v1/movie/Quentin Tarantino')

    expect(res.statusCode).toEqual(200)
  })
})
