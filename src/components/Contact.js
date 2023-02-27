import React from 'react'
import { ContactContainer, ContactTitle, ContactP, ContactIcons, ContactInfo, GmailIcon, LinkedinIcon, GithubIcon } from '../styles/ContactElements'

const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <ContactP>Don't hesitate to contact me!</ContactP>
      <ContactIcons>
        <ContactInfo href='mailto: ismaelescalante18@gmail.com'><GmailIcon />ismaelescalante18@gmail.com</ContactInfo>
        <ContactInfo href='https://www.linkedin.com/in/ismael-escalante/' target='_blank'><LinkedinIcon />Linkedin</ContactInfo>
        <ContactInfo href='https://github.com/ismaelescalante?tab=repositories' target='_blank'><GithubIcon />Github</ContactInfo>
      </ContactIcons>
    </ContactContainer>
  )
}

export default Contact