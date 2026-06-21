import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';


import Home from '../Components/Home';
import Favorites from '../Components/Favorites';
import MoviePage from '../Components/MoviePage';
import NotFound from '../Components/NotFound';
import Layout from '../Components/Layout';
import FavoritesProvider from '../Contexts/Favorites/FavoritesProvider';
import useFetch from '../Hooks/useFetch'


const App = () => {

  const API_KEY = "6e1fea8";

  const[movieUrl, setMovieUrl] = useState(``)
  const[deleteIds, setDeleteIds] = useState(new Set())

  const { data, loading, error } = useFetch(movieUrl)



  function handleMovieDetails(id){

    setMovieUrl(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)

  }


  return (
    <div className=' min-h-screen bg-linear-120 from-indigo-800 to-pink-800 text-white py-10 px-10 flex flex-col gap-5 max-md:px-2'>
    
      <FavoritesProvider>

        <Routes>

          <Route element={<Layout/>}>

            <Route path='/' element={<Home />}/>

            <Route path='/favorites' element={<Favorites setDeleteIds={setDeleteIds} deleteIds={deleteIds} />} />

            <Route path='/movie/:id' element={<MoviePage onSelectedMovie={handleMovieDetails} movieDetails={data} loading={loading} />}/>

          </Route>

          <Route path='*' element={<NotFound/>} />

        </Routes>

      </FavoritesProvider>

    </div>
  )
}

export default App