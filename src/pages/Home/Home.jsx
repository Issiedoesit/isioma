import React from 'react'
import NavBar from '../../components/Nav/NavBar'
import Stack from './Stack'
import Hero from './Hero'
import Footer from './Footer'
import PlaySection from './PlaySection'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)


const Home = () => {

    useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.stack--footer',
        start: 'top top',
        // start: '50% 50%',
        end: '+=200%',
        pin: true,
        scrub: 2,
        // markers: true,
      }
    })

    tl.to('.stack--section', {
      y: '-100%',
      ease: 'none',
    })

  })
  return (
    <div className='bg-background-light dark:bg-background-dark'>
        {/* HERO SECTION */}
        {/* <div className={`relative flex flex-col px-5 w-full h-screen bg-no-repeat bg-cover`} style={{backgroundImage:`url(${isioma})`}}>
            <NavBar/>
            <div className='bg-black z-10 w-full h-full absolute right-0 top-0 opacity-30'></div>
                <div className='z-20 my-auto text-black'>
                    <h1 className='text-2xl lg:text-4xl font-montserrat font-extrabold'>ISIOMA EKWEMUKA</h1>
                    <h2 className='lg:text-lg'>FRONTEND DEVELOPER & OPTOMETRIST</h2>   
                </div>
        </div> */}

        {/* ABOUT */}
        {/* <div className='font-poppins bg-white py-28 px-5 lg:px-8 xl:px-10'>
            <h2 className='text-2xl font-montserrat font-extrabold text-center'>ABOUT <span className='border-b-2 border-amber-500'>ME</span></h2>
            <p className='text-center py-4 mx-auto lg:max-w-10/12'> I am a dedicated and passionate frontend developer with over 3 years of experience. During that time, I have executed multiple projects to industry standards, creating aesthetic, responsive, functional and optimized websites that reflect the vision of the client.</p>
        </div> */}
        <NavBar/>
        {/* HERO */}
        <Hero />

      <div className='stack--footer h-screen relative'>
            {/* STACK */}
        <Stack />
        {/* FOOTER */}
        <Footer />
      </div>

        {/* TRY OUT ANIMATIONS */}
        {/* <PlaySection /> */}
    </div>
  )
}

export default Home