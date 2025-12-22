import { useContext, useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/food_del/frontend_assets/logo.jpg";
// import shopping_cart from "../../assets/shopping-cart.png";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
// import { assets } from '../../assets/food_del/frontend_assets/assets';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to="/"><img src={logo} alt="Coffee Shop Logo" className="logo" /></Link>
                
                {/* Hamburger Menu Button (Mobile Only) */}
                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
                
                <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <li>
                        <Link to="/" onClick={() => { setMenu("home"); setMobileMenuOpen(false); }} className={menu === "home" ? "active" : ""}>Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/menu" onClick={() => { setMenu("menu"); setMobileMenuOpen(false); }} className={menu === "menu" ? "active" : ""}>Menu</Link>
                    </li> */}
                    <li>
                        <Link to="/about" onClick={() => { setMenu("about"); setMobileMenuOpen(false); }} className={menu === "about" ? "active" : ""}>About</Link>
                    </li>
                    {/* <li>
                        <Link to="/Feedback" onClick={() => { setMenu("feedback"); setMobileMenuOpen(false); }} className={menu === "feedback" ? "active" : ""}>Feedback</Link>
                    </li> */}
                    <li>
                        <Link to="/location" onClick={() => { setMenu("location"); setMobileMenuOpen(false); }} className={menu === "location" ? "active" : ""}>Branches</Link>
                    </li>
                </ul>
                {/* <div className="navbar-right">
                    <div className="navbar-cart-icon">
                        <Link to="/cart">
                            <img src={shopping_cart} alt="Shopping Cart" />
                            {getTotalCartAmount() > 0 && <span className="cart-badge"><small></small> </span>}
                        </Link>
                    </div>
                    
                    {!token ? (
                        <button onClick={() => setShowLogin(true)} className="signin-btn">
                            Sign In
                        </button>
                    ) : (
                        <div className='navbar-profile'>
                            <img src={assets.profile_icon} alt="Profile" />
                            <ul className="navbar-profile-dropdown">
                                <li onClick={() => navigate('/myorders')}>
                                    <img src={assets.bag_icon} alt="Orders" />
                                    <span>My Orders</span>
                                </li>
                                <hr />
                                <li onClick={logout}>
                                    <img src={assets.logout_icon} alt="Logout" />
                                    <span>Logout</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>  */}
                <div style={{width:"20px"}}></div>
            </div>
        </nav>
    )
}

export default Navbar;