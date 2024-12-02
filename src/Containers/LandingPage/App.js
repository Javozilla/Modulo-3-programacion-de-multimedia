import logo from '../../logo.svg';
import css from './App.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import coffeeImage1 from '../../assets/coffee1.jpeg';
import coffeeImage2 from '../../assets/coffee2.jpeg';
import coffeeImage3 from '../../assets/coffee3.jpeg';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const slides = [
    { image: logo, text: 'Slide 1' },
    { image: logo, text: 'Slide 2' },
    { image: logo, text: 'Slide 3' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={css.App}>
      <header className={css.App_header}>
        <div className={css.header_content}>
          <h1>Welcome to Our coffe shop</h1>
          <button 
            className={css.menu_button}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        
        <nav className={`${css.nav_menu} ${isMenuOpen ? css.open : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutUsPage/AboutUsPage">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/ProdctsPage/prodcts.js">Products</Link></li>
            <li><Link to="/cartPage/cartIndex">Shopping Cart</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className={css.carousel_container}>
        <button onClick={prevSlide} className={css.carousel_button}>←</button>
        <div className={css.carousel_slide}>
          <img src={slides[currentSlide].image} alt={slides[currentSlide].text} />
          <p>{slides[currentSlide].text}</p>
        </div>
        <button onClick={nextSlide} className={css.carousel_button}>→</button>

        <div className={css.products_section}>
          <h2>Our Featured Products</h2>
          <div className={css.products_container}>
            <div className={css.product_card}>
              <img src={coffeeImage1} alt="Colombian Coffee" className={css.product_image} />
              <h3>Colombian Coffee</h3>
              <p>Premium single-origin Colombian coffee beans</p>
              <p className={css.price}>$14.99</p>
              <button className={css.add_to_cart_btn}>Add to Cart</button>
            </div>

            <div className={css.product_card}>
              <img src={coffeeImage2} alt="Ethiopian Coffee" className={css.product_image} />
              <h3>Ethiopian Coffee</h3>
              <p>Rich and aromatic Ethiopian blend</p>
              <p className={css.price}>$16.99</p>
              <button className={css.add_to_cart_btn}>Add to Cart</button>
            </div>

            <div className={css.product_card}>
              <img src={coffeeImage3} alt="House Blend" className={css.product_image} />
              <h3>House Blend</h3>
              <p>Our signature house blend coffee</p>
              <p className={css.price}>$12.99</p>
              <button className={css.add_to_cart_btn}>Add to Cart</button>
            </div>
          </div>
        </div>
      </main>

      <footer className={css.footer}>
        <div className={css.footer_content}>
          <div className={css.social_links}>
            <h3>Follow Us</h3>
            <div className={css.social_icons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className={css.footer_center}>
            <p>© 2024 Your Company. All rights reserved.</p>
          </div>

          <div className={css.site_links}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
