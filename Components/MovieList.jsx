import React, { useState } from 'react'

import { HiHeart } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const MovieList = ({movies, loading, onSelectedMovie, hasSearched, favorites, setFavorites}) => {

    function handleFavorite(movie){

        if(!favorites.some(fav => fav.id === movie.imdbID)){

            setFavorites([...favorites, {id:movie.imdbID, poster:movie.Poster , title:movie.Title, year:movie.Year }])
            
        }

    }

    const navigate = useNavigate()

    return (
        <>
            <p className='text-center mt-10 font-semibold'> {loading && "LOADING . . ."} </p>
            <> {hasSearched && <p className='text-center font-semibold text-red-500'> "No Movies Found" </p>} </>
            <ul className='grid grid-cols-5 gap-5 min-h-150 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                {movies.map((movie) => (

                    <li     key={movie.imdbID}
                            className=' flex flex-col justify-between items-center bg-black/50 cursor-pointer hover:scale-101 transition-all duration-100 gap-3 px-3 py-5 rounded-2xl w-full max-sm:w-70 m-auto '
                            onClick={() => navigate(`/movie/${movie.imdbID}`)}>
                        
                        <div className='w-full'>
                            <img className='mx-auto rounded-xl w-70 h-100 object-cover' src={movie.Poster} alt={movie.Title} />
                        </div>

                        <div className=' flex justify-between items-center w-full h-20'>
                        
                            <h2 className='font-semibold max-w-45'> {movie.Title} </h2>
                            <p className=' font-semibold text-sm'> {movie.Year} </p>

                        </div>

                        <button className='transition-all duration-150 flex justify-center items-center gap-5 border w-full px-10 py-2 rounded-full font-semibold cursor-pointer hover:bg-black/50 hover:border-none'
                                onClick={(e) => {e.stopPropagation(); handleFavorite(movie)}}>

                            {favorites.some(fav => fav.id === movie.imdbID) ? <><p>Already in</p> <HiHeart className='text-xl text-red-500'/></>  : <><p>Add To</p> <HiHeart className='text-xl text-red-500'/></>}

                        </button>
                        
                    </li>          
            
                ))}
            </ul>
            
        </>
    )
}

export default MovieList