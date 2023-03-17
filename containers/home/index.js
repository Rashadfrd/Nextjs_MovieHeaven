import Categories from '@/components/categories/index.js'
import React from 'react'
import Featured from '../../components/featured-movie/index.js'
import Movies from '../../mocks/movies.json'
import Genres from '../../mocks/genres.json'
import MoviesSection from '@/components/movies-section/index.js'

const HomeContainer = ({category, topRated = [], popular = [], categories = []}) => {
  const movie = popular[Math.floor(Math.random()*popular.length)];
  return (
    <div>
      <Featured featuredMovie={movie} isCompact={true} />
      <Categories categories={categories.slice(0, 5)} />
      
      {category.movies.length > 0 && <MoviesSection movies={category.movies} title={Genres.genres.find(x=>x.id === +category.id)?.name} />}

      <MoviesSection movies={popular.slice(0, 6)} title='Popular Films' />
      <MoviesSection movies={topRated.slice(0, 6)} title='Your Favourites' />
    </div>
  )
}

export default HomeContainer