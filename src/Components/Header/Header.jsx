import React,{useCallback, useRef} from "react";
import {useState}from"react";
import '../../Styles/header.css'
import {Container, Row,Col, Dropdown} from "reactstrap";
import { Link,NavLink } from "react-router-dom";
// import helloImg from '../../assets/logo.png'
import hiimg from '../../assets/logo1.png'
import  "../UI/SEO3-N";
import DropDown from "../UI/Dropdown";
const navLinks = [
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        display:'About '
    },
    {
        path:'/products',
        display:'Products',
        cName: "submenu-item"
        
    },
    {
        path:'/prebook',
        display:'prebooking'
    },
    {
        path:'/contact',
        display:'Contact'
    }
]
export const  ProductHeader = [
    {
        path:'/seo3',
        title:'SEO3',
        cName: "submenu-item"
     },
     {
         path:'/seo3lite',
         title:'SEO.Lite',
         cName: "submenu-item"
     },
     {
       path:'/seo3max',
       title:'SEO3Max',
       cName: "submenu-item"
     }
]

function Header() {
    const [dropdown,setDropdown]= useState(true);
const menuRef = useRef(null)

const toggleMenu = ()=> menuRef.current.classList.toggle('menu_active')



    return <header className='header'>
        {/* header */}
       <div className="header_top">
        <Container >
            <Row>
                <Col lg='6' md='6' sm='6'>
                
                <div className="header_top_left">
                  <span>Need Help ?</span>
                  <span className="header_top_help">
                  <i class="ri-phone-fill"></i> +91-9023987528
                    </span> 
                </div>
                </Col>
                <Col lg='5' md='6' sm='6'>
                <div className="header_top_right d-flex align-items-centerr justify-content-end gap-3">
                    <Link to='#' className="d-flex align-items gap-1">
                     <i class="ri-login-circle-line"></i>Login
                     </Link>
                     <Link to='#' className="d-flex align-items gap-1">
                     <i class="ri-user-line"></i>Register
                     </Link>
                </div>
                </Col>
            </Row>
        </Container>
        </div>
         {/* Header Middle */}
        <div className="header_middle">
         <Container className="head">
            <Row>
                <Col lg='4' md='3' sm='4'>
                <div className="logo">
                    <h1><Link to="/home" className="d-flex align-items-center gap-3">
                    <Link to="/home"><img src={hiimg}  alt="" className="logo"/></Link>
                    <span><h2>Ev</h2></span>
                    </Link>
                    </h1>
                </div>
                </Col>
            <Col lg='3' md='3' sm='4'> </Col>
            <Col lg='4' md='2' sm='0'>
            <div className="header_location">
                <div className="header_location-content d-flex align-items-centerr gap-3">
                  <h1>Experiece the best Ride with Rhyno Speed <i class="ri-speed-up-line"></i></h1>  
                </div>
            </div>
            </Col>
            </Row>
         </Container>
        </div>
        {/* main navigation */}
        <div className="main_navbar ">
        <Container className="cont ">
        
         <div className="navigation_wrapper justify-content-right ">
           <span className="mobile_menu">
           <i class="ri-menu-line"onClick={toggleMenu}></i>
           </span>
        </div>
        <div className="navigation " ref={menuRef} onClick={toggleMenu}>
        <div className="menu">
            {navLinks.map((item,index) =>{
                if(item.display === "Products"){
                    return(
                        <li key={item.id} className={item.cName} 
                        onMouseEnter={()=> setDropdown(true)}
                        onMouseLeave={()=>setDropdown(false)}>
                         <Link to={item.path} className='nav_item' >{item.display}</Link>
                           {dropdown && <DropDown/>}
                        </li>
                    );
                    
                }
                return(<NavLink to={item.path} className={navClass=> navClass.isActive ? 'nav_active nav_item' : 'nav_item'} key={index}>
                    {item.display}
                    </NavLink>);
            })}
                
       
        
         <div className="nav_right d-flex  justify-content-end">
            <div className="search_box">
                <input type="text" placeholder="Search"/>
                <span>
                    <i class="ri-search-2-line"></i>
                    </span>
            </div>
        </div>   
        </div>
        </div>
        
        </Container>
        </div>
    </header>
    
};


export default Header;