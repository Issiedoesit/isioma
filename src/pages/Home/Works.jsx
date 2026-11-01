
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectsData from '../../data/ProjectsData'
import Spec from '../../components/Cards/Spec'
import ProjectCards from '../../components/Cards/ProjectCards'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Works = () => {
  const container = useRef(null)

  useGSAP(() => {
    const track = container.current.querySelector('.works--content')

    const getScrollAmount = () => {
      return Math.max(
        0,
        track.scrollWidth - container.current.clientWidth
      )
    }

    if (getScrollAmount() <= 0) return

    gsap.to(track, {
      x: () => -getScrollAmount(),
      ease: 'none',

      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    })

  }, { scope: container })

  return (
    <section
      ref={container}
      className="works--section h-screen overflow-hidden bg-background-light dark:bg-background-dark py-10 flex flex-col justify-center"
    >
      <div className="space-y-6 p-4">
        <Spec addBorder number={"02"} label={"IDENTITY"} />

        <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-neutral-dark dark:text-slate-100">
          PROJECTS <br />
        </h1>

        <p className="text-sm text-neutral-600 dark:text-slate-400 tracking-tighter max-w-lg">
          Architecting performant, scalable web applications with a focus on React ecosystems and technical logic. Specialized in bridging the gap between high-end design and engineering precision.
        </p>
      </div>

      <div className="works--content flex gap-6 items-center w-max px-10 pt-4">
        {ProjectsData.map((project) => (
          <ProjectCards
            key={project.id}
            id={project.id}
            projectName={project.name}
            stacks={project.techStack}
            description={project.description}
            link={project.link}
            additionalclassName="work--item"
            projectImg={project.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Works
