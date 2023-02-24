import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import { NavbarContainer, NavItems, NavLinks, LayoutMain } from '../styles/LayoutElements'

const Layout = () => {
  return (
    <>
    <NavbarContainer>
        <NavItems>
            <NavLinks to="about">About</NavLinks>
            <NavLinks to="projects">Projects</NavLinks>
            <NavLinks to="contact">Contact</NavLinks>
            
        </NavItems>
    </NavbarContainer>
    <LayoutMain>
        <Landing />
        <About />
        <Projects />
        <Contact />
    </LayoutMain>
    </>
  )
}

export default Layout