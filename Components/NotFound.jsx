import React from 'react'

import { TbError404 } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <div className=''><TbError404 className='w-150 h-150 max-md:w-100 max-md:h-100 max-sm:w-70' /></div>
                <div className='flex flex-col gap-10'>
                    <p className='text-4xl font-bold text-center max-sm:text-3xl'>"Sorry" Movie Page Not Found </p>
                    <button className='transition-all duration-200 rounded-full cursor-pointer p-4 font-semibold text-xl bg-black/50 hover:bg-black/80'
                            onClick={() => navigate('/')}>Go Back Home</button>
                </div>
            </div>
        </div>
    )
}

export default NotFound