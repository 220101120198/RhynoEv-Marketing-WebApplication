import React from "react";
import img01 from "../../assets/all-images/image3.png";
import{Container,Row,Col} from "reactstrap";
import Helmet from "../Helmet/Helmet";
import {Link}from 'react-router-dom'
import productData from "../../assets/productData";
const SEO3 = () => {
    return <Helmet title={SEO3}>

    <section>
        <Container>
            <Row>
                <Col lg='5'>
                <img src={img01} alt="" className="w-100"/>
                </Col>
                <Col lg='6'>
                <div className="product_info">
                    <h2 className="section_title">SEO3-Max</h2>

                    <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                        <h6 className="rent_price fw-bold fs-4">$50</h6>

                        <span className="d-flex align-items-center gap-2">
                            <span style={{color: "#f9a82e"}}>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            <i class="ri-star-fill"></i>
                            </span>
                            ({productData.rating}ratings)
                        </span>
                    </div>
                    <p className="section_description">
                    This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.
                    </p>
                    <div className="d-flex align-items-center mt-3" style={{columnGap: '4rem'}}>
                        <span className="d-flex align-items-center gap-1 section_description">
                        <i class="ri-motorbike-fill" style={{color:"#f9a82e"}}></i>  Model 6
                        </span>

                        <span className="d-flex align-items-center gap-1 section_description">
                        <i class="ri-timer-line"style={{color:"#f9a82e"}}></i>60km/h
                        </span>
                        <button className="w-50 car_item-btn car_btn-rent">
                        <Link to={'/prebook'}>Buy now</Link>
                        </button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
</Helmet>;
}
export default SEO3;