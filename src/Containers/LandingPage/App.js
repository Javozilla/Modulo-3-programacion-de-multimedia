import logo from '../../logo.svg';
import css from './App.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <h1>Welcome to Our Website</h1>
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
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
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
      </main>

      <footer className={css.footer}>
        <p>© 2024 Your Company. All rights reserved.</p>
        <a
          className={css.App_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
