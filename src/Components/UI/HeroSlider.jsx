import React from "react";

import Slider from 'react-slick'
import {Container, fade} from 'reactstrap'
import { Link,} from "react-router-dom";
import '../../Styles/hero-slider.css';
const HeroSlider = () => {
    const settings ={
        fade: true,
        speed:200,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay:true,
        slideToShow:1,
        slideToScroll:1,
        pauseOnHover: false,
        
    }
    return <Slider {...settings} className="'hero-slider">

        <div className="slider_item slider_item-01 mt0">
            <Container>
                <div className="slider_content">
                    <h1 className="text-light mb-4">Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets <span className="word">Style.. .</span></h1>

                   <button className=" reserve_btn mt-4">
                    <Link to='/prebook'className="pre">Prebook now</Link>
                   </button>
                </div>
            </Container>
        </div>

        <div className="slider_item slider_item-02 mt0">
            <Container>
                <div className="slider_content">
                    <h1 className="text-light mb-4">Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets <span className="word">Elegance.. .</span></h1>

                    <button className=" reserve_btn mt-4">
                    <Link to='/prebook'className="pre">Prebook now</Link>
                   </button>
                </div>
            </Container>
        </div>

        <div className="slider_item slider_item-03 mt0">
            <Container>
                <div className="slider_content">
                    <h1 className="text-light mb-4">Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets<span className="word"> Comfort.. .</span></h1>

                    <button className=" reserve_btn mt-4">
                    <Link to='/prebook'className="pre">Prebook now</Link>
                   </button>
                </div>
            </Container>
        </div>



    </Slider>
}

export default HeroSlider;