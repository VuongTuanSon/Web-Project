import {
  NavLink,
  Link
} from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'
function Header() {
  return (
    	<header>
                <div className="topnav">
                      <NavLink className="items" to="/Footer">LOGO</NavLink>
                      <NavLink className="items" to="/Footer">Profile</NavLink>
                      <NavLink className="items" to="/Footer">Thông báo</NavLink>
                      <NavLink className="items" to="/Footer">Chat</NavLink>
                      <NavLink className="items" to="/Footer">Tôi bán</NavLink>
                      <NavLink className="items" to="/Footer">Danh sách</NavLink>
                      <NavLink className="items" to="/Footer">Trang chủ</NavLink>
                </div>
                <div className="topnav">
                    <div>
                        <input placeholder="Tìm kiếm nhà trọ tại đây" type="text"/>
                        <NavLink to="#" activeClassName="nextToSearch">Đăng nhập</NavLink>
                        <NavLink to="#" activeClassName="nextToSearch">Đăng tin</NavLink>
                    </div>
                </div>
      </header>
  );
}

export default Header;
