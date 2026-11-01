
import React from 'react'

const ProjectCards = ({
  id,
  projectImg,
  projectName,
  stacks = [],
  link,
  description,
  additionalClass
}) => {
  return (
    <div
      id={id}
      className={`${additionalClass} text-neutral-dark dark:text-background-light shadow-xl border-0.5 dark:shadow-sm dark:shadow-neutral-dark rounded-lg w-[350px] h-[450px] shrink-0 flex flex-col overflow-hidden`}
    >
      {/* Project image */}
      <div className="h-52 w-full shrink-0">
        <img
          src={projectImg}
          alt={projectName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project information */}
      <div className="flex flex-col flex-1 min-h-0 w-full px-4 py-4 space-y-4 ">

        {/* Project title and link */}
        <div className="flex gap-5 justify-between items-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-dark dark:text-background-light font-bold group/projectLink text-2xl flex items-center gap-2 min-w-0"
          >
            <span className="truncate">{projectName}</span>

            <svg
              className="shrink-0 invisible group-hover/projectLink:visible opacity-0 group-hover/projectLink:opacity-100 -translate-x-5 group-hover/projectLink:translate-x-0 transition-all duration-500 ease-in-out"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8225 4.44727L15.375 8.99977L10.8225 13.5523"
                className="stroke-[#292D32] dark:stroke-[#FFFFFF]"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M2.625 9H15.2475"
                className="stroke-[#292D32] dark:stroke-[#FFFFFF]"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Description */}
        <p className="text-sm text-accent-orange line-clamp-2">
          {description}
        </p>

        {/* Tech stack */}
        <div className="space-y-2">
          <h4 className="font-bold">Tech Stack:</h4>

          <div className="flex flex-wrap gap-2 w-full">
            {stacks.map((stack, i) => (
              <div
                key={i}
                className="flex items-center gap-2 border px-2 py-2 rounded-lg"
              >
                <p className="text-xs first-letter:uppercase overflow-hidden whitespace-nowrap text-ellipsis">
                  {stack.name}
                </p>

                {/* <img
                  src={stack.icon}
                  alt={stack.name}
                  className="w-5 h-5 object-contain shrink-0"
                /> */}
                {stack.icon}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCards
