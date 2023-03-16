import CategoriesLoading from '@/components/categories/loading'
import FeaturedLoader from '@/components/featured-movie/loading'
import MoviesLoading from '@/components/movies-section/loading'
import React from 'react'

const Loading = () => {
  return (
    <div>
      <FeaturedLoader />
      <CategoriesLoading />
      <MoviesLoading />
    </div>
  )
}

export default Loading
