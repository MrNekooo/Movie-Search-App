import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {

    const[inputValue, setInputValue] = useState("")
    const[empty, setEmpty] = useState(false)

    function handleSearch(){

        if(inputValue.trim() !== ""){
            onSearch(inputValue)
            setInputValue("")
            setEmpty(false)
        } else {
            setEmpty(true)
        }

    }

    return (
        <div className=' fixed left-1/2 -translate-1/2 flex items-center justify-center gap-5 py-2 px-5 rounded-full bg-black/70 z-30'>
            <input  type='text' 
                    placeholder={empty ? "It's Empty" : "e.g. Batman"} 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className={` transition-all duration-100 text-white w-100 outline-none focus:bg-gray-700/70 py-1 px-3 rounded-full font-semibold max-sm:w-50 ${empty && "bg-red-500 ring-3 ring-red-400 "} `}/>

            <button className='cursor-pointer py-1 px-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-100' onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar