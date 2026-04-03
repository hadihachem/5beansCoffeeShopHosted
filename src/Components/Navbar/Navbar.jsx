import { useContext, useState, useEffect } from 'react';
import "./Navbar.css";
import {imageLinks} from "../../assets/S3Bucket/5beansAssets";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Map routes to menu items
    const getActiveMenuFromPath = (pathname) => {
        switch(pathname) {
            case "/":
                return "home";
            case "/about":
                return "about";
            case "/location":
                return "location";
            // Add more routes here as needed
            default:
                return "home";
        }
    };

    const activeMenu = getActiveMenuFromPath(location.pathname);

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to="/">
                    <img src={imageLinks.logo} alt="Coffee Shop Logo" className="logo" />
                </Link>
                
                {/* Hamburger Menu Button (Mobile Only) */}
                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
                
                <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <li>
                        <Link 
                            to="/" 
                            onClick={() => setMobileMenuOpen(false)} 
                            className={activeMenu === "home" ? "active" : ""}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            onClick={() => setMobileMenuOpen(false)} 
                            className={activeMenu === "about" ? "active" : ""}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/location" 
                            onClick={() => setMobileMenuOpen(false)} 
                            className={activeMenu === "location" ? "active" : ""}
                        >
                            Branches
                        </Link>
                    </li>
                </ul>
                <div style={{width:"20px"}}></div>
            </div>
        </nav>
    )
}

export default Navbar;