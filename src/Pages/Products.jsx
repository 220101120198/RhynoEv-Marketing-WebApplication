import React from 'react';
import { Container, Row,Col} from 'reactstrap';
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../Components/UI/commonSection';
import ProductItem from '../Components/UI/ProductItem';
import productData from "../assets/productData";
// import SEO3 from "../Components/UI/SEO3-N"
const Products = () => {

    return (
        <Helmet title='Products'>
            <CommonSection title='Products'/>
            <section>
            <Container>
                <Row> 
                <Col lg="12">
                <div className='d-flex align-items-center gap-3 mb-5'>
                    <span className='d-flex align-items-center gap-2'>
                    <i class="ri-sort-asc"></i>Sort By
                    </span>

                    <select >
                        <option>Select</option>
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>
                    </select>
                </div>
                </Col>
                <Col  lg='12' md='2' sm='0' className='d-flex align-items-center gap-3 mb-5'>
                {
                    productData.slice(0,3).map(item=> <ProductItem item={item} key={item.id}/>)
                }
                </Col>
                </Row>
            </Container>
            </section>
            {/* <SEO3/> */}
        </Helmet>
    );
    
};

export default Products;