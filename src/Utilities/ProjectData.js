import {ImHtmlFive} from 'react-icons/im'
import {DiCss3, DiHtml5} from 'react-icons/di'
import {SiJavascript, SiGithub, SiTailwindcss, SiReact, SiBootstrap, SiFigma} from 'react-icons/si'




const ProjectData = [
    {
        key: 'ad1',
        image: 'https://user-images.githubusercontent.com/116308322/229610706-f7126df2-f3e9-4a30-ace8-7f652842cce1.png',
        title: 'Weather App',
        description:
          'Using Weather API to display local time, weather, and 2 week forecast for every parameter',
        icons: [DiHtml5, SiTailwindcss, SiReact],
        exampleClick: ()=>window.open('https://npotokin.github.io/Weather-App'),
        codeClick: ()=>window.open('https://github.com/NPotokin/Weather-App'),
      },
    {
        key: 'ad2',
        image: 'https://user-images.githubusercontent.com/116308322/229610836-d3251733-83d9-4fdc-9309-20a42763aa5b.png',
        title: 'Restaraunt webpage',
        description:
          'Capstone project for Meta FrontEnd Certification, with some testing and form validation ',
        icons: [DiHtml5, SiTailwindcss, SiReact],
        exampleClick: ()=>window.open('https://npotokin.github.io/Meta_Capstone_FrontEnd'),
        codeClick: ()=>window.open('https://github.com/NPotokin/Meta_Capstone_FrontEnd'),
      },
    {
        key: 'ad3',
        image: 'https://user-images.githubusercontent.com/116308322/229611002-d8dbf338-2cc3-4936-9b16-2289c3002b87.png',
        title: 'Simple game',
        description:
          'Rock Paper Scissors Lizard Spock, play random',
        icons: [DiHtml5, SiTailwindcss, SiJavascript],
        exampleClick: ()=>window.open('https://npotokin.github.io/R_P_SC_L_S'),
        codeClick: ()=>window.open('https://github.com/NPotokin/R_P_SC_L_S'),
      },
    {
        key: 'ad4',
        image: 'https://user-images.githubusercontent.com/116308322/229611125-d0f1b7c4-e583-4d79-ab81-5b32f2745408.png',
        title: 'Landing page',
        description:
          'Landing page for made up SUP borealis hunters club',
        icons: [DiHtml5, SiTailwindcss],
        exampleClick: ()=>window.open('https://npotokin.github.io/LP2_SUP_Club'),
        codeClick: ()=>window.open('https://github.com/NPotokin/LP2_SUP_Club'),
      },
    {
        key: 'ad5',
        image: 'https://user-images.githubusercontent.com/116308322/229611162-1cee7d66-17ae-4273-af48-330b05780741.png',
        title: 'Calculator',
        description:
          'Everyone have to make one, right? So I made one.',
        icons: [DiHtml5, SiTailwindcss, SiJavascript],
        exampleClick: ()=>window.open('https://npotokin.github.io/calculator'),
        codeClick: ()=>window.open('https://github.com/NPotokin/calculator'),
      },
    {
        key: 'ad6',
        image: 'https://user-images.githubusercontent.com/116308322/229611228-6830da54-7554-4289-9023-6f708b2b1a51.png',
        title: 'Landing Page',
        description:
          'Landing Page for dog helpers, first experiene with TailwindCSS, loved it.',
        icons: [DiHtml5, SiTailwindcss],
        exampleClick: ()=>window.open('https://npotokin.github.io/LP1.1_dog_pond_tailwindcss'),
        codeClick: ()=>window.open('https://github.com/NPotokin/LP1.1_dog_pond_tailwindcss'),
      },
    
    
]

export default ProjectData