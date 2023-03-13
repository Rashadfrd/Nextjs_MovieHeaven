import Categories from '@/components/categories/index.js'
import React from 'react'
import Featured from '../../components/featured-movie/index.js'
import Movies from '../../mocks/movies.json'
import Genres from '../../mocks/genres.json'
import MoviesSection from '@/components/movies-section/index.js'

const HomeContainer = () => {
  const movie = Movies.results[0]
  return (
    <div>
      <Featured featuredMovie={movie} isCompact={true} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      <MoviesSection movies={Movies.results.slice(0, 6)} title='Popular Films' />
      <MoviesSection movies={Movies.results.slice(0, 6)} title='Your Favourites' />
    </div>
  )
}

export default HomeContainer