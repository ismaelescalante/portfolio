import styled from "styled-components";

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 100%;
`

export const ProjectsTitle = styled.h1`
     color: black;
    font-size: 42px;
    margin-bottom: 50px;
`

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 150px;
    color: white;
    margin-top: 30px;
`

export const Project = styled.div`
    color: black;
    font-size: 28px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 50px;
    width: 80%;

    @media (max-width: 947px){
        flex-direction: column;
        align-items: center;
    }
`

export const ProjectImg = styled.img`
    width: 450px;
    height: 250px;
    border-radius: 5px;

    @media (max-width: 500px){
        width: 300px;
        height: 150px;
    }
`

export const ProjectDetail = styled.p`
    color: black;
    font-size: 20px;
    text-align: center;
    margin-top: 5px;
    padding: 1rem;
    display: flex; 
    flex-direction: column;
    align-items: center;
`

export const ProjectLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 20px;
    text-decoration: underline;
    margin-bottom: 10px;
`

export const PageLink = styled.a`
    color: black;
    cursor: pointer;
`

export const GithubLink = styled.a`
    color: black;
    cursor: pointer;
`

export const ProjectBtn = styled.a`
    cursor: pointer;
    color: white;
    background-color: #45ba9d;
    font-size: 20px;
    width: 30%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    transition: all 300ms ease-in-out;
    margin-top: 20px;
    text-decoration: none;

    &:hover{
        background-color: black;
        color: #45ba9d;
    }
`
