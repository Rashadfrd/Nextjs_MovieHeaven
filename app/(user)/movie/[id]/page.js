import SingleMovieContainer from '@/containers/singlemovie'
import Movies from '../../../../mocks/movies.json'
import React from 'react'
import { notFound } from "next/navigation";
import { getSingleMovie } from '@/services/fetchservice'


async function SingleMovie ({params, searchParams}) {
    const movie = await getSingleMovie(params.id)

    if (movie.success === false) {
      notFound();
    }
  
    if (searchParams.error === "true") {
      throw new Error("Something went wrong!");
    }

  return (
    <div>
      <SingleMovieContainer movie={movie} />
    </div>
  )
}

export default SingleMovie
