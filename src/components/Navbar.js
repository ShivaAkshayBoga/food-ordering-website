import React, {useState} from 'react';
import './Navbar.css';
import {FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () =>{

    const[isMobile, setIsMobile] = useState(false);
    return(
        <nav id="home" className='navbar'>
            <h1 className='navbar-logo'>Burgers & Bites</h1>
            <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
                <a href="#home">Home</a>
                <a href="#men">Menu</a>
                <a href="#About">About</a>
                <a href="#Book Table">Book Table</a>
                <a href="#footer">Contact Us</a>
                <FaUser className='nav-icon'></FaUser>
                <FaShoppingCart className='nav-icon'></FaShoppingCart>
                <FaSearch className='nav-icon'></FaSearch>
                <button className="order-button">Order Online</button>
            </div>
            <div className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
                {isMobile ? <FaTimes/> : <FaBars/>}
            </div>   
        </nav>
    )
}

export default Navbar;