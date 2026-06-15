import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';

import { HiHeart } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi';

import Home from '../Components/Home';
import Favorites from '../Components/Favorites';

const App = () => {

  const API_KEY = "6e1fea8";

  const[movies, setMovies] = useState([])
  const[favorites, setFavorites] = useState([])
  const[deleteIds, setDeleteIds] = useState(new Set())
  const[movieDetails, setMovieDetails] = useState(null)
  const[showDetails, setShowDetails] = useState(false)
  const[loading, setLoading] = useState(false)

  const navigate = useNavigate()


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
      setShowDetails(true)

    } catch(error) {

      console.log(error)

    } finally {

      setLoading(false)

    }

  }

  return (
    <div className=' min-h-screen bg-linear-120 from-indigo-800 to-pink-800 text-white py-10 px-20 flex flex-col gap-5 max-2xl:px-10 max-md:px-2'>

      <ul className='flex font-semibold'>
        <button className='cursor-pointer' onClick={() => navigate('/')}><li className='transition-all duration-300 px-5 pb-1 border-b-3 border-b-white/50 hover:border-b-white'>Home</li></button>
        <button className='cursor-pointer' onClick={() => navigate('/favorites')}><li className='transition-all duration-300 px-5 pb-1 border-b-3 border-b-white/50 hover:border-b-white'>Your Favorites</li></button>
      </ul>
    
      <Routes>

        <Route path='/' element={<Home movies={movies} setMovies={setMovies} movieDetails={movieDetails} setMovieDetails={setMovieDetails} showDetails={showDetails} setShowDetails={setShowDetails} getMovieDetails={getMovieDetails} favorites={favorites} setFavorites={setFavorites} loading={loading} setLoading={setLoading} />}/>

        <Route path='/favorites' element={<Favorites favorites={favorites} setFavorites={setFavorites} setDeleteIds={setDeleteIds} deleteIds={deleteIds} getMovieDetails={getMovieDetails} movieDetails={movieDetails} showDetails={showDetails} setShowDetails={setShowDetails} />} />

      </Routes>

    </div>
  )
}

export default App