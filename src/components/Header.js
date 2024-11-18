import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Header.css";

const Header = () =>{

    return(
        <header className="header">
            <div className="header-content">
                <Carousel
                showThums={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                showArrows={false}
                >
                <div className="slider-text">
                    <h2>Delicious Pizza Delights</h2>
                    <p>Indulge in the perfect blend of fresh ingredients, cheesy goodness, and crispy crust. Every bite is a taste of heaven! From classic margherita to bold flavors, each pizza is crafted with love and baked to perfection.</p>
                    <button className="order-button">Order Now</button>
                </div>
                <div className="slider-text">
                    <h2>The Ultimate Fries</h2>
                    <p> Golden, crispy, and perfectly seasoned – our fries are the ideal snack or side dish, served hot and fresh every time. Whether you like them classic or loaded with toppings, these fries will leave you craving more.</p>
                    <button className="order-button">Order Now</button>
                </div>
                <div className="slider-text">
                    <h2>Ultimate Burgers</h2>
                    <p> Sink your teeth into the juiciest, most flavorful burgers around, made with premium ingredients and cooked to perfection. Packed with bold flavors and topped with the finest fresh ingredients, these burgers are sure to satisfy any craving.</p>
                    <button className="order-button">Order Now</button>
                </div>
                </Carousel>
            </div>
        </header>

    );
};

export default Header;