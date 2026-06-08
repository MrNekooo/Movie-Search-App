import React from 'react'
import { CgCloseO } from 'react-icons/cg' 

const MoviesDetails = ({movieDetails, setShowDetails}) => {

    if (!movieDetails) return null

  return (
    <div className=' fixed inset-0 bg-black/70 flex justify-center items-center z-50 transition-all duration-100' onClick={() => setShowDetails(false)}>

        <div className='bg-gray-900 p-6 rounded-xl relative max-w-7xl mx-5 my-5 max-md:h-full' onClick={(e) => e.stopPropagation()}>

            <CgCloseO className=' cursor-pointer text-2xl absolute right-4' onClick={() => setShowDetails(false)}/>
        
            <div className='flex justify-center items-center gap-10 max-md:flex-col'>

                <img src={movieDetails.Poster} alt={movieDetails.Title} className='rounded-xl max-md:max-h-80 max-[400px]:max-h-50 ' />

                <div className=''>

                    <div className='flex justify-between gap-5 my-5 py-3 px-5 rounded-xl bg-black/20'>
                        <p className='font-bold text-xl max-[400px]:text-sm max-[400px]:font-semibold'>{movieDetails.Title}</p>
                        <p className='font-semibold'>{movieDetails.Year}</p>
                    </div>

                    <span className='bg-yellow-500 text-black font-semibold py-1 px-2 rounded-lg'> IMDB: {movieDetails.imdbRating}</span>

                    <p className='py-5 px-5 max-h-35 rounded-xl bg-black/20 my-5 font-medium max-w-250 line-clamp-5 overflow-y-hidden max-sm:max-h-24 max-sm:line-clamp-3'>{movieDetails.Plot}</p>

                    <div className='mt-10 font-medium flex flex-col justify-center items-center gap-2'>
                        <p className=''>Genre : {movieDetails.Genre}</p>
                        <p className=''>Type : {movieDetails.Type} </p>
                    </div>

                    <div className='flex justify-around gap-5 font-semibold mt-10 py-5 max-h-27 overflow-y-hidden px-5 rounded-xl bg-black/20 max-lg:flex-col'>
                        <p>Director : {movieDetails.Director}</p>
                        <p>Actors : {movieDetails.Actors}</p>   
                    </div>

                </div>

            </div>

        </div>
        
    </div>
  )
}

export default MoviesDetails