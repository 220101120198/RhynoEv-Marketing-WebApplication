import React from "react";
import {Routes, Route,Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products'
import Prebook from '../Pages/Prebook'
import ProductDetails from "../Pages/ProductDetails";
import Rentals from '../Pages/Rentals'
import Contactus from '../Pages/Contactus';
import SE03   from '../Components/UI/SEO3-N'
import SEO3Lite from '../Components/UI/SEO3.Lite';
import SEO3Max from '../Components/UI/SEO3Max';
import  Corousel from "../Components/UI/corousel";
import PrivacyPolicyPage from '../Components/UI/privacy';
import WebsitePolicyPage from "../Components/UI/WebsitePolicyPage";
const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/corousel" element={<Corousel/>}/>
         <Route path="/products" element={<Products/>}/>
         <Route path="/products/:slug" element={<ProductDetails/>}/>
         <Route path="/seo3" element={<SE03/>}/>
         <Route path="/seo3lite" element={<SEO3Lite/>}/>
         <Route path="/seo3max" element={<SEO3Max/>}/>
         <Route path="/rentals" element={<Rentals/>}/>
         <Route path="/contact" element={<Contactus/>}/>
         <Route path="/prebook" element={<Prebook/>}/>
         <Route path="/privacy" element={<PrivacyPolicyPage/>}/>
         <Route path="/webprivacy" element={<WebsitePolicyPage/>}/>
    </Routes>
}

export default Routers;