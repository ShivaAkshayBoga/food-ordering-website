import React from 'react';
import './Burger2.css';

const Burger2 = () => {


    return(
        <div id="About" className="burger-section">
            <div className="burger-content">
                <img src="/images/about-img.png" alt="about-img.png"/>
            </div>
            <div className="burger-text">
                <h2>Burgers & Bites</h2>
                <p>Welcome to Burgers & Bites! We offer a variety of delicious comfort foods including burgers, pizzas, pasta, and crispy french fries. Our goal is to provide fresh, quality meals for you to enjoy at home with ease. Every dish is made with care, ensuring you get the best taste in every bite. Thanks for choosing us to satisfy your cravings!</p>
                <button className="read-more-button">Read More</button>
            </div>
        </div>
    );
};

export default Burger2;