import React from 'react'

const MovieList = ({movies, loading, onSelectedMovie, hasSearched}) => {

  return (
    <>
        <p className='text-center mt-10 font-semibold'> {loading && "LOADING . . ."} </p>
        <> {hasSearched && <p className='text-center font-semibold text-red-500'> No Movies Found </p>} </>
        <ul className='grid grid-cols-6 gap-5 min-h-150 max-2xl:grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
            {movies.map((movie) => (

                <li     key={movie.imdbID}
                        className='flex flex-col justify-between items-center cursor-pointer hover:scale-101 transition-all duration-100 gap-3 p-2 rounded-xl max-sm:w-70 m-auto'
                        onClick={() => onSelectedMovie(movie.imdbID)}>
                    
                    <img className=' rounded-xl w-full' src={movie.Poster} alt={movie.Title} />
                    <div className=' flex justify-between items-center w-full h-20'>
                        <h2 className='font-semibold max-w-45'> {movie.Title} </h2>
                        <p className=' font-semibold text-sm'> {movie.Year} </p>
                    </div>
                    
                </li>          
        
            ))}
        </ul>
        
    </>
  )
}

export default MovieList