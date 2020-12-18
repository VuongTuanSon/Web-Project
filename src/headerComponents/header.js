import {
  NavLink,
  Link
} from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'
function Header() {
  return (
    	<header>
                <div className="topnav">
                      <NavLink className="logo" to="/Footer">LOGO</NavLink>
                      <NavLink className="items" to="/Notification">Thông báo</NavLink>
                      <NavLink className="items" to="/Chat">Chat</NavLink>
                      <NavLink className="items" to="/Products">Tôi bán</NavLink>
                      <NavLink className="items" to="">Trang chủ</NavLink>
                </div>
                <div className="topnav">
                  <input className="input-search" placeholder="Tìm kiếm nhà trọ tại đây" type="text" />
                        <NavLink className="nextToSearch" to="/PostAddress">Đăng tin</NavLink>
                    </div>
      </header>
  );
}

export default Header;
