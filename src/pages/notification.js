
import {
    NavLink,
    Link
} from 'react-router-dom';
import list1 from './images/list-item1.jpg'
function Notification() {
    return (
        <main className="ekvnxp">
            <div class="separator"></div>
            <hr/>
            <div className="container">
                <div className="col1-noti">
                    <NavLink to="/DetailedItems" className="wrap-list">
                        <img src={list1} className="wrap-list-img" />
                        <div className="wrap-list-body">
                            <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                            <div className="wrap-list-content-lowerhalf">
                                <span className="wrap-list-price">2.6 triệu</span>
                                <div className="adListingInfo">
                                    <span className="adItems">User</span>
                                    <span className="adItems">X minutes ago</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="">
                    <h2 className="noti-line">Tin của bạn đã được duyệt!</h2>
                    <span>Bấm vào <NavLink className="contact-cskh" to="/Products">đây</NavLink> để truy cập danh sách nhà cho thuê của bạn.</span>
                </div>
            </div>
            <hr/>
            <div className="noti-approved">
                    <h2 className="noti-line2">Tài khoản của bạn đã được duyệt!</h2>
                    <span>Bấm vào <NavLink className="contact-cskh" to="/ProfilePage">đây</NavLink> để truy cập trang cá nhân của bạn.</span>
            </div>
        </main>
    );
}
export default Notification;