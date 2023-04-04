import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import {Counter} from '../components/Counter';
import Footer from '../components/Footer';
import { Contact } from '../components/Contact/Contact';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


  return (
    <div className=''>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Counter/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Categories />
      <Contact/>
      {/* <InfoSection {...homeObjThree} /> */}
      <Footer />
    </div>
  )
}

export default Home;
