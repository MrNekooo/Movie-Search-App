import { useEffect, useState } from "react"

function useLocalStorage(key, initialValue){

    const [storedValue, setStoredValue] = useState(initialValue)

    useEffect(() => {
    
        const saveValue = localStorage.getItem(key)

        if(saveValue) setStoredValue(JSON.parse(saveValue))

    },[])

    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(storedValue))

    },[key, storedValue])


    return [storedValue, setStoredValue]

}

export default useLocalStorage