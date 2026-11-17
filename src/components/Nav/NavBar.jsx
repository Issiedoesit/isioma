import React from 'react'
import { NavLink } from 'react-router-dom'
import logoDark from "../../assets/images/isioma_monogram_transparent_dark_mode.png"
import logoLight from "../../assets/images/isioma_monogram_transparent_light_mode.png"

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
            path:"#footer"
        },
    ]

  return (
    <nav className='z-20 py-5 px-4 flex flex-row justify-between gap-10'>
        <div className='pl-3'>
            <img src={logoDark} className='h-8 w-8 hidden dark:block' />
            <img src={logoLight} className='h-8 w-8 block dark:hidden' />
        </div>
        <div className='flex items-center gap-8 font-montserrat '>
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