import React from 'react'
import Spec from '../../components/Cards/Spec'
import { MdOutlineLink, MdOutlineShare } from "react-icons/md"

const Footer = () => {
  return (
    <div className='footer--section absolute inset-0 h-screen px-8 bg-background-light dark:bg-background-dark py-24  min-h-screen border-t-[0.5px] border-t-neutral-400 dark:border-t-slate-400'>
      <div className='space-y-6 flex flex-col items-center'>
        <Spec number={"05"} label={"Reach Me"} />
        <h1 class="uppercase text-center text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-neutral-dark dark:text-slate-100">
          LET'S BUILD<br />SOMETHING REAL.
        </h1>
        <p className='max-w-md text-center text-sm text-neutral-600 dark:text-slate-400 tracking-tighter'>Always available to translate your designs into responsive real life masterpieces. Say Hello 👋🏾 and let's talk!</p>
        <div className='py-10 flex flex-row gap-4'>
            <a href="mailto:isyekwe@gmail.com?subject=Project%20Enquiry" className='text-2xl md:text-4xl font-light hover:text-accent transition-colors border-b-1 border-neutral-dark/10 dark:border-background-light/10 hover:border-accent-orange pb-2 dark:text-background-light'>isyekwe@gmail.com</a>
            <div className='w-12 h-12 flex items-center justify-center border text-neutral-dark dark:text-white border-neutral-dark/10 dark:border-background-light/10 rounded-full hover:bg-neutral-dark hover:text-white dark:hover:bg-background-light/10 dark:hover:text-accent-orange transition-all cursor-pointer'><MdOutlineLink className='text-3xl' /></div>
            <div className='w-12 h-12 flex items-center justify-center border text-neutral-dark dark:text-white border-neutral-dark/10 dark:border-background-light/10 rounded-full hover:bg-neutral-dark hover:text-white dark:hover:bg-background-light/10 dark:hover:text-accent-orange transition-all cursor-pointer'><MdOutlineShare className='text-3xl' /></div>
        </div>
      </div>
      <div class="pt-24 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-neutral-400 gap-4">
<p>© 2026 Isioma Ekwemuka Portfolio</p>
<div class="flex gap-8">
<a class="hover:text-neutral-dark" href="#">Privacy</a>
<a class="hover:text-neutral-dark" href="#">Terms</a>
<a class="hover:text-neutral-dark" href="#">Source</a>
</div>
<p>Built with technical precision & love 💗 </p>
</div>
    </div>
  )
}

export default Footer