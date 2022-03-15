import React from "react";
import { SlideSection, H1 } from "./SliderStyle";

const Slide = ({ info: { image, text } }) => {
  return (
    <SlideSection url={image}>
      <div>
        <H1>{text}</H1>
      </div>
    </SlideSection>
  );
};

export default Slide;
