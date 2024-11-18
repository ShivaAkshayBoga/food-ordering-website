import React from 'react';
import { FaMapMarkedAlt, FaPhone, FaEnvelope, 
    FaInstagram, FaPinterest, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer=()=>{

    return(
        <footer id="footer" className='footer'>
            <div className="footer-section">
                <h3>Contact Us</h3>
                <p> <FaMapMarkedAlt/>Location</p>
                <p><FaPhone/>+1 607-123-456</p>
                <p><FaEnvelope/>xyz@gmail.com</p>
                <h3>Opening Hours</h3>
                <p>Everyday</p>
                <p>10:00 AM - 10:00 PM</p>
                <p>@ 2024 All right reserved</p>
            </div>
            
        </footer>
    );
};

export default Footer;
