import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
        Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink
    } from './NavbarElements';
import logo from '../../images/logo.png'
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
                <img src= {logo} alt='logo'/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">About Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="flatpack">Flatpack</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="categories">Categories</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact">Contact</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/QualityStandarts">Quality Standarts</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
