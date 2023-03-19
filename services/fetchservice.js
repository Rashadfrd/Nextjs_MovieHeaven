const baseUrl = 'https://api.themoviedb.org/3'


//Delay function 

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData(path, { query = "" } = {}) {
  await delay(400);

  try {
    const res = await fetch(
      `${baseUrl}${path}?api_key=${process.env.API_KEY}&${query}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}


export async function getSingleMovie(movieId){
    try {
        const res = await fetchData(`/movie/${movieId}`)
        return res
    } catch (error) {
        throw new Error('Error happened while fetching singleMovie', error)        
    }
}

export async function getMoviesByGenre(genreId){
    try {
        const res = await fetchData('/discover/movie', {query : `&with_genres=${genreId}`})
        return res
    } catch (error) {
        throw new Error('Error happened while fetching movie by genre', error)
    }
}

export async function getCategories(){
    try {
        const res = fetchData(`/genre/movie/list`)
        return res
    } catch (error) {
        throw new Error('Error happened while fetching categories', error)
    }
}
export async function getTopRated(){
    try {
        const res = fetchData(`/movie/top_rated`)
        return res
    } catch (error) {
        throw new Error('Error happened while fetching top rated movies', error)
    }
}
export async function getPopular(){
    try {
        const res = fetchData(`/movie/popular`)
        return res
    } catch (error) {
        throw new Error('Error happened while fetching popular movies', error)
    }
}