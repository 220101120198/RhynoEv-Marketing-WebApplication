
import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSlider from "../Components/UI/HeroSlider";
import Helmet from '../Components/Helmet/Helmet'
import { Container, Row,Col} from 'reactstrap';
import AboutSection from "../Components/UI/AboutSection";
import ProductItem from "../Components/UI/ProductItem";
import productData from "../assets/productData";
import Corousel from "../Components/UI/corousel";

const Home =() => {
    useEffect(() => {
        AOS.init({duration:2000}); //You can add options as per your need inside an object
       }, []);
    return(
     <Helmet title='Home'>


        {/* Hero section */}
        <section className="p-0 hero_slider-section">
            <HeroSlider/>

        </section>
        {/* <script>
            (function ($){
                'use strict'(
                    (function(){
                        AOS.init();
                    })
                )
            })
        </script> */}
        {/* about section */}
        <div data-aos="fade-up"data-aos-delay="30">
        <AboutSection data-aos="fade-right"/>
        </div>
        {/* offer section */}
        <section className="product">
        <div data-aos="zoom-in" data-aos-delay="20">
            <Container>
                <Row>
                    <Col lg='12'className="text-center mb-5">
                   <h6 className="section_subtitle">
                    Come with
                   </h6>
                   <h2 className="section_title">
                    Hot offer
                   </h2>
                    </Col>
                    <Col  lg='12' md='2' sm='0' className='d-flex align-items-center gap-3 mb-5'>
                    {productData.slice(0,3).map((item)=>(
                        <ProductItem item={item} key={item.id} />
                    ))

                    }
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
        <section className="corousel" data-aos="flip-right"data-aos-delay="30">
        <Corousel />
        </section>
    </Helmet>
    );
}

export default Home;