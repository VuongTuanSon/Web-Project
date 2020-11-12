import {
  NavLink,
  Link
} from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'

function Header() {
  return (
    	<header>
                <div className="topnav">
                    <NavLink to="#" activeClassName="logo">LOGO</NavLink>
		            <NavLink to="#" activeClassName="items">Thêm</NavLink>
                    <NavLink to="#" activeClassName="items">Thông báo</NavLink>
                    <NavLink to="#" activeClassName="items">Chat</NavLink>
                    <NavLink to="#" activeClassName="items">Tôi bán</NavLink>
                    <NavLink to="#" activeClassName="items">Trang chủ</NavLink>
                </div>
                <div className="topnav">
                {
                    <div>
                        <input placeholder="Tìm kiếm nhà trọ tại đây" type="text"/>
                        <NavLink to="#" activeClassName="nextToSearch">Đăng nhập</NavLink>
                        <NavLink to="#" activeClassName="nextToSearch">Đăng tin</NavLink>
                    </div>
                }
                </div>
      </header>
  );
}

export default Header;
