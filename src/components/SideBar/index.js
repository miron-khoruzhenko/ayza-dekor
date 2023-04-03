import React from 'react';
import {   SidebarContainer,
           Icon,
           CloseIcon,
           SidebarWrapper,
           SidebarMenu,
           SidebarLink,
           SideBtnWrap,
           SidebarRoute } 
from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
                About Us
            </SidebarLink>
            <SidebarLink to="flatpack" onClick={toggle}>
                Flatpack
            </SidebarLink>
            <SidebarLink to="categories" onClick={toggle}>
                Categories
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
                Contact
            </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/QualityStandarts">Quality Standarts</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
