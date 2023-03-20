import SingleMovieContainer from '@/containers/singlemovie'
import Movies from '../../../mocks/movies.json'
import React from 'react'
import { baseUrl } from '@/app/[[...categories]]/page'
import { getSingleMovie } from '@/services/fetchservice'


async function SingleMovie ({params}) {
    const movie = await getSingleMovie(params.id)
  return (
    <div>
      <SingleMovieContainer movie={movie} />
    </div>
  )
}

export default SingleMovie
