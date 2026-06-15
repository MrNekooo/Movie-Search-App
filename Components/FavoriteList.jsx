import React from 'react'

const FavoriteList = ({favorites, deleteFavorite, deleteIds, onSelectedMovie}) => {
    return (
        <div>

            <ul className='grid grid-cols-5 gap-5 min-h-150 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                {favorites.map(favorite => (
                    <li key={favorite.id} className={`flex flex-col justify-between items-center bg-linear-120 to-gray-800 from-black/60 w-full cursor-pointer hover:scale-101 transition-all duration-300 gap-3 px-3 py-5 rounded-2xl max-sm:w-70 m-auto ${deleteIds.has(favorite.id) && "opacity-0"} `}
                        onClick={() => onSelectedMovie(favorite.id)}>

                        <img className='mx-auto rounded-xl w-70 h-100 object-cover' src={favorite.poster} alt={favorite.title} />

                        <div className='flex justify-between items-center w-full h-20'>
                        
                            <h2 className='font-semibold max-w-45'> {favorite.title} </h2>
                            <p className=' font-semibold text-sm'> {favorite.year} </p>

                        </div>

                        <button className={`transition-all duration-150 flex justify-center items-center gap-5 border w-full px-10 py-2 rounded-full font-semibold cursor-pointer hover:bg-red-500/80 hover:border-none  `}
                                onClick={(e) => {e.stopPropagation(); deleteFavorite(favorite.id)}}>
                        
                            <p>Delete</p> 
                        
                        </button>

                    </li>
                ))}
            </ul>

        </div>
  )
}

export default FavoriteList