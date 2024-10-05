import React from 'react'
import {ProductHeader} from "../Header/Header";
import {Link} from "react-router-dom"
import "../../Styles/Dropdown.css";
import { useState } from "react";

function Dropdown(){
    const[dropdown, setDropdown] = useState(false);

    return(
    <>

    <ul className={ dropdown ?"product-submenu.clicked" : "product-submenu"} onClick={() => setDropdown(!dropdown)}>
        {ProductHeader.map(item => {
            return(
                <li key={item.id}>
                    <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>
                    {item.title}
                    </Link>
                </li>
            )
        })}
    </ul>
    
    </>
    );
}

export default Dropdown;