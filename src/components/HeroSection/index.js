import React, {useState} from 'react';
// import Video from '../../videos/video.mp4';
import AwesomeSlider from 'react-awesome-slider';
import BasicSlider from './HeroSliderTest';
import { Button } from '../ButtonElements';
import { HeroContainer, 
         HeroBg, 
        //  VideoBg, 
         HeroContent,
         HeroH1, 
         HeroP, 
         HeroBtnWrapper, 
         ArrowForward, 
         ArrowRight 
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg className=''>
        {/* <VideoBg autoPlay loop muted src={Video}
         type='video/mp4' /> */}
        <BasicSlider className=''></BasicSlider>
      </HeroBg>
      <HeroContent>
         {/* <AwesomeSlider fillParent={true} className='h-screen'>
          <div data-src="../../images/slider/Elston(1800mm) Gold-Anthracite.jpg" />
          <div data-src="../../images/slider/Harman-Bookcase-Oak-White.jpg" />
          <div data-src="../../images/slider/kitaplНk-Ridge-White-Oak.jpg" />
         </AwesomeSlider> */}
        <HeroH1>Furniture for the Future</HeroH1>
        <HeroP>
          Contact us for take more information
        </HeroP>
        <HeroBtnWrapper>
          <Button to='Contact' 
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
          smooth="true"
          duration={500}
          spy={true}
          exact='true' 
          offset={-80}
          // // activeClass='true'
          >
            Contact Us {hover ? <ArrowForward /> 
            : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
