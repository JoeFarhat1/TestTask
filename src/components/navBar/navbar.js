import React from "react";
import { Link } from "react-router-dom";
import './navbarStyles.css'

export const Navbar = (props) =>{
    return <nav>
        <ul className="navbar-items">
    {props?.data?.map(item=>{
        return <li key={item.id}><Link to={item.path} children={item.title}/></li>
    })}
        </ul>

    </nav>
}