import React from 'react'
import Spec from '../../components/Cards/Spec'
import isioma from "../../assets/images/Issie-standing.png"
import { MdTerminal } from "react-icons/md";

const Hero = () => {
  return (
    <div className='px-8 grid md:grid-cols-2 gap-10 bg-background-light dark:bg-background-dark pt-10 pb-20 mb-10 min-h-screen border-b-[0.5px] border-b-neutral-400 dark:border-b-slate-400'>
        <div className='space-y-6'>
            <Spec addBorder number={"01"} label={"IDENTITY"} />
         <h1 class="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-neutral-dark dark:text-slate-100">
            Frontend <br/>Engineer.
        </h1>            
        <p className='text-sm text-neutral-600 dark:text-slate-400 tracking-tighter max-w-lg'>Architecting performant, scalable web applications with a focus on React ecosystems and technical logic. Specialized in bridging the gap between high-end design anf engineering precision.</p>
        </div>
        <div className='flex items-end md:justify-end '>
            <div className='relative md:w-md aspect-square'>
                <img src={isioma} alt="A picture of me standing facing forward at a 3/4 turn." className='grayscale opacity-90 mix-blend-luminosity' />
                <div className='absolute text-neutral-600 dark:text-slate-400 bg-background-light/10 backdrop-blur-md border border-white/10 p-4 right-6 left-6 rounded-md bottom-6'>
                    <div class="flex justify-between items-end">
                    <div>
                    <p class="text-[10px] text-white/60 uppercase tracking-widest mb-1">Current Focus</p>
                    <p class="text-white font-mono text-sm uppercase">React & Typescript</p>
                    </div>
                    <MdTerminal className='text-accent-orange' size="24" />                    
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero