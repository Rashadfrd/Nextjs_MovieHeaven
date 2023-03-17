import SingleMovieContainer from '@/containers/singlemovie'
import Movies from '../../../mocks/movies.json'
import React from 'react'
import { baseUrl } from '@/app/[[...categories]]/page'

async function getSingleMovie(movieId){
  const res = await fetch(`${baseUrl}/movie/${movieId}?api_key=${process.env.API_Key}`)
  return res.json()
}

async function SingleMovie ({params}) {
    const movie = await getSingleMovie(params.id)
    console.log(movie)
  return (
    <div>
      <SingleMovieContainer movie={movie} />
    </div>
  )
}

export default SingleMovie
