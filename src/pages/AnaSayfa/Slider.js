import React, { Component, Fragment } from "react";
import Slide from "./Slide";
import { Pagination, Flex } from "./SliderStyle";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: [
                {
                    id: "1",
                    image:
                        "https://i.hizliresim.com/ozn8tnh.jpg",
                    text: "Barınakları Ara"
                },
                {
                    id: "2",
                    image:
                    "https://i.hizliresim.com/bz99702.jpg",
                    text: "Evcil Hayvan Sahiplen"
                },
                {
                    id: "3",
                    image:
                        "https://i.hizliresim.com/hover2u.jpg",
                    text: "Veterinere Soru Sor"
                }
            ],
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
                        let bgColor = "whitesmoke";
                        if (currentIndex + 1 === +v.id) {
                            bgColor = "#DDB6C6";
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
