import { useEffect, useState } from "react";

function useFetch(url){

    const[data, setData] = useState([])
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(false)

    useEffect(()=>{

        async function getMovie() {
            
            try{

                setLoading(true)

                const get = await fetch(url)

                const res = await get.json()

                if (res.Response === "False"){

                    setError(true)
                    setData([])

                }

                setData(res)
                setError(false)

            } catch(error){

                console.log(error)

                setError(true)

            } finally {

                setLoading(false)

            }

        }

        getMovie()
        
    },[url])
    
    return {data, loading, error}
}

export default useFetch