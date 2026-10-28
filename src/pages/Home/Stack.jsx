import React from 'react'
import StackCard from '../../components/Cards/StackCard'
import Spec from '../../components/Cards/Spec'

const Stack = () => {

    const stacks =[
        {
            id:"react",
            number:1,
            name:"React",
            colStart:"md:col-start-1",
            rowStart:"md:row-start-1",
            info:"Virtual DOM reconciliation & component architecture.",
            txtColor:"text-accent-orange",
            borderColor:"border-accent-orange",
            bgColor:"bg-accent-orange/10",
        },
        {
            id:"tailwind",
            number:2,
            name:"Tailwind",
            colStart:"md:col-start-3",
            rowStart:"md:row-start-1",
            info:"Utility-first design systems & rapid prototyping.",
            txtColor:"text-primary",
            borderColor:"border-primary",
            bgColor:"bg-primary/10",
        },
        {
            id:"typescript",
            number:3,
            name:"Typescript",
            colStart:"md:col-start-2",
            rowStart:"md:row-start-2",
            info:"Static typing & enterprise-grade code safety.",
            txtColor:"text-slate-500",
            borderColor:"border-slate-500",
            bgColor:"bg-slate-500/10",
        },
        {
            id:"jquery",
            number:4,
            name:"JQuery",
            colStart:"md:col-start-1",
            rowStart:"md:row-start-3",
            info:"Legacy maintenance & direct DOM manipulation.",
            txtColor:"text-slate-500",
            borderColor:"border-slate-500",
            bgColor:"bg-slate-500/10",
        },
        {
            id:"threejs",
            number:5,
            name:"ThreeJS",
            colStart:"md:col-start-3",
            rowStart:"md:row-start-3",
            info:"Interactive, fun and moving websites",
            txtColor:"text-primary",
            borderColor:"border-primary",
            bgColor:"bg-primary/10",
        },
    ]

  return (
    <div className='technical-grid flex flex-col lg:grid lg:grid-cols-3 gap-10 bg-background-light dark:bg-background-dark min-h-screen py-8 px-4'>
    <div className='col-span-1 space-y-6 md:space-y-4'>
        <Spec number={"03"} label={"Architecture"} />
        <h1 class="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-neutral-dark dark:text-slate-100">
            Frontend <br/>Engineer.
        </h1>
        <p class="max-w-xl text-lg text-neutral-600 dark:text-slate-400 leading-relaxed font-light">
            Architecting performant, scalable web applications with a focus on React ecosystems and technical logic. Specialized in bridging the gap between high-end design and engineering precision.
        </p>
        <div className='flex flex-col gap-2 mt-8 py-8 border-t-[0.5px] border-t-neutral-400 dark:border-t-slate-400`'>
            <div className='flex items-center gap-4'>
                <div className='h-3 w-3 bg-accent-orange'></div>
                <p className='uppercase text-neutral-600 dark:text-slate-400 text-xs font-bold'>PRIMARY CORE</p>
            </div>
            <div className='flex items-center gap-4'>
                <div className='h-3 w-3 bg-primary'></div>
                <p className='uppercase text-neutral-600 dark:text-slate-400 text-xs font-bold'>INTERFACE LOGIC</p>
            </div>
            <div className='flex items-center gap-4'>
                <div className='h-3 w-3 bg-slate-400 dark:bg-background-light'></div>
                <p className='uppercase text-neutral-600 dark:text-slate-400 text-xs font-bold'>UTILITY</p>
            </div>
        </div>
    </div>
      <div className='col-span-2 py-4 grid lg:grid-cols-3 md:grid-rows-3 gap-4 text-background-dark dark:text-background-light'>
          {
           stacks.map((stk, idx)=>(
            <StackCard key={idx} stack={stk.name} number={stk.number} info={stk.info} colStart={stk.colStart} rowStart={stk.rowStart} txtColor={stk.txtColor} bgColor={stk.bgColor} borderColor={stk.borderColor} />
        ))
     }
      </div>
    </div>
  )
}

export default Stack