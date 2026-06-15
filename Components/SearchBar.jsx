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
        <div className=' sticky mx-auto top-5 flex items-center justify-center gap-3 py-2 px-2 rounded-full bg-black/70 z-30'>
            <input  type='text' 
                    placeholder={empty ? "It's Empty" : "e.g. Batman"} 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className={` transition-all duration-100 text-white w-full outline-none focus:bg-gray-700/70 py-2 px-3 rounded-full font-semibold  ${empty && "bg-red-500 ring-3 ring-red-400 "} `}/>

            <button className='cursor-pointer py-2 px-10 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-100 max-[400px]:px-5' onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar