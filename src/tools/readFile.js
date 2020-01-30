const fs = require('fs')

const getFile = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile('imdb-movies.json', 'utf-8', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

const parseFile = async () => {
  try{
    const data = await getFile()
    return JSON.parse(data)
  } catch (error) {
    throw error
  }
}

module.exports = {
  parseFile
}