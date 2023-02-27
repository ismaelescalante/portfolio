import React from 'react'
import { LandingContainer, LandingTitle, LandingP, LandingBtn, LandingIntro } from '../styles/LandingElements'
import {AboutImg} from '../styles/AboutElements'
import Img from '../images/ismael.png'

const Landing = () => {
  return (
    <>
    <LandingContainer>
      <LandingIntro>
    <LandingTitle>Welcome to my Portfolio</LandingTitle>
    <LandingP>Here you can get to know more about me and take a look at some projects that I've worked on.</LandingP>
    
    <LandingBtn to='about' 
            smooth={true}
            duration={600}
            spy={true}
            offset={-60}>Let's go!</LandingBtn>
            </LandingIntro>
            {/* <AboutImg src={Img}></AboutImg> */}
    </LandingContainer>
    
    </>
  )
}

export default Landing