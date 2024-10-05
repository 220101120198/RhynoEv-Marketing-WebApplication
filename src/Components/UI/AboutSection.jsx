import React from "react";
import { Container, Row,Col } from "reactstrap";
import '../../Styles/about-section.css'
import aboutImg from '../../assets/image1.png';
const AboutSection = () => {
    return <section className="about" data-aos="fade-up">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                <div className="about_section-content">
                    <h4 className="section_subtitle">About Us</h4>
                    <h2 className="section_tittle">Welcome to Rehyno-Ev</h2>

                    <p className="section_description">Established in 2019 by an automotive engineer with a vision for sustainable and robust
mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
of young individuals passionately driving innovation in the electric vehicle industry. We
believe in engineering solutions that solve problems.
With our first product, we've taken a bold step to create something more than just a vehicle;
it's a unique experience of elegance, comfort and style, addressing the pitfalls of
conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
era in sustainable and dependable electric transportation.
</p>

                    </div>
                    </Col>
                <Col lg='5' md='6'>
                <div className="about_img">
                    <img src={aboutImg} alt=""
                     className="w-100"/>
                </div>
                </Col>
            </Row>
        </Container>
        </section>
}

export default AboutSection;