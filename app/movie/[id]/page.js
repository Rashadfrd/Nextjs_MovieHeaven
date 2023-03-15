import SingleMovieContainer from '@/containers/singlemovie'
import Movies from '../../../mocks/movies.json'
import React from 'react'

const SingleMovie = ({params}) => {
    const movie = Movies.results.find(x=>x.id === +params.id)
  return (
    <div>
      <SingleMovieContainer movie={movie} />
    </div>
  )
}

export default SingleMovie
