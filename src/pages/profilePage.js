import {
    NavLink,
    Link
} from 'react-router-dom';
import avatar1 from './images/avatar1.png'
import list1 from './images/list-item1.jpg'
import heart from './images/heart.png'
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
                    <div className="separator"></div>
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
                <div className="container">
                    <div className="col1">
                        <NavLink to="/DetailedItems" className="wrap-list">
                            <img src={list1} className="wrap-list-img" />
                            <div className="wrap-list-body">
                                <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                                <div className="wrap-list-content-lowerhalf">
                                    <span className="wrap-list-price">2.6 triệu</span>
                                    <div className="adListingInfo">
                                        <span className="adItems">User</span>
                                        <span className="adItems">X minutes ago</span>
                                        <span>Y district</span>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col2">
                        <span className="heart-button">
                            <button>
                                <img src={heart} width="20" />
                            </button>
                        </span>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <div className="col1">
                        <NavLink to="/DetailedItems" className="wrap-list">
                            <img src={list1} className="wrap-list-img" />
                            <div className="wrap-list-body">
                                <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                                <div className="wrap-list-content-lowerhalf">
                                    <span className="wrap-list-price">2.6 triệu</span>
                                    <div className="adListingInfo">
                                        <span className="adItems">User</span>
                                        <span className="adItems">X minutes ago</span>
                                        <span>Y district</span>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col2">
                        <span className="heart-button">
                            <button>
                                <img src={heart} width="20" />
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;