import React from 'react'

const MovieList = () => {

    // useEffect(() => {
    //   document.title = "Batman"
    // },[])

    const API_KEY = "44561ec9";

    async function fetchMovie(id) {
        
        try{

        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        if (!res.ok) throw new Error ("Error in Fetching Movie")
        const data = await res.json()

        } catch(error) {

        console.log(error)

        }

    }

  return (
    <div>MovieList</div>
  )
}

export default MovieList