import HomeContainer from "@/containers/home";
import Movies from '../../mocks/movies.json'

// Delay Function

// async function delay(ms) {
//     await new Promise(resolve => setTimeout(resolve, ms));
//   }
const baseUrl = 'https://api.themoviedb.org/3'

async function getPopular(){
  const res = await fetch(`${baseUrl}/movie/popular?api_key=${process.env.API_Key}&page=1`)
  return res.json()
}
async function getTopRated(){
  const res = await fetch(`${baseUrl}/movie/top_rated?api_key=${process.env.API_Key}&page=1`)
  return res.json()
}
async function getCategories(){
  const res = await fetch(`${baseUrl}genre/movie/list?api_key=${process.env.API_Key}&language=en-US`)
  return res.json()
}
async function Home({params}) {

  const popularPromise = getPopular()
  const topRatedPromise = getTopRated()
  // const categoriesPromise = getCategories()


  const [{results:popular},{results:topRated} ] = await Promise.all([popularPromise, topRatedPromise])

    let selectedCategory;

    if (params.categories?.length > 0) {
        selectedCategory = true
    }
    
  return (
    <main >
      <HomeContainer
      topRated={topRated}
      popular={popular}
       category={
        {
            id : params.categories?.[0] ?? '',
            movies : selectedCategory ? Movies.results.slice(0, 7) : []
        }
       }
      />
    </main>
  )
}

export default Home