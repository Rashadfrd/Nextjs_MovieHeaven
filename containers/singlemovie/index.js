import Featured from '@/components/featured-movie/index.js'
import React from 'react'

const SingleMovieContainer = ({movie}) => {
  return (
    <div>
      <Featured featuredMovie={movie} isCompact={false} />
    </div>
  )
}

export default SingleMovieContainer
