import React from 'react'

import FavoriteList from '../Components/FavoriteList';

const Favorites = ({ favorites, setFavorites, deleteIds, setDeleteIds }) => {

  function deleteFavorite(id){
    
    setDeleteIds(prev => new Set([...prev, id]))
    setTimeout(() => setFavorites(prev => prev.filter(n => n.id !== id)), 300)

  }

  return (
    <div>

      <h2 className='mx-auto text-center my-10 font-bold text-8xl max-w-200 max-sm:text-4xl max-sm:max-w-80'>Your Favorites</h2>
      <FavoriteList favorites={favorites} deleteFavorite={deleteFavorite} deleteIds={deleteIds} />

    </div>
  )
}

export default Favorites