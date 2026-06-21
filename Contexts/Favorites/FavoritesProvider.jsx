import React, { useEffect, useState } from 'react'
import FavoritesContext from './FavoritesContext'
import useLocalStorage from '../../Hooks/useLocalStorage'

const FavoritesProvider = ({children}) => {

    const [favorites, setFavorites] = useLocalStorage("favorites", [])


    return (

        <FavoritesContext.Provider value={{favorites, setFavorites}}>

            {children}

        </FavoritesContext.Provider>

    )
}

export default FavoritesProvider