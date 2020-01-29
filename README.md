# Escolhedor de filmes em NodeJS

Existem aqueles momentos em que queremos somente ver um filme aleatório, então começamos a rolar a lista do Netflix e não conseguimos escolher! Vamos criar uma API que escolhe um filme aleatório pra evitar essa fadiga!

## Tópicos

Neste desafio você aprenderá:

- NodeJS
- Criar APIs
- Testar APIs

## Requisitos
​
Para este desafio você precisará de:

- NodeJS LTS (8.12.0+)
- Rodar o comando "npm install" no diretório do desafio
- Jest (npm install jest -g)

## Detalhes

O arquivo *imdb-moviews.json* é um arquivo *JSON* a qual possui uma lista de *filmes* com a seguinte estrutura:


```
{
  "Rank": Number,
  "Title": String,
  "Genre": String,
  "Description": String,
  "Director": String,
  "Actors": String,
  "Year": Number,
  "Runtime (Minutes)": Number,
  "Rating": Number,
  "Votes": Number,
  "Revenue (Millions)": Number,
  "Metascore": Number
}
```

Na chave *Title* está o Título do filme que devem ser apresentado pela API. Na chave *Director* consta o nome do diretor.

A API deve responder pelas seguintes URLs:

## /v1/movie

Método: GET

Retorna um filme aleatório de qualquer diretor.


## /v1/movie/{diretor}

Método: GET

Retorna um filme aleatório do diretor passado como parâmetro.

O formato esperado em ambas URLs é uma _Response JSON_:

```json
{"director":"Quentin Tarantino","movie":"Inglourious Basterds"}
```

Obs.: Tente usar o mínimo de bibliotecas possível
