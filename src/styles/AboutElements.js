import styled from "styled-components";
import { Link } from "react-scroll";

export const AboutContainer = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    width: 70%;
    padding-bottom: 1rem;
    border-radius: 10px;

    @media (max-width: 650px){
        width: 100%;
    }
`

export const AboutTitle = styled.h1`
    color: black;
    font-size: 42px;
    margin-top: 20px;
`

export const AboutImg = styled.img`
    border-radius: 5%;
    width: 30%;
    height: 30%;
    margin-top: 15px;
`
export const AboutP = styled.p`
    color: black;
    margin-top: 20px;
    margin-bottom: 10px;
    width: 65%;
    font-size: 24px;
`

export const AboutLink = styled(Link)`
    color: black;
    cursor: pointer;
    text-decoration: underline;
    transition: all 300ms ease-in-out;

    &:hover{
        color: #45ba9d;
    }
`