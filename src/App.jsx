import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar';
import MovieList from '../Components/MovieList';

const App = () => {

  const[movies, setMovies] = useState([])
  const[loading, setLoading] = useState(false)

  // useEffect(() => {
  //   document.title = "Batman"
  // },[])

  const API_KEY = "6e1fea8";

    async function searchMovies(title) {
      
      try{

        setLoading(true)

        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)

        const data = await res.json()

        if (data.Response === "False") {

          setMovies([]);
          return;
        }
        
        setMovies(data.Search)

      } catch(error) {

        console.log(error)

      } finally {

        setLoading(false)

      }

    }

  return (
    <div className=' min-h-screen bg-gray-800 text-white py-10 px-20 flex flex-col gap-5 max-2xl:px-10 max-md:px-2'>
      <SearchBar movies={movies} onSearch={searchMovies}/>
      <MovieList movies={movies} loading={loading} />
    </div>
  )
}

export default App