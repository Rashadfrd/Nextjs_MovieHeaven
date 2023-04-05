import HomeContainer from "@/containers/home";
import Movies from '../../../../mocks/movies.json'
import { getPopular, getMoviesByGenre, getCategories, getTopRated } from "@/services/fetchservice";


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