import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MoviePage = ({ onSelectedMovie, movieDetails, loading }) => {

    const { id } = useParams()


    useEffect(() => {

        onSelectedMovie(id)

    },[id])

    if(!movieDetails) return null

    return (
        <>
            <p className='text-center font-semibold'> {loading && "LOADING . . ."} </p>
            <div className='flex justify-center items-center transition-all duration-100 w-full'>
        
                <div className='rounded-xl w-full my-5 bg-black/50 p-10 max-sm:p-3'>
        
                
                    <div className='flex justify-between items-center gap-10 max-lg:flex-col'>
        
                        <img src={movieDetails.Poster} alt={movieDetails.Title} className='rounded-xl object-center' />
        
                        <div className=''>
        
                            <div className='flex justify-between items-center gap-5 mb-5 py-3 px-5 rounded-xl bg-black/20'>
                                <p className='font-bold text-xl max-[400px]:text-md max-[400px]:font-semibold'>{movieDetails.Title}</p>
                                <p className='font-semibold'>{movieDetails.Year}</p>
                            </div>
        
                            <span className='bg-yellow-500 text-black font-bold py-1 px-2 rounded-lg'> IMDB: {movieDetails.imdbRating}</span>
        
                            <p className='p-5 rounded-xl bg-black/20 my-5 font-medium max-w-250 max-sm:text-sm'>{movieDetails.Plot}</p>
        
                            <div className='mt-10 font-medium flex flex-col justify-center items-center gap-2'>
                                <p className=''>Genre : {movieDetails.Genre}</p>
                                <p className=''>Type : {movieDetails.Type} </p>
                            </div>
        
                            <div className='flex justify-around gap-5 font-semibold mt-10 py-5 px-5 rounded-xl bg-black/20 max-lg:flex-col'>
                                <p>Director : {movieDetails.Director}</p>
                                <p>Actors : {movieDetails.Actors}</p>   
                            </div>
        
                        </div>
        
                    </div>
        
                </div>
                
            </div>
        </>
      )
}

export default MoviePage