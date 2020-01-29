const randomMovie = (dados) => {
  const index = Math.floor(Math.random() * dados.length)
  const obj = { 'director': dados[index]['Director'], 'movie': dados[index]['Title'] }
  const parsed = JSON.stringify(obj)
  return parsed
}

const randomByDirector = (dados, director) => {
  const selectedDirector = dados.filter(obj => obj['Director'] == director)
  const index = Math.floor(Math.random() * selectedDirector.length)
  const obj = { 'director': selectedDirector[index]['Director'], 'movie': selectedDirector[index]['Title'] }
  const parsed = JSON.stringify(obj)
  return parsed

}

module.exports = {
  randomMovie,
  randomByDirector
}