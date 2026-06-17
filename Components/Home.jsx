import React, { useState } from 'react'

import SearchBar from '../Components/SearchBar';
import MovieList from '../Components/MovieList';


const Home = ({movies, setMovies, movieDetails, setMovieDetails, getMovieDetails, favorites, setFavorites, loading, setLoading}) => {


    const API_KEY = "6e1fea8";

    const[hasSearched, setHasSearch] = useState(false)


    async function searchMovies(title) {
    
        try{

        setLoading(true)

        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)

        const data = await res.json()

        if (data.Response === "False") {

            setMovies([]);
            setHasSearch(true)
            return;
        }
        
        setMovies(data.Search)
        setMovieDetails(null)
        setHasSearch(false)

        } catch(error) {

        console.log(error)

        } finally {

        setLoading(false)

        }

    }

    return (
        <div>
            <h1 className='mx-auto text-center my-10 font-bold text-8xl max-w-200 max-sm:text-4xl max-sm:max-w-80'>Find That Movie You Want To See</h1>

            <SearchBar movies={movies} onSearch={searchMovies}/>
            <MovieList movies={movies} loading={loading} onSelectedMovie={getMovieDetails} hasSearched={hasSearched} favorites={favorites} setFavorites={setFavorites} />

        </div>
    )
}

export default Home