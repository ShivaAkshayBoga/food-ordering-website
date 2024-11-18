import React from "react";
import './Promotions.css';
import { FaShoppingCart } from "react-icons/fa";

const Promotions = () => {

    return(
        <div className="promotions"> 
        <div className="promotion-card">
            <img src="./images/f2.png" alt="Burger"/> 
            <div className="promotion-content">
                <div className="promotion-title">Tasty Thursdays</div>
                <div className="promotion-discount">20% Off</div>
                <button className="order-button">Order Now <FaShoppingCart/></button>
            </div>
        </div>

        <div className="promotion-card">
            <img src="./images/f6.png" alt="Pizza"/> 
            <div className="promotion-content">
                <div className="promotion-title">Pizza Day</div>
                <div className="promotion-discount">15% Off</div>
                <button className="order-button">Order Now <FaShoppingCart/></button>
            </div>
        </div>

        </div>
    )
};
export default Promotions;
