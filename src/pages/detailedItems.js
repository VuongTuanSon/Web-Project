
import {
    NavLink,
    Link
} from 'react-router-dom';
import {Slide} from 'react-slideshow-image';

import item1 from './images/item1.jpg'
function DetailedItems() {
    return (
        <div className="ekvnxp">
            <div className="accessRow">
                <NavLink className="accessRowItemsRightIn" to="" ><button type="button">Next</button></NavLink>
                <NavLink className="accessRowItemsRight" to="/Products" >
                    <button type="button">Về danh sách</button></NavLink>
                <ol className="clearList">
                    <li><NavLink to="">Hà Nội</NavLink></li>
                    <li><NavLink className="divider" to="">Quận Đống Đa</NavLink></li>
                    <li><NavLink className="divider" to="">Phòng khép kín</NavLink></li>
                </ol>
            </div>
            <div className="container">
                <div className="col1">
                    <Slide>
                        <div className="item-img">
                            <img src={item1} width="400" height="500"/>
                        </div>
                        <div className="item-img">
                            <img src={item1} width="400" height="500" />
                        </div>
                        <div className="item-img">
                            <img src={item1} width="400" height="500" />
                        </div>
                        <div className="item-img">
                            <img src={item1} width="400" height="500" />
                        </div>
                    </Slide>
                    <div>
                        <h2 className="item-title">Phòng khép kín tầng 2</h2>
                        <span className="detailed-price">2.6 triệu</span>
                        <div className="item-location">Cát Linh, Đống Đa, Hà Nội</div>
                        <div className="item-description">Tầng 2 phòng khép kín điện nước an ninh tốt thoáng thuận tiện ngần đường chính</div>
                        <div className="item-area">Diện tích : 15m2</div>
                        <div className="phoneSeller">Số điện thoại người bán : xxxxxxxxxxx</div>
                        <div><NavLink to="" className="chat-item">Hỏi người cho thuê qua chat</NavLink></div>
                    </div>
                    <hr/>
                    <div className="contact-help">
                        Tin đăng này đã được kiểm duyệt. Nếu có vấn đề gì vui lòng <NavLink className="contact-cskh" to="">liên lạc</NavLink> với bộ phận CSKH.
                    </div>
                </div>
                <div className="col2">
                    ABCXYZ
                </div>
            </div>
        </div>
    );
}
export default DetailedItems;