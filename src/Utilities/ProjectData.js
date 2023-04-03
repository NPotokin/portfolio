import {ImHtmlFive} from 'react-icons/im'
import {DiCss3, DiHtml5} from 'react-icons/di'
import {SiJavascript, SiGithub, SiTailwindcss, SiReact, SiBootstrap, SiFigma} from 'react-icons/si'




const ProjectData = [
    {
        key: 'ad1',
        image: '../src/Assets/weatherapp.png',
        title: 'Weather App',
        description:
          'Using Weather API to display local time, weather, and 2 week forecast for every parameter',
        icons: [DiHtml5, SiTailwindcss, SiReact],
        exampleClick: ()=>window.open('https://npotokin.github.io/Weather-App'),
        codeClick: ()=>window.open('https://github.com/NPotokin/Weather-App'),
      },
    {
        key: 'ad2',
        image: '../src/Assets/little-lemon.png',
        title: 'Restaraunt webpage',
        description:
          'Capstone project for Meta FrontEnd Certification, with some testing and form validation ',
        icons: [DiHtml5, SiTailwindcss, SiReact],
        exampleClick: ()=>window.open('https://npotokin.github.io/Meta_Capstone_FrontEnd'),
        codeClick: ()=>window.open('https://github.com/NPotokin/Meta_Capstone_FrontEnd'),
      },
    {
        key: 'ad3',
        image: '../src/Assets/Lizard-spok.png',
        title: 'Simple game',
        description:
          'Rock Paper Scissors Lizard Spock, play random',
        icons: [DiHtml5, SiTailwindcss, SiJavascript],
        exampleClick: ()=>window.open('https://npotokin.github.io/R_P_SC_L_S'),
        codeClick: ()=>window.open('https://github.com/NPotokin/R_P_SC_L_S'),
      },
    {
        key: 'ad4',
        image: '../src/Assets/Aurora.png',
        title: 'Landing page',
        description:
          'Landing page for made up SUP borealis hunters club',
        icons: [DiHtml5, SiTailwindcss],
        exampleClick: ()=>window.open('https://npotokin.github.io/LP2_SUP_Club'),
        codeClick: ()=>window.open('https://github.com/NPotokin/LP2_SUP_Club'),
      },
    {
        key: 'ad5',
        image: '../src/Assets/Calculator.png',
        title: 'Calculator',
        description:
          'Everyone have to make one, right? So I made one.',
        icons: [DiHtml5, SiTailwindcss, SiJavascript],
        exampleClick: ()=>window.open('https://npotokin.github.io/calculator'),
        codeClick: ()=>window.open('https://github.com/NPotokin/calculator'),
      },
    {
        key: 'ad6',
        image: '../src/Assets/stray-dog.png',
        title: 'Landing Page',
        description:
          'Landing Page for dog helpers, first experiene with TailwindCSS, loved it.',
        icons: [DiHtml5, SiTailwindcss],
        exampleClick: ()=>window.open('https://npotokin.github.io/LP1.1_dog_pond_tailwindcss'),
        codeClick: ()=>window.open('https://github.com/NPotokin/LP1.1_dog_pond_tailwindcss'),
      },
    
    
]

export default ProjectData