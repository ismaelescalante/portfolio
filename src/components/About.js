import React from 'react'
import { AboutContainer, AboutTitle, AboutImg, AboutP, AboutLink } from '../styles/AboutElements'
import Img from '../images/ismael2.png'

const About = () => {
  return (
    <AboutContainer id='about'>
    <AboutTitle>WHO AM I?</AboutTitle>
    {/* <AboutImg src={Img}></AboutImg> */}
    <AboutP>I'm a Full Stack web developer! After spending many years in classical music I decided to take a turn and start learning programming. I spent a whole year learning by myself and then enroled in a Full Stack web development bootcamp. I learned how to work with the MERN stack and now I can say I'm a developer myself!</AboutP>

    <AboutP>On the front-end I can work with <strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong> and <strong>React</strong>. I've worked with different CSS approaches such as <strong>Bootstrap</strong>, <strong>SASS</strong>, <strong>LESS</strong>, <strong>Material UI</strong>, <strong>Tailwind CSS</strong> and <strong>Styled Components.</strong></AboutP>

    <AboutP>On the back-end I can work with <strong>Node</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, <strong>MySQL</strong> and <strong>Firebase</strong>. I've also worked with template engines like <strong>Pug</strong> and <strong>EJS.</strong></AboutP>

    <AboutP>I'm currently on the path of learning <strong>Typescript</strong> and <strong>React Native.</strong> Wish me luck!</AboutP>

    <AboutP>Want to see how I put all that into practice? Take a look on my <AboutLink to='projects' smooth={true}
            duration={600}
            spy={true}
            offset={-60}>projects!</AboutLink></AboutP>
    </AboutContainer>
    
  )
}

export default About