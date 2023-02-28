import styled from "styled-components";
import {Link} from 'react-scroll'

export const NavbarContainer = styled.div`
    background-color: white;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    z-index: 2;
    top: 0;
    /* width: 100%; */

    @media (max-width: 675px){
        justify-content: space-around;
    }

    @media (max-width: 500px){
        justify-content: center;
    }
`

export const NavLogo = styled.h2`
    color: black;
    font-size: 20px;
    padding-left: 2rem;
    cursor: pointer;

    @media (max-width: 500px){
        display: none;
    }
`
export const NavImg = styled.img`
    border-radius: 50%;
    border: 1px solid black;
    height: 55px;
    margin-right: 2rem;

    @media (max-width: 675px){
        display: none;
    }
`
export const NavItems = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`
export const NavLinks = styled(Link)`
    cursor: pointer;
    color: black;
    text-decoration: none;
    font-size: 20px;
    transition: all 200ms ease-in-out;

    &:hover{
        color: #45ba9d;
        /* border-bottom: 2px solid #45ba9d; */
    }
`

export const LayoutMain = styled.div`
    height: 100%;
    width: 100%;
    background: rgb(250,250,250);
    background: linear-gradient(63deg, rgba(250,250,250,1) 0%, rgba(245,245,245,1) 100%);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`





