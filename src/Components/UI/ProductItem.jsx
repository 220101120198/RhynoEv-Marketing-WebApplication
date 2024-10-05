import React from "react";
import {Col} from 'reactstrap';
import {Link}from 'react-router-dom'
import '../../Styles/product-item.css';

const ProductItem = (props) => {

const {img,model, vehicleName,speed,price} = props.item

    return <Col lg='4' md='2' sm='0' className='mb-5 hero'>
    <div className="car_item">
        <div className="car_img">
          <img src={img} alt="" className="w-100"/>
        </div>

        <div className="car_item-content mt-4">
          <h4 className="section_title text-call">{vehicleName}</h4>
          <h6 className="rent_price text-center mt-">{price}
          <span>$</span></h6>

         <div className="car_item-info d-flex align-items-center justify-content-between mt-3 mb-4">
           <h4 className="d-flex align-items-center gap-1" >{model}</h4>
           <span className="d-flex align-items-center gap-1"><i class="ri-timer-flash-line"></i> {speed}</span>
         </div>
         <button className="w-50 car_item-btn car_btn-rent">
           <Link to={'/prebook'}>Buy now</Link>
         </button>
         <button className="w-50 car_item-btn car_btn-details">
           <Link to={'/seo3'}>Details</Link>
         </button>
        </div>
    </div>
    </Col>
}

export default ProductItem;