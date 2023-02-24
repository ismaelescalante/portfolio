import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    bottom: 0;
    padding: 5rem;
`

export const LandingTitle = styled.h1`
    font-size: 86px;
    margin-top: 20px;
    font-family: 'Stardos Stencil';
    text-shadow: 3px 3px 3px black;
    color: white;
`

export const LandingP = styled.p`
    font-size: 36px;
    margin-top: 15px;
    width: 65%;
    text-shadow: 2px 2px 2px black;
    color: white;
`

export const LandingBtn = styled(NavLink)`
    cursor: pointer;
    margin-top: 50px;
    text-decoration: none;
    color: black;
    background-color: white;
    font-size: 26px;
    width: 10%;
    text-align: center;
    padding: 0.3rem;
    border-radius: 5px;
    transition: all 300ms ease-in-out;
    

    &:hover{
        background-color: #45ba9d;
        color: white;
    }
`