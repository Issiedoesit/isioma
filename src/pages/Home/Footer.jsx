import React from 'react'
import Spec from '../../components/Cards/Spec'

const Footer = () => {
  return (
    <div className='px-8 bg-background-light dark:bg-background-dark py-24 my-10 min-h-screen border-t-[0.5px] border-t-neutral-400 dark:border-t-slate-400'>
           <div className='space-y-6 flex flex-col items-center'>
            <Spec number={"05"} label={"Reach Me"} />
         <h1 class="uppercase text-center text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-neutral-dark dark:text-slate-100">
            LET'S BUILD<br/>SOMETHING REAL.
        </h1>     
            <p className='max-w-md text-center text-sm text-neutral-600 dark:text-slate-400 tracking-tighter'>Always available to translate your designs into responsive real life masterpieces. Say Hello 🤙🏾 and let's talk!</p>
        </div>
    </div>
  )
}

export default Footer