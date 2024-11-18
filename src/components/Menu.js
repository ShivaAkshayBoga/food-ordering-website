import React, {useState} from 'react';
import './Menu.css';
import {FaCaretDown, FaShoppingCart} from 'react-icons/fa';

const menuItems = [
    {category:'Pizza', Name: 'Loaded Chicken Pizza', Price:'$20', Image:'/images/f1.png',text:'Savor the bold flavors of tender chicken topped with a rich blend of mozzarella, zesty sauce, and fresh vegetables. Perfectly baked to crispy perfection, this pizza is a delightful feast for chicken lovers. Enjoy every bite with a mix of savory herbs and spices. A satisfying meal that will leave you craving more.'},
    {category:'Burger', Name: 'Cheese Burger', Price:'$10', Image:'/images/f2.png',text:'A classic favorite, this cheese burger features a juicy beef patty, melted cheese, and fresh lettuce all sandwiched between a soft, toasted bun. Topped with a special sauce, it is a comfort food experience in every bite. A delicious balance of textures and flavors for any burger enthusiast. '},
    {category:'Pizza', Name: 'Farm House Pizza', Price:'$15', Image:'/images/f3.png',text:'Experience the rustic taste of a Farm House Pizza, topped with fresh vegetables, savory meats, and a creamy cheese blend. This wholesome pizza offers a combination of farm-fresh ingredients and classic Italian flavors. It’s the perfect choice for those who love a hearty, veggie-loaded dish. '},
    {category:'Pasta', Name: 'Pasta & Salad', Price:'$22', Image:'/images/f4.png',text:'Indulge in a plate of rich, creamy pasta paired with a refreshing, crisp salad. The pasta is cooked to perfection, smothered in a flavorful sauce, while the salad offers a burst of freshness. Together, they create a delightful balance of flavors and textures. Ideal for a light yet filling meal.'},
    {category:'Fries', Name: 'Cheesy French Fries', Price:'$15', Image:'/images/f5.png',text:'Crispy, golden fries loaded with a melty, gooey layer of cheese for a mouthwatering treat. These cheesy French fries are the perfect snack or side dish to complement any meal. The combination of salty fries and rich cheese makes every bite irresistible. A true indulgence for cheese lovers.'},
    {category:'Pizza', Name: 'Loaded Vegetable Pizza', Price:'$20', Image:'/images/f6.png',text:'A veggie lover’s dream, this Loaded Vegetable Pizza is packed with a colorful variety of fresh vegetables and greens, all on a crispy crust and topped with a blend of melted cheese and many more.  It’s a flavorful choice for anyone seeking a vegetarian delight. '},
    {category:'Burger', Name: 'Royal Chicken Burger', Price:'$15', Image:'/images/f7.png',text:'Treat yourself to a Royal Chicken Burger, featuring a perfectly seasoned grilled chicken patty, topped with fresh lettuce, tomatoes, and a special sauce. Nestled in a soft, warm bun, this burger delivers a premium taste experience. Each bite is a flavorful combination of tender chicken and crisp, fresh veggies. '},
    {category:'Burger', Name: 'Grill Chicken Burger', Price:'$12', Image:'/images/f8.png',text:'Savor the smoky goodness of a Grilled Chicken Burger, with a perfectly charred chicken patty and a blend of fresh, crunchy toppings. Served with a creamy sauce on a toasted bun, it’s a burger that’s as flavorful as it is satisfying. A perfect choice for those who enjoy a tender, grilled twist on a classic. '},
    {category:'Pasta', Name: 'Mac & Cheese Pasta', Price:'$20', Image:'/images/f9.png',text:'Comfort food at its finest, Mac & Cheese Pasta combines creamy cheese sauce with tender pasta for a rich, satisfying dish. The smooth cheese coats every piece of pasta, creating a creamy and delicious texture. It’s the perfect meal for cheese lovers who enjoy a little indulgence. '}

];

const category = ['All', 'Burger', 'Pizza', 'Pasta', 'Fries'];

const Menu = () =>{

    const[activeCategory, setActiveCategory] = useState('All');
    const filteredItems=activeCategory === 'All' ? menuItems: menuItems.filter(item => item.category === activeCategory);

    return(
        <div id="men" className="menu">
            <h2>Our Menu</h2>
            <div className="menu-categories">
                {category.map(category =>(
                    <button key={category}
                    className={activeCategory === category ? 'active' : ''}
                    onClick = {()=>setActiveCategory(category)}> 
                    {category}
                    </button>
                ))}
            </div>

            <div className="menu-items">
                {filteredItems.map((item, index)=>(
                    <div className="menu-card" key={index}>
                        <img src={item.Image} alt={item.Name}/>
                        <div className="menu-card-content">
                            <h3>{item.Name}</h3>
                            <p>{item.text}</p>
                            <div className="Menu-card-price">{item.Price}</div>
                            <button className="order-button">Order Now<FaShoppingCart/></button>
                        </div>
                    </div>   
                ))}
            </div>

        </div>
    )
};

export default Menu;
