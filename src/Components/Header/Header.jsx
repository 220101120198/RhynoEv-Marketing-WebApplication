import React, { useRef } from "react";
import { useState } from "react";
import '../../Styles/header.css';
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import hiimg from '../../assets/logo1.png';
// import  "../UI/SEO3-N";

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About '
    },
    {
        path: '/products',
        display: 'Products'
    },
    {
        path: '/prebook',
        display: 'Prebooking'
    },
    {
        path: '/contact',
        display: 'Contact'
    }
];

function Header() {
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle('menu_active');

    return (
        <header className='header'>
            {/* header */}
            <div className="header_top">
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6'>
                            <div className="header_top_left">
                                <span>Need Help ?</span>
                                <span className="header_top_help">
                                    <i className="ri-phone-fill"></i> +91-9023987528
                                </span>
                            </div>
                        </Col>
                        <Col lg='5' md='6' sm='6'>
                            <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                                <Link to='#' className="d-flex align-items gap-1">
                                    <i className="ri-login-circle-line"></i>Login
                                </Link>
                                <Link to='#' className="d-flex align-items gap-1">
                                    <i className="ri-user-line"></i>Register
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
                                <h1>
                                    <Link to="/home" className="d-flex align-items-center gap-3">
                                        <Link to="/home"><img src={hiimg} alt="" className="logo" /></Link>
                                        <span><h2>Ev</h2></span>
                                    </Link>
                                </h1>
                            </div>
                        </Col>
                        <Col lg='3' md='3' sm='4'> </Col>
                        <Col lg='4' md='2' sm='0'>
                            <div className="header_location">
                                <div className="header_location-content d-flex align-items-center gap-3">
                                    <h1>Experience the best Ride with Rhyno Speed <i className="ri-speed-up-line"></i></h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Main Navigation */}
            <div className="main_navbar">
                <Container className="cont">
                    <div className="navigation_wrapper justify-content-right">
                        <span className="mobile_menu">
                            <i className="ri-menu-line" onClick={toggleMenu}></i>
                        </span>
                    </div>
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu">
                            {navLinks.map((item, index) => (
                                <NavLink to={item.path} className={navClass => navClass.isActive ? 'nav_active nav_item' : 'nav_item'} key={index}>
                                    {item.display}
                                </NavLink>
                            ))}
                            <div className="nav_right d-flex justify-content-end">
                                <div className="search_box">
                                    <input type="text" placeholder="Search" />
                                    <span>
                                        <i className="ri-search-2-line"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
}

export default Header;
