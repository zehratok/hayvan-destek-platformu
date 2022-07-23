import React from "react";
import { SlideSection, H1 } from "../../styledComponents/SliderStyle";
import slide1 from '../../resimler/slide1.svg'
import slide2 from '../../resimler/slide2.svg'
import slide3 from '../../resimler/slide3.svg'
import slide4 from '../../resimler/slide4.svg'

const Slide = ({ info: { image, text } }) => {
  if(image=="slide1"){
    image = slide1
  }
  if(image=="slide2"){
    image = slide2
  }
  if(image=="slide3"){
    image = slide3
  }
  if(image=="slide4"){
    image = slide4
  }
  return (
    <SlideSection>
      <div>
        <img src={image} />
        <H1>{text}</H1>
      </div>
    </SlideSection>
  );
};

export default Slide;
