import styled from "styled-components";
import {Gmail} from "@styled-icons/boxicons-logos/Gmail"
import {Linkedin} from "@styled-icons/bootstrap/Linkedin"
import {Github} from "@styled-icons/boxicons-logos/Github"

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 3rem; */
    background-color: black;
    width: 100%;
    padding-bottom: 4rem;
    margin-top: 50px;
`

export const ContactP = styled.p`
    background: linear-gradient(97deg, rgba(69,124,186,1) 0%, rgba(69,186,157,1) 100%);
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 46px;
    text-align: center;
    margin-top: 75px;
`


export const ContactIcons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin-top: 30px;

    @media (max-width: 600px){
        font-size: 18px;
        width: 75%;
    }

    @media (max-width: 450px){
        font-size: 18px;
        width: 100%;
    }
`

export const ContactInfo = styled.a`
    color: white;
    cursor: pointer;
    font-size: 22px;
    margin-bottom: 15px;
    transition: all 300ms ease-in-out;

    &:hover{
        color: #45ba9d;
    }

    
`

export const GmailIcon = styled(Gmail)`
    color: white;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    height: 30px;
    width: 30px;
    margin-right: 15px;
    margin-bottom: 5px;
    

    &:hover{
        color: red;
        background-color: white;
        border-radius: 5px;
    }

`

export const LinkedinIcon = styled(Linkedin)`
    color: white;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    height: 30px;
    width: 30px;
    margin-right: 20px;
    margin-bottom: 5px;

    &:hover{
        color: #0a66c2;
        background-color: white;
        border-radius: 5px;
    }
`

export const GithubIcon = styled(Github)`
     color: white;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    height: 40px;
    width: 40px;
    margin-right: 20px;
    margin-bottom: 5px;

    &:hover{
        color: black;
        background-color: white;
        border-radius: 20px;
    }
`