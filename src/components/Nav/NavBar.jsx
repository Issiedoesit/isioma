import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    const navigation = [
        {
            id:"home",
            name:"HOME",
            path:"/"
        },
        {
            id:"about",
            name:"ABOUT",
            path:"/about"
        },
        {
            id:"contact",
            name:"CONTACT",
            path:"/contact"
        },
    ]

  return (
    <nav className='z-20 py-5 flex flex-row justify-between gap-10'>
        <div className='text-6xl text-amber-500 font-playfair-display'>IE</div>
        <div className='flex items-center gap-8'>
            {
                navigation.map((item, idx)=>{
                    return <NavLink 
                    to={item.path}
                    key={idx}
                    className={`cursor-pointer text-lg font-medium`}
                    >{item.name}</NavLink>
                })
            }
        </div>
    </nav>
  )
}

export default NavBar