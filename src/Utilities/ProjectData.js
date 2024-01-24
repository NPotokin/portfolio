import {ImHtmlFive} from 'react-icons/im'
import {DiCss3, DiHtml5} from 'react-icons/di'
import {SiJavascript, SiWordpress, SiGithub, SiTailwindcss, SiReact, SiBootstrap, SiFigma, SiMongodb, SiPrisma} from 'react-icons/si'
import { TbBrandNextjs } from "react-icons/tb";




const ProjectData = [
  {
    key: 'ad1',
    image: 'https://github.com/NPotokin/portfolio/assets/116308322/2424504a-4313-4c6c-a169-dfca8c5f14ce',
    title: 'Alberta Wait Room',
    description:
      'NextJS app that shows wait time statistics for Urgent Care facilities in Alberta, using MongoDB and PrismaORM',
    icons: [SiReact, TbBrandNextjs, SiMongodb, SiPrisma],
    exampleClick: ()=>window.open('https://www.albertawaitroom.ca/'),
    codeClick: ()=>window.open('https://github.com/NPotokin/AHS-Wait-Times-2.0-NextJS'),
  },
      {
        key: 'ad2',
        image: 'https://user-images.githubusercontent.com/116308322/229610836-d3251733-83d9-4fdc-9309-20a42763aa5b.png',
        title: 'Restaraunt webpage',
        description:
          'Capstone project for Meta FrontEnd Certification, with Server Actions for form and Zustand for state management ',
        icons: [DiHtml5, SiTailwindcss, SiReact, TbBrandNextjs],
        exampleClick: ()=>window.open('https://littlelemon-one.vercel.app/'),
        codeClick: ()=>window.open('https://github.com/NPotokin/Meta_Capstone_FrontEnd'),
      },
      {
        key: 'ad3',
        image: 'https://user-images.githubusercontent.com/116308322/229610706-f7126df2-f3e9-4a30-ace8-7f652842cce1.png',
        title: 'Weather App',
        description:
          'Using Weather API, Recharts and Zustand to display local time, weather, and 2 week forecast for every parameter',
        icons: [DiHtml5, SiTailwindcss, SiReact],
        exampleClick: ()=>window.open('https://npotokin.github.io/Weather-App'),
        codeClick: ()=>window.open('https://github.com/NPotokin/Weather-App'),
      },
    {
        key: 'ad4',
        image: 'https://github.com/NPotokin/AHS-Wait-Times-2.0-NextJS/assets/116308322/36aa280a-d7ea-43a8-9227-08d46b6bcdf4',
        title: 'Freelance website',
        description:
          'Creating design, color scheme, developing a webpage with WordPress ',
        icons: [DiHtml5, SiWordpress ],
        exampleClick: ()=>window.open('http://ces.moscow/'),
        codeClick: ()=>window.open('http://ces.moscow/'),
      },
    
    
    
]

export default ProjectData