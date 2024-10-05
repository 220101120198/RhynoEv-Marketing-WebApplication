import React from "react";
import { Link } from 'react-router-dom';
import { Container,Row ,Col} from 'reactstrap';
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../Components/UI/commonSection';
import{Form,FormGroup} from 'reactstrap';
import '../Styles/contact.css'

const Contactus = () => {
    return (
    <Helmet title='Contact'>
        <CommonSection title="Contact us"/>
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='7'>
                    <h6 className="fw-bold mb-4 hlo">Get in touch</h6>
                    <Form>
                        <FormGroup className="contact_form">
                          <input placeholder="Your Name" type="text" className="box"/>
                        </FormGroup>
                        <FormGroup className="contact_form">
                          <input placeholder="Email" type="email " className="box"/>
                        </FormGroup>
                        <FormGroup className="contact_form">
                          <textarea 
                          rows="5"
                          placeholder="Message"
                          className="textarea">
                          </textarea>
                        </FormGroup>

                    <button className=" contact_btn" 
                    type="submit">Send</button>
                    </Form>
                    </Col>
                    <Col lg='5' md='5'>
                    <div className="contact_info">
                        <h6 className="fw-bold hi" >Contact Information</h6>
                        <p className="section_description mb-0">
Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
Raisan, Gandhinagar, Gujarat, India.
</p>
<div className="d-flex align-items-center gap-2">
    <h6 className="fs-6 mb-0">Phone:</h6>
    <p className="section_description mb-0"> +91-9023987528</p>
</div>
<div className="d-flex align-items-center gap-2">
    <h6>Email:</h6>
    <p className="section_description"> info@rhyno.in</p>
</div>

<h6 className="fw-bold mt-4">Follow us</h6>
         <div class="physics">
            <Link to="https://www.instagram.com/rhyno.in?igsh=bjJyMTVpZzB1NGl3"><i class="ri-instagram-line"></i></Link>
            <Link to="https://www.linkedin.com/company/rhyno-wheels/"><i class="ri-linkedin-box-fill"></i></Link>
            <Link to="#"><i class="ri-facebook-circle-line"></i></Link>
            <Link to="#"><i class="ri-twitter-line"></i></Link>
             </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
    );
};

export default Contactus;