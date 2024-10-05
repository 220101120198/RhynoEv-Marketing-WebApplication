import React from "react";

import  {Container,Row,Col,ListGroup,ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
import '../../Styles/footer.css';
const date = new Date()
const year = date.getFullYear()
export const quickLinks = [
    {
        Path: '/about',
        display:'About'
    },
    {
        Path: '/products',
        display:'Products'
    },
    {
        Path: '/contact',
        display:'Contact'
    },
]
const Footer = () => {
    
    return <footer className="footer">
       <Container>
        <Row>
            <Col lg='5' md='4'sm='12'>
            <div className=" footer_logo">
                    <h1>Rhyno-ev Rentals </h1>
                </div>
                <p className="p-0 mt-3 footer_logo-content">
                Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.
Additionally, 
we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.

                </p>
            </Col>
            <Col lg='4' md='4'sm='12'>
            <div className="mb-4 align-items-center quick">
                <h5 className="p-0 mt-3 footer_link-title ">Quick Links</h5>
                <ListGroup>
                    <Link  to='/privacy' className="p-0 mt-3 quick-data a">Privacy Policy</Link>
                    <Link  to='/webprivacy'className="p-0 mt-3 quick-data">Website Policy</Link>
                    <Link  to='/privacy' className="p-0 mt-3 quick-data">Refund Policy</Link>
                    <Link  to='/about' className="p-0 mt-3 quick-data">About</Link>
                    <Link  to='/products'className="p-0 mt-3 quick-data">Products</Link>
                    <Link  to='/contact' className="p-0 mt-3 quick-data">Contact</Link>
                    
                </ListGroup>
            </div>
            <Col lg='12' md='14' sm='12'>
            <div className="footer_bottom">
                <p className="section_description d-flex align-items-center justify content-center gap-1 ">
                <i class="ri-copyright-line">Copyright {year}, Developed by Chandu Maharana.All rights reserved.</i>
                </p>
            </div>
            
            </Col>
             </Col>
             <Col lg='2' md='2' sm='0'>
            <div class="social">
            <Link to="https://www.instagram.com/rhyno.in?igsh=bjJyMTVpZzB1NGl3"><i class="ri-instagram-line"></i></Link><br/>
            <Link to="https://www.linkedin.com/company/rhyno-wheels/"><i class="ri-linkedin-box-fill"></i></Link><br/>
            <Link to="#"><i class="ri-facebook-circle-line"></i></Link><br/>
            <Link to="#"><i class="ri-twitter-line"></i></Link><br/>
             </div>
            </Col>
        </Row>
        </Container> 
    </footer>
};

export default Footer;