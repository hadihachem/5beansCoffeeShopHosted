// import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css"
import {Link} from "react-router-dom"
import { imageLinks } from "../../assets/S3Bucket/5beansAssets";
// import facebook_icon from "../../assets/food_del/frontend_assets/facebook_icon.png"
// import linkedin_icon from "../../assets/food_del/frontend_assets/linkedin_icon.png"

const Footer = () => {
  return (
    <div id="footer" className="footer">
        <img src={imageLinks.footerFlatWhite} alt="Coffee art" className="footerFlatwhite" />
        <div className="footer-content">
            <div className="footer-content-left">
                <Link to="/"><img src={imageLinks.logoHorizontal} alt="Coffee Shop Logo" className="logo" /></Link>
                <p>Your premium coffee experience. We source the finest beans and craft each cup with passion and precision.</p>
                <div className="footer-social-icons">
                    {/* <img src={facebook_icon} alt="" /> */}
                    {/* <InstagramIcon  fontSize="large"/> */}
                    {/* <img src={linkedin_icon} alt="" /> */}

                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About Us</li></a>
                    <a href="/location"><li>Locations</li></a>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>
                    <a href="mailto:support@jmjsgroup.com">support@jmjsgroup.com</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">copyright 2025 © Hadi Hachem - All Rights Reserved</p>
    </div>
  )
}

export default Footer