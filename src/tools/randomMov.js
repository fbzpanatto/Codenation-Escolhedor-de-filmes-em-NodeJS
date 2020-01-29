const randomMovie = (dados) => {
  const index = Math.floor(Math.random() * dados.length)
  return { 'director': dados[index]['Director'], 'movie': dados[index]['Title'] }
}

const randomByDirector = (dados, director) => {
  const selectedDirector = dados.filter(obj => obj['Director'] == director)
  const index = Math.floor(Math.random() * selectedDirector.length)
  return { 'director': selectedDirector[index]['Director'], 'movie': selectedDirector[index]['Title'] }
}

module.exports = {
  randomMovie,
  randomByDirector
}