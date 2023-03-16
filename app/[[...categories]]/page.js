import HomeContainer from "@/containers/home";
import Movies from '../../mocks/movies.json'

export default function Home({params}) {

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