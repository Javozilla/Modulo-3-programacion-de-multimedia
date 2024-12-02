import { Navbar } from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';

const AboutUsPage = () => {
return (
    <div>
        <Navbar />
        <div className="app__aboutus">
            <h1>About Us</h1>
            <p>Welcome to our cozy corner of coffee heaven. Since 2020, we've been crafting exceptional coffee experiences 
            with carefully sourced beans from around the world. Our passionate baristas take pride in serving the perfect cup, 
            whether you're starting your day, meeting friends, or seeking a quiet moment with your favorite brew. 
            We believe in sustainable practices, community connections, and the simple joy that comes with every perfectly crafted cup.</p>
        </div>
        <Footer />
    </div>
);
}

export default AboutUsPage;