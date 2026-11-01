
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ProjectsData from '../../data/ProjectsData'
import Spec from '../../components/Cards/Spec'

gsap.registerPlugin(useGSAP)

// ==========================================
// TOGGLES
// ==========================================

// Set to false to disable automatic scroll activation.
// Manual clicking will still work.
const ENABLE_SCROLL_ACTIVATION = false

// Set to false to disable GSAP animations.
const ENABLE_GSAP_ANIMATIONS = false

const ProjectIndex = () => {
  const [activeProject, setActiveProject] = useState(null)

  const container = useRef(null)
  const rows = useRef([])
  const activeRef = useRef(null)
  const lastScrollY = useRef(0)

  const updateActiveProject = (id) => {
    activeRef.current = id
    setActiveProject(id)
  }

  // ==========================================
  // ENTRANCE ANIMATION
  // Toggle using ENABLE_GSAP_ANIMATIONS
  // ==========================================

  useGSAP(() => {
    if (!ENABLE_GSAP_ANIMATIONS) return

    gsap.from('.project-row', {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out',
      clearProps: 'all',
    })
  }, { scope: container })

  // ==========================================
  // SCROLL ACTIVATION
  // COMMENT OUT THIS ENTIRE useEffect BLOCK
  // TO DISABLE AUTOMATIC SCROLL EXPANSION.
  // UNCOMMENT IT TO ENABLE IT AGAIN.
  // ==========================================

  useEffect(() => {
    if (!ENABLE_SCROLL_ACTIVATION) return

    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollingDown = currentScrollY > lastScrollY.current

      lastScrollY.current = currentScrollY

      const activeIndex = ProjectsData.findIndex(
        (project) => project.id === activeRef.current
      )

      // Activate first project
      if (activeIndex === -1) {
        const firstRow = rows.current[0]

        if (
          firstRow &&
          firstRow.getBoundingClientRect().top <= window.innerHeight * 0.6
        ) {
          updateActiveProject(ProjectsData[0].id)
        }

        return
      }

      const currentRow = rows.current[activeIndex]

      if (!currentRow) return

      const rowTop = currentRow.getBoundingClientRect().top

      if (scrollingDown) {
        // Activate next project when current project
        // starts leaving the top of the viewport
        if (
          rowTop <= 0 &&
          activeIndex < ProjectsData.length - 1
        ) {
          updateActiveProject(ProjectsData[activeIndex + 1].id)
        }
      } else {
        // Activate previous project when scrolling upwards
        if (
          rowTop >= 0 &&
          rowTop <= window.innerHeight * 0.6 &&
          activeIndex > 0
        ) {
          updateActiveProject(ProjectsData[activeIndex - 1].id)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      ref={container}
      className="py-24 border-b border-accent/10"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section heading */}
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-2">
            <Spec number={"02"} label={"OUTPUT"} />

            <h2 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-neutral-dark dark:text-slate-100">
              Project Index
            </h2>
          </div>

          <div className="hidden md:block h-px flex-1 bg-accent/10 mx-12 mb-4" />

          <span className="text-sm font-mono text-neutral-400">
            Total Entries: {ProjectsData.length}
          </span>
        </div>

        {/* Project list */}
        <div className="border border-accent/10 divide-y divide-accent/10">
          {ProjectsData.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              isActive={activeProject === project.id}
              rowRef={(el) => {
                rows.current[index] = el
              }}
              onClick={() =>
                updateActiveProject(
                  activeRef.current === project.id ? null : project.id
                )
              }
            />
          ))}
        </div>

      </div>
    </section>
  )
}


const ProjectRow = ({
  project,
  index,
  isActive,
  rowRef,
  onClick,
}) => {
  const content = useRef(null)

  // ==========================================
  // EXPAND / COLLAPSE ANIMATION
  // Toggle using ENABLE_GSAP_ANIMATIONS
  // ==========================================

  useGSAP(() => {
    const element = content.current

    if (!element) return

    if (!ENABLE_GSAP_ANIMATIONS) {
      gsap.set(element, {
        height: isActive ? 'auto' : 0,
        opacity: isActive ? 1 : 0,
      })
      return
    }

    gsap.killTweensOf(element)

    gsap.to(element, {
      height: isActive ? 'auto' : 0,
      opacity: isActive ? 1 : 0,
      duration: 0.6,
      ease: 'power2.inOut',
      overwrite: true,
    })
  }, { dependencies: [isActive] })

  return (
    <div
      ref={rowRef}
      className="project-row cursor-pointer bg-background-light dark:bg-background-dark"
      data-project-id={project.id}
    >

      {/* Collapsed project row */}
      <button
        onClick={onClick}
        aria-expanded={isActive}
        className="group w-full cursor-pointer flex flex-col md:flex-row md:items-center justify-between p-8 text-left hover:bg-accent/5 transition-colors"
      >
        <div className="flex items-center gap-8 flex-1">
          <span className="text-xs font-mono text-neutral-400">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="space-y-1">
            <h3 className="text-xl font-black tracking-tight leading-[0.9] text-neutral-dark dark:text-slate-100 group-hover:text-accent-orange transition-colors">
              {project.name}
            </h3>

            <p className="text-sm text-neutral-500 uppercase tracking-widest">
              {project.type} Project
            </p>
          </div>
        </div>

        {/* Technology preview */}
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          {project.techStack?.slice(0, 3).map((stack) => (
            <span
              key={stack.id}
              className="text-neutral-dark dark:text-slate-100 px-3 py-1 border border-neutral-dark/10 text-[10px] font-bold uppercase tracking-widest"
            >
              {stack.name}
            </span>
          ))}
        </div>

        {/* Expand indicator */}
        <div className="md:w-32 text-neutral-dark dark:text-slate-100 flex justify-end mt-4 md:mt-0">
          <span
            className={`inline-block transition-transform duration-300 ${
              isActive ? 'rotate-45' : ''
            }`}
          >
            ↗
          </span>
        </div>
      </button>

      {/* Expanded project details */}
      <div
        ref={content}
        className="overflow-hidden text-neutral-dark dark:text-slate-100"
        style={{
          height: 0,
          opacity: 0,
        }}
      >
        <div className="grid md:grid-cols-2 gap-8 px-8 pb-8">

          {/* Project image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Project information */}
          <div className="flex flex-col justify-between gap-6">

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-widest text-accent-orange">
                  {project.type}
                </span>

                <h4 className="text-2xl font-bold mt-2">
                  {project.name}
                </h4>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.description}
              </p>

              {/* Full tech stack */}
              <div className="space-y-3 pt-2">
                <h5 className="text-xs font-bold uppercase tracking-widest">
                  Tech Stack
                </h5>

                <div className="flex flex-wrap gap-3">
                  {project.techStack?.map((stack) => (
                    <div
                      key={stack.id}
                      className="flex items-center gap-2 border border-accent/20 rounded-md px-3 py-2"
                    >
                      {stack.icon}

                      <span className="text-xs">
                        {stack.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold text-sm uppercase tracking-widest hover:text-accent transition-colors"
            >
              View Project <span>↗</span>
            </a>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectIndex
