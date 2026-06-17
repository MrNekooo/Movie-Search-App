import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';


import Home from '../Components/Home';
import Favorites from '../Components/Favorites';
import MoviePage from '../Components/MoviePage';
import NotFound from '../Components/NotFound';
import Layout from '../Components/Layout';

const App = () => {

  const API_KEY = "6e1fea8";

  const[movies, setMovies] = useState([])
  const[favorites, setFavorites] = useState([])
  const[deleteIds, setDeleteIds] = useState(new Set())
  const[movieDetails, setMovieDetails] = useState(null)
  const[loading, setLoading] = useState(false)



  useEffect(() => {

    const saveFavorites = localStorage.getItem('favorites')

    if(saveFavorites) setFavorites(JSON.parse(saveFavorites))

  },[])

  useEffect(() => {

    if(favorites.length > 0) localStorage.setItem('favorites', JSON.stringify(favorites))

  },[favorites])


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

    } catch(error) {

      console.log(error)

    } finally {

      setLoading(false)

    }

  }

  return (
    <div className=' min-h-screen bg-linear-120 from-indigo-800 to-pink-800 text-white py-10 px-10 flex flex-col gap-5 max-md:px-2'>
    
      <Routes>

        <Route element={<Layout/>}>

          <Route path='/' element={<Home movies={movies} setMovies={setMovies} movieDetails={movieDetails} setMovieDetails={setMovieDetails} getMovieDetails={getMovieDetails} favorites={favorites} setFavorites={setFavorites} loading={loading} setLoading={setLoading} />}/>

          <Route path='/favorites' element={<Favorites favorites={favorites} setFavorites={setFavorites} setDeleteIds={setDeleteIds} deleteIds={deleteIds} getMovieDetails={getMovieDetails} movieDetails={movieDetails} />} />

          <Route path='/movie/:id' element={<MoviePage onSelectedMovie={getMovieDetails} movieDetails={movieDetails} loading={loading} />}/>

        </Route>

        <Route path='*' element={<NotFound/>} />

      </Routes>

    </div>
  )
}

export default App