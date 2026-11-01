import { BsJavascript } from "react-icons/bs";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { SiJquery } from "react-icons/si";
import { DiNodejs } from "react-icons/di";


const js = <BsJavascript className="text-accent-orange" />
const tailwind = <RiTailwindCssFill className="text-accent-orange" />
const jquery = <SiJquery className="text-accent-orange" />
const react = <RiReactjsFill className="text-accent-orange" />
const nodejs = <DiNodejs className="text-accent-orange" />

const ProjectsData = [
    {
        id: 1,
        name: "MLC",
        description: "A real estate project.",
        link: "https://minimum-living-cost.vercel.app/",
        type:'personal',
        image: "https://res.cloudinary.com/issie/image/upload/v1793562256/MLC_thwiao.png",
        techStack: [
            {
                id: 1,
                name: "React",
                icon:react
            },
            {
                id: 2,
                name: "Jquery",
                icon:jquery
            },
            {
                id: 3,
                name: "Tailwind",
                icon:tailwind
            },
            {
                id: 2,
                name: "Javascript",
                icon:js
            }
        ]
    },
    {
    id: 2,
    name: "Wordive",
    description: "A dictionary app.",
    link: "https://wordive.vercel.app/",
    type:'personal',
    image: "https://res.cloudinary.com/issie/image/upload/v1676978843/Portfolio/Wordive.jpg",
    techStack: [
            {
                id: 1,
                name: "React",
                icon:react
            },
            {
                id: 2,
                name: "Jquery",
                icon:jquery
            },
            {
                id: 3,
                name: "Tailwind",
                icon:tailwind
            },
            {
                id: 4,
                name: "Javascript",
                icon:js
            }
        ]
    },
    {
    id: 3,
    name: "Pandascrow Dashboard",
    description: "Dashboard for Pandascrow users to view and manage transactions.",
    link: "https://app.pandascrow.io/",
    type:'professional',
    image: "https://res.cloudinary.com/issie/image/upload/v1677192078/Portfolio/pandascrow_adem1e.png",
    techStack: [
            {
                id: 1,
                name: "Jquery",
                icon:jquery
            },
            {
                id: 2,
                name: "Tailwind",
                icon:tailwind
            },
            {
                id: 3,
                name: "Javascript",
                icon:js
            }
        ]
    },
    {
    id: 4,
    name: "ShoppersBag",
    description: "An Eco-friendly shopping bag website.",
    link: "https://shoppersbag.co/",
    type:'professional',
    image: "https://res.cloudinary.com/issie/image/upload/v1677191110/Portfolio/shoppersbag_wjkkm5.png",
    techStack: [
            {
                id: 1,
                name: "Jquery",
                icon:jquery
            },
            {
                id: 2,
                name: "Tailwind",
                icon:tailwind
            },
            {
                id: 3,
                name: "Javascript",
                icon:js
            }
        ]
    },
    {
    id: 5,
    name: "Pandascrow",
    description: "An escrow and payment website.",
    link: "https://pandascrow.io/",
    type:'professional',
    image: "https://res.cloudinary.com/issie/image/upload/v1680651815/Portfolio/Pandascrow-landing_nstsb8.jpg",
    techStack: [
             {
                id: 1,
                name: "React",
                icon:react
            },
            {
                id: 2,
                name: "Jquery",
                icon:jquery
            },
            {
                id: 3,
                name: "Tailwind",
                icon:tailwind
            },
            {
                id: 4,
                name: "Javascript",
                icon:js
            }
        ]
    },
    {
    id: 6,
    name: "ContactMe",
    description: "A contact app with book search functionality.",
    link: "https://contactmenow.vercel.app/",
    type:'personal',
    image: "https://res.cloudinary.com/issie/image/upload/v1690285793/Portfolio/contactme_v3njbn.png",
    techStack: [
             {
                id: 1,
                name: "React",
                icon:react
            },
            {
                id: 2,
                name: "NodeJs",
                icon:nodejs
            },
            {
                id: 3,
                name: "Tailwind",
                icon:tailwind
            },
            {
                id: 4,
                name: "Javascript",
                icon:js
            }
        ]
    }
]

export default ProjectsData