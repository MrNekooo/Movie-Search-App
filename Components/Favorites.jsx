import React, { useContext } from 'react'

import FavoriteList from '../Components/FavoriteList';
import FavoritesContext from '../Contexts/Favorites/FavoritesContext';

const Favorites = ({ deleteIds, setDeleteIds }) => {

  const{favorites, setFavorites} = useContext(FavoritesContext)

  function deleteFavorite(id){
    
    setDeleteIds(prev => new Set([...prev, id]))
    setTimeout(() => setFavorites(prev => prev.filter(n => n.id !== id)), 300)

  }

  return (
    <div>

      <h2 className='mx-auto text-center my-10 font-bold text-8xl max-w-200 max-sm:text-4xl max-sm:max-w-80'>Your Favorites</h2>
      <FavoriteList deleteFavorite={deleteFavorite} deleteIds={deleteIds} />

    </div>
  )
}

export default Favorites