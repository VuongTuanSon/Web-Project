import {
    NavLink,
    Link
} from 'react-router-dom';
// import 'react-slideshow-image/dist/styles.css'
import { FaFacebookSquare, FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
function Footer() {
    return (
        <footer >
            <div className="container">

            
            <div className="footer-container wrap">
                <div className="footer-item">
                    <p className="footer-heading">Hỗ trợ khách hàng</p>
                    <ul className="footer-ul">
                        <li className="footer-li"><Link to="">Trung tâm trợ giúp</Link></li>
                        <li className="footer-li"><Link to="">An toàn mua bán</Link></li>
                        <li className="footer-li"><Link to="">Quy định cần biết</Link></li>
                        <li className="footer-li"><Link to="">Quy chế quyền riêng tư</Link></li>
                        <li className="footer-li"><Link to="">Liên hệ hỗ trợ</Link></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <p className="footer-heading">Về website</p>
                    <ul className="footer-ul">
                        <li className="footer-li"><Link to="">Giới thiệu</Link></li>
                        <li className="footer-li"><Link to="">Tuyển dụng</Link></li>
                        <li className="footer-li"><Link to="">Truyền thông</Link></li>
                        <li className="footer-li"><Link to="">Blog</Link></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <p className="footer-heading">Liên kết</p>
                    <ul className="footer-ul">
                        <li className="footer-li"><Link to=""><FaFacebookSquare className="footer-icon" /></Link></li>
                        <li className="footer-li"><Link to=""><FaInstagram className="footer-icon" /></Link></li>
                        <li className="footer-li"><Link to=""><FaTwitter className="footer-icon"/></Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
