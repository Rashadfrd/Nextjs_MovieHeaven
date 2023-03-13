import React from 'react'
import Featured from '../../components/featured-movie/index.js'
import Movies from '../../mocks/movies.json'

const HomeContainer = () => {
  const movie = Movies.results[0]
  return (
    <div>
      <Featured featuredMovie={movie} isCompact={true} />
    </div>
  )
}

export default HomeContainer