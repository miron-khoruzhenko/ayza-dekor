import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// import Subtitle from "./components/Subtitle";

import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';



const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";


export default function BasicSlider() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        {/* <Wrapper>
          <Title>Basic Setup</Title>
          <Subtitle>
            Check out the documentation for more advanced examples.
          </Subtitle>
        </Wrapper> */}
      </Overlay>

      <Slide
        shouldRenderMask
        label="Bookcase"
        background={{
          backgroundColor: 'black',
          backgroundImageSrc: img1,
          backgroundImageStyle: ''
        }}
      />

      <Slide
        shouldRenderMask
        label="Antrasit bookcase"
        background={{
          backgroundImageSrc: img2
        }}
      />

      <Slide
        shouldRenderMask
        label="Desk"
        background={{
          backgroundImageSrc: img3
        }}
      />

      <Slide
        shouldRenderMask
        label="White-oak bookcase"
        background={{
          backgroundImageSrc: img4
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
