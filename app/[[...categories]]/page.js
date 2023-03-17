import HomeContainer from "@/containers/home";
import Movies from '../../mocks/movies.json'

// Delay Function

// async function delay(ms) {
//     await new Promise(resolve => setTimeout(resolve, ms));
//   }
export const baseUrl = 'https://api.themoviedb.org/3'

async function getMoviesByGenre(genreId){
  const res = await fetch(`${baseUrl}/discover/movie/?api_key=${process.env.API_Key}&with_genres=${genreId}`)
  return res.json()
}
async function getPopular(){
  const res = await fetch(`${baseUrl}/movie/popular?api_key=${process.env.API_Key}&page=1`)
  return res.json()
}
async function getTopRated(){
  const res = await fetch(`${baseUrl}/movie/top_rated?api_key=${process.env.API_Key}&page=1`)
  return res.json()
}
async function getCategories(){
  const res = await fetch(`${baseUrl}/genre/movie/list?api_key=${process.env.API_Key}&language=en-US`)
  return res.json()
}
async function Home({params}) {

  const popularPromise = getPopular()
  const topRatedPromise = getTopRated()
  const categoriesPromise = getCategories()


  const [{results:popular},{results:topRated},{genres:categories} ] = await Promise.all([popularPromise, topRatedPromise, categoriesPromise])

    let selectedCategory;

    if (params.categories?.length > 0) {
        selectedCategory = await getMoviesByGenre(params.categories[0])
    }
    
  return (
    <main >
      <HomeContainer
      topRated={topRated}
      popular={popular}
      categories={categories}
       category={
        {
            id : params.categories?.[0] ?? '',
            movies : selectedCategory ? selectedCategory.results.slice(0, 6) : []
        }
       }
      />
    </main>
  )
}

export default Home