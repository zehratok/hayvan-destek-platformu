import React, { Component, Fragment } from "react";
import slide from '../../constants/SlideItems';
import Slide from "./Slide";
import { Pagination, Flex } from "../../styledComponents/SliderStyle";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide,
            currentIndex: 0
        };
    }
    previousState = () => {
        const { slide, currentIndex } = this.state;
        if (currentIndex === 0) {
            return this.setState({ currentIndex: slide.length - 1 });
        }
        this.setState({ currentIndex: currentIndex - 1 });
    };

    nextState = () => {
        const { currentIndex, slide } = this.state;
        if (currentIndex === slide.length - 1) {
            return this.setState({ currentIndex: 0 });
        }
        this.setState({ currentIndex: currentIndex + 1 });
    };

    indexSlide = info => {
        const { id } = info;
        this.setState({ currentIndex: id - 1 });
    };

    render() {
        const { slide, currentIndex } = this.state;
        return (
            <Fragment>
                <Slide key={slide[currentIndex].id} info={slide[currentIndex]} />
                <Flex background>
                    {slide.map(v => {
                        let bgColor = "#F1D4D4";
                        if (currentIndex + 1 === +v.id) {
                            bgColor = "#AC8DAF";
                        }
                        return (
                            <Pagination
                                key={v.id}
                                bgColor={bgColor}
                                onClick={() => this.indexSlide(v)}
                            />
                        );
                    })}
                </Flex>
            </Fragment>
        );
    }
}

export default Slider;
