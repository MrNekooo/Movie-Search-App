import React from 'react'

const MovieList = ({movies, loading}) => {

  return (
    <>
        <p className='text-center'> {loading && ". . ."} </p>
        <ul className='grid grid-cols-6 gap-5 max-2xl:grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
            {movies.map((movie) => (

                <li key={movie.imdbID} className='flex flex-col justify-between items-center hover:scale-101 transition-all duration-100 gap-3 p-2 rounded-xl max-sm:w-70 m-auto'>
                    
                    <img className=' rounded-xl w-full' src={movie.Poster} alt={movie.Title} />
                    <div className='grid grid-cols-2 justify-between items-center w-full'>
                        <h2 className='font-semibold max-w-35 min-h-25 place-self-start'> {movie.Title} </h2>
                        <p className=' place-self-end font-semibold'> {movie.Year} </p>
                    </div>
                    
                </li>          
        
            ))}
        </ul>
        
    </>
  )
}

export default MovieList