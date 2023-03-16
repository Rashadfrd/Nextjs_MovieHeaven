import HomeContainer from "@/containers/home";
import Movies from '../../mocks/movies.json'

async function delay(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

async function Home({params}) {
    await delay(2000)
    let selectedCategory;

    if (params.categories?.length > 0) {
        selectedCategory = true
    }
    
  return (
    <main >
      <HomeContainer
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