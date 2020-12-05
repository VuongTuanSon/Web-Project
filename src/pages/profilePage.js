import {
    NavLink,
    Link
} from 'react-router-dom';
import avatar1 from './images/avatar1.png'
import list1 from './images/list-item1.jpg'

import { FaCog } from 'react-icons/fa';
import NotificationPosts from '../component/notificationPosts';
function ProfilePage() {
    return (
        <div className="ekvnxp">
            <div className="separator"></div>
            <hr className="divide-profile"/>
            <div className="container">
                <div className="col1-2">
                    <NavLink to="" className="">
                        <div className="avatar-image2">
                            <img className="ava-pic" src={avatar1} width="50" height="50" />
                        </div>
                        <span className="seller-name">Vương Tuấn Sơn</span>
                    </NavLink>
                    <Link to="/LikedPosts">
                        <div className="saved-posts">
                                Tin bài đã lưu
                        </div>
                    </Link>
                </div>
                <div className="vl"></div>
                <div className="col2-2">
                    <span className="profile-info">Ngày tham gia : 29/10/2020 </span>
                    <span className="profile-info">Địa chỉ : Hà Nội </span>
                    <span className="profile-info">Email : sonvuong2910@gmail.com </span>
                    <span className="profile-info">Số điện thoại : 0972759616</span>
                </div>
            </div>
            <hr className="divide-profile" />
            <div className="">
                <h1 className="eBxpbB">Đang cho thuê</h1>
                <hr />
                <NotificationPosts/>
            </div>
        </div>
    );
}

export default ProfilePage;