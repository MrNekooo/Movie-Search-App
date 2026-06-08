import React, { useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar';
import MovieList from '../Components/MovieList';
import MoviesDetails from '../Components/MoviesDetails';

const App = () => {

  const API_KEY = "6e1fea8";

  const[movies, setMovies] = useState([])
  const[hasSearched, setHasSearch] = useState(false)
  const[loading, setLoading] = useState(false)
  const[movieDetails, setMovieDetails] = useState(null)
  const[showDetails, setShowDetails] = useState(false)

  // useEffect(() => {
  //   document.title = "Batman"
  // },[])

  // useEffect(() => {
  //   console.log(movieDetails); 
  // }, [movieDetails]);


  async function searchMovies(title) {
    
    try{

      setLoading(true)

      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)

      const data = await res.json()

      if (data.Response === "False") {

        setMovies([]);
        setHasSearch(true)
        return;
      }
      
      setMovies(data.Search)
      setMovieDetails(null)
      setShowDetails(false)
      setHasSearch(false)

    } catch(error) {

      console.log(error)

    } finally {

      setLoading(false)

    }

  }

  async function getMovieDetails(id) {
    
    try{

      setLoading(true)

      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)

      const data = await res.json()

      if (data.Response === "False") {

        setMovieDetails(null);
        return;
      }
      
      setMovieDetails(data)
      setShowDetails(true)

    } catch(error) {

      console.log(error)

    } finally {

      setLoading(false)

    }

  }

  return (
    <div className=' min-h-screen bg-gray-800 text-white py-10 px-20 flex flex-col gap-5 max-2xl:px-10 max-md:px-2'>
    
      <SearchBar movies={movies} onSearch={searchMovies}/>
      <MovieList movies={movies} loading={loading} onSelectedMovie={getMovieDetails} hasSearched={hasSearched} />
      {showDetails && <MoviesDetails movieDetails={movieDetails} setShowDetails={setShowDetails} />}

    </div>
  )
}

export default App