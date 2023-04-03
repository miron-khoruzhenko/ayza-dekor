import React from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
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
  

const toggleHome = () => {
    scroll.scrollToTop();
}
  
  
    return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
                <img src={logo} alt='logo'/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks 
                    to="about" 
                    smooth="true"
                    duration={500}
                    spy={true}
                    exact='true' 
                    offset={-80}
                    // activeClass='true'
                    >About Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="flatpack" 
                      smooth="true"
                      duration={500}
                      spy={true}
                      exact='true' offset={-80}
                      // activeClass='true'
                      >Flatpack</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="categories"
                      smooth="true"
                      duration={500}
                      spy={true}
                      exact='true' offset={-80}
                      // activeClass='true'
                      >Categories</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact"
                      smooth="true"
                      duration={500}
                      spy={true}
                      exact='true' offset={-80}
                      // activeClass='true'
                      >Contact</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/QualityStandarts"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact='true' offset={-80}
                  // activeClass='true'
                  >Quality Standarts</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
