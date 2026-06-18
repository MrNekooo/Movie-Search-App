import React, { useState } from 'react'

import SearchBar from '../Components/SearchBar';
import MovieList from '../Components/MovieList';
import useFetch from '../Hooks/useFetch'


const Home = ({favorites, setFavorites}) => {


    const API_KEY = "6e1fea8";

    const[searchUrl, setSearchUrl] = useState(``)
    const { data, loading, error } = useFetch(searchUrl)
    

    function handleSearch(title){

        setSearchUrl(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)
         
    }


    return (
        <div>
            <h1 className='mx-auto text-center my-10 font-bold text-8xl max-w-200 max-sm:text-4xl max-sm:max-w-80'>Find That Movie You Want To See</h1>

            <SearchBar onSearch={handleSearch}/>
            <MovieList movies={data?.Search || []} loading={loading} hasSearched={data?.Response} favorites={favorites} setFavorites={setFavorites} />

        </div>
    )
}

export default Home