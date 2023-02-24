import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.div`
    background-color: #525e65;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    width: 100%;
`
export const NavItems = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`
export const NavLinks = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 20px;
    transition: all 200ms ease-in-out;

    &:hover{
        color: #45ba9d;
        border-bottom: 2px solid #45ba9d;
    }
`

export const LayoutMain = styled.div`
    height: 100%;
    background: rgb(146,154,153);
    background: linear-gradient(180deg, rgba(146,154,153,1) 0%, rgba(93,93,93,1) 100%);
    color: white;
`