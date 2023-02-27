import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import { NavbarContainer, NavItems, NavLinks, LayoutMain, NavLogo, NavImg } from '../styles/LayoutElements'
import Img from '../images/ismael3.png'
import { animateScroll } from 'react-scroll'

const Layout = () => {

  const toggleHome = () =>{
    animateScroll.scrollToTop()
  }
  return (
    <>
    <NavbarContainer>
      <NavLogo onClick={toggleHome}>ISMAEL ESCALANTE</NavLogo>
        <NavItems>
            <NavLinks to="about" activeStyle={{color: '#45ba9d', textDecoration: 'underline'}} smooth={true}
            duration={600}
            spy={true}
            offset={-60}>About</NavLinks>
            <NavLinks to="projects" activeStyle={{color: '#45ba9d', textDecoration: 'underline'}} smooth={true}
            duration={600}
            spy={true}
            offset={-60}>Projects</NavLinks>
            <NavLinks to="contact" activeStyle={{color: '#45ba9d', textDecoration: 'underline'}} smooth={true}
            duration={600}
            spy={true}
            offset={-60}>Contact</NavLinks>
            
        </NavItems>
        <NavImg src={Img}></NavImg>
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