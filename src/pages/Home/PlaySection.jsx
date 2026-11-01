import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const PlaySection = () => {

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.play-section',
        start: 'top top',
        // start: '50% 50%',
        end: '+=200%',
        pin: true,
        scrub: 2,
        markers: true,
      }
    })

    tl.to('.overlay--screen', {
      y: '-100%',
      ease: 'none',
    })

  })

  return (
    <div className="play-section relative">

      {/* Inner screen */}
      <div className="inner--screen absolute inset-0 h-screen w-full bg-blue-500 flex items-center justify-center text-3xl">
        INNER
      </div>

      {/* Overlay screen */}
      <div className="overlay--screen relative z-10 h-screen w-full bg-red-500 flex items-center justify-center text-3xl">
        OVERLAY
        <div className="box w-20 h-20 bg-orange-500"></div>
      </div>

    </div>
  )
}

export default PlaySection