import React,{useEffect} from "react";

import productData  from "../assets/productData";

import{Container,Row,Col} from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BuyingForm from "../Components/UI/Buyingform";


const ProductDetails = () => {

const {slug}  = useParams()

const singleProductItem = productData.find((item) => item.vehicleName = slug);

useEffect(() => {
    window.scrollTo(0, 0);
}, [singleProductItem]);



    return <Helmet title={singleProductItem.vehicleName}>

        <section>
            <Container>
                <Row>
                    <Col lg='5'>
                    <img src={singleProductItem.img} alt="" className="w-100"/>
                    </Col>

                    <Col lg='6'>
                    <div className="product_info">
                        <h2 className="section_title">{singleProductItem.vehicleName}</h2>

                        <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                            <h6 className="rent_price fw-bold fs-4">${singleProductItem.price}</h6>

                            <span className="d-flex align-items-center gap-2">
                                <span style={{color: "#f9a82e"}}>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                </span>
                                ({singleProductItem.rating}ratings)
                            </span>
                        </div>
                        <p className="section_description">
                            {singleProductItem.description}
                        </p>
                        <div className="d-flex align-items-center mt-3" style={{columnGap: '4rem'}}>
                            <span className="d-flex align-items-center gap-1 section_description">
                            <i class="ri-motorbike-fill" style={{color:"#f9a82e"}}></i>  {singleProductItem.model}
                            </span>

                            <span className="d-flex align-items-center gap-1 section_description">
                            <i class="ri-timer-line"style={{color:"#f9a82e"}}></i>  {singleProductItem.speed}
                            </span>
                        </div>

                    </div>
                    </Col>

                    <Col lg="12" className="mt-5">
                    <div className="Buying-info mt-5">
                        <h5 className="mb-4 fw-bold">Buying Information</h5>
                        <BuyingForm/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>;
};

export default ProductDetails;