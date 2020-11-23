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
                      <NavLink className="items" to="/ProfilePage">Profile</NavLink>
                      <NavLink className="items" to="/Footer">Thông báo</NavLink>
                      <NavLink className="items" to="/Chat">Chat</NavLink>
                      <NavLink className="items" to="/Footer">Tôi bán</NavLink>
                      <NavLink className="items" to="/Products">Danh sách</NavLink>
                      <NavLink className="items" to="">Trang chủ</NavLink>
                </div>
                <div className="topnav">
              <div>
                  <input className="input-search" placeholder="Tìm kiếm nhà trọ tại đây" type="text" />
                        <NavLink className="nextToSearch" to="/PostAddress" >Đăng nhập</NavLink>
                        <NavLink className="nextToSearch" to="/PostAddress">Đăng tin</NavLink>
                    </div>
                </div>
      </header>
  );
}

export default Header;
