import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <ul className='flex font-semibold'>

            <NavLink to='/' className={({isActive}) => isActive ? 'text-white' : 'text-white/30' }><button className={`cursor-pointer `}><li className='transition-all duration-300 px-5 pb-1 border-b-3 border-b-white/50 hover:border-b-white'>Home</li></button></NavLink>
            <NavLink to='/favorites' className={({isActive}) => isActive ? 'text-white' : 'text-white/30' }><button className={`cursor-pointer `}><li className='transition-all duration-300 px-5 pb-1 border-b-3 border-b-white/50 hover:border-b-white'>Your Favorites</li></button></NavLink>

        </ul>

        <Outlet/>
    </div>
  )
}

export default Layout