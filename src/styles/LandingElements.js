import styled from "styled-components";
import { Link } from "react-scroll";

export const LandingContainer = styled.div`
    text-align: center;
    z-index: 1;
    margin-bottom: 20px;
    margin-top: 100px;
    padding: 2rem;
`

export const LandingIntro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LandingTitle = styled.h1`
    /* background: linear-gradient(97deg, rgba(69,124,186,1) 0%, rgba(69,186,157,1) 100%);
    background-size: cover;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    color: black;
    font-size: 48px;
    margin-top: 20px;
`

export const LandingP = styled.p`
    font-size: 26px;
    margin-top: 15px;
    width: 65%;
    color: black;
`

export const LandingBtn = styled(Link)`
    cursor: pointer;
    margin-top: 50px;
    text-decoration: none;
    color: white;
    background-color: #45ba9d;
    font-size: 26px;
    width: 30%;
    text-align: center;
    padding: 0.3rem;
    border-radius: 5px;
    transition: all 300ms ease-in-out;
    

    &:hover{
        background-color: black;
        color: #45ba9d;
    }
`