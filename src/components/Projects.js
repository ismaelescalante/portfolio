import React from 'react'
import { ProjectsContainer, ProjectsTitle, ProjectsGrid, Project, ProjectImg, ProjectDetail, ProjectLinks, PageLink, GithubLink, ProjectBtn } from '../styles/ProjectsElements'
import Img1 from '../images/classical-translation.png'
import Img2 from '../images/quick-gym.png'
import Img3 from '../images/classical-community.png'
import Img4 from '../images/tratratravel.png'

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsTitle>PROJECTS</ProjectsTitle>
      
      <Project>
          <ProjectImg src={Img4}/>
          <ProjectDetail><strong>Tratratravel</strong><br /> A travel recommendation web app using <strong>ChatGPT.</strong> This was a group project together with the Data Science bootcamp. I designed, created and deployed a
          users database using <strong>Node</strong> and <strong>MongoDB.</strong><br /><br />
          <ProjectBtn href='https://tratravel.onrender.com/' target='_blank'>
            Check it out
          </ProjectBtn>
          </ProjectDetail>
          
        </Project>

        <Project>
          <ProjectImg src={Img3}/>
          <ProjectDetail><strong>Classical Community</strong><br />A community where people can leave their reviews of their favorite classical music recordings. This was a full stack project made for the bootcamp, using <strong>React</strong> and <strong>Node</strong>, <strong>Express</strong> and <strong>MongoDB</strong> for the backend.<br /><br />
          <ProjectBtn href="https://classical-community.netlify.app/" target="_blank">
            Check it out
          </ProjectBtn>
          </ProjectDetail>
          
        </Project>
        
        <Project>
          <ProjectImg src={Img2} />
          <ProjectDetail><strong>Quick Gym</strong><br />Exercise web app using the ExerciseDB API and a Youtube Search API. It was made using <strong>React</strong> and <strong>Material UI.</strong><br /><br />
          <ProjectBtn href="https://quick-gym.netlify.app/" target='_blank'>
            Check it out
          </ProjectBtn>
          </ProjectDetail>
          
        </Project>
        <Project>
          <ProjectImg src={Img1}/>
          <ProjectDetail><strong>Classical Translation</strong><br /> Landing page for a fake translation agency focused only on classical music. It's a frontend project made with <strong>React.</strong><br /><br />
          <ProjectBtn href="https://classical-translation.netlify.app/" target="_blank">
            Check it out
          </ProjectBtn>
          
          </ProjectDetail>
          
        </Project>
        
    </ProjectsContainer>
  )
}

export default Projects