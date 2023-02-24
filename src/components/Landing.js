import React from 'react'
import { LandingContainer, LandingTitle, LandingP, LandingBtn } from '../styles/LandingElements'

const Landing = () => {
  return (
    <LandingContainer>
    <LandingTitle>ISMAEL ESCALANTE</LandingTitle>
    <LandingP>Welcome to my portfolio! Here you can get to know more about me and take a look at some projects that I've worked on.</LandingP>
    <LandingBtn to='about'>Let's go!</LandingBtn>
    </LandingContainer>
  )
}

export default Landing