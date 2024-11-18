import React from 'react';
import './BookTable.css';

const BookTable =()=>{

    return(
        <div id="Book Table" className="book-table-section">
            <div className="form-container">
                <h2>Book A Table</h2>
                <form>
                    <input type="text" placeholder="Your Name" required/>
                    <input type="tel" placeholder="Phone Number" required/>
                    <input type="email" placeholder="Your Email" required/>
                    <input type="number" placeholder="How many Persons?" required/>
                    <input type="date" placeholder="dd-mm-yyyy" required/>
                    <button type="submit">Book Now</button>
                </form>
            </div>
            <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11840.999322750564!2d-75.93471079999999
            !3d42.10211995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1731816560460!5m2!1sen!2sus" 
            width="100%"
            height="100%"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            ></iframe>

            </div>
        </div>
    );
};

export default BookTable;