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
    <nav className='z-20 py-5 px-4 flex flex-row justify-between gap-10'>
        <div className='text-6xl text-accent-orange font-playfair-display'>IE</div>
        <div className='flex items-center gap-8'>
            {
                navigation.map((item, idx)=>{
                    return <NavLink 
                    to={item.path}
                    key={idx}
                    className={`cursor-pointer text-md font-medium text-neutral-dark dark:text-background-light`}
                    >{item.name}</NavLink>
                })
            }
        </div>
    </nav>
  )
}

export default NavBar