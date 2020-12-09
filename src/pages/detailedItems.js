import React , {useState, useEffect} from  'react'
import {
    NavLink,
    Link
} from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { render } from "react-dom";
import ReactStars from "react-rating-stars-component";
import avatar1 from './images/avatar1.png'
import heart from './images/heart.png'

const ratingChanged = (newRating) => {
    console.log(newRating);
};
const detailpost = 
    {
        name: "Vuong Tuan Son",
        phone : "09987654321",
        room: {
            price: 26000000,
            place: "Cát Linh, Đống Đa, Hà Nội",
            description: "Tầng 2 phòng khép kín điện nước an ninh tốt thoáng thuận tiện ngần đường chính",
            area: 25
        },
        image: [
            "https://cdn.chotot.com/NYQq2QDe1rbf3UQQL-Pmuuduauz4P9Jjo2WDJq6UYRA/preset:view/plain/fb1e6280ea175626ccc099348df31961-2658116256276507554.jpg",
            "https://cdn.chotot.com/pgJ8Wwtbg99Ct-83cfXFc-VQ8X5u6RAjArmsrQolmLE/preset:view/plain/aff14fd63c3cebc8390e20d0d362c26a-2658116256357894289.jpg",
            "https://cdn.chotot.com/BwSHMZzMYcHaZNOpdZt2SrgZ-LNhMDBYJ4gvDCLygeA/preset:view/plain/86563e3610845269eb42055df96e4ccf-2658116257525930714.jpg",
            "https://cdn.chotot.com/pgJ8Wwtbg99Ct-83cfXFc-VQ8X5u6RAjArmsrQolmLE/preset:view/plain/aff14fd63c3cebc8390e20d0d362c26a-2658116256357894289.jpg",
        ]
    }
    
function DetailedItems() {
    // const [detailPost, setDetailPost] = useState(null)
    // setDetailPost()
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
                        
                        {
                            detailpost.image.map(x=> (
                                <div className="item-img">
                                    <img src={x} width="400" height="500"/>
                                </div>
                            ))
                        }
                    </Slide>
                    <div>
                        <div className="separator2">
                            <h2 className="item-title">Phòng khép kín tầng 2</h2>
                            <span className="heart-button">
                                <button>
                                    <img src={heart} width="20" />
                                </button>
                            </span>
                        </div>
                        <span className="detailed-price">{detailpost.room.price}</span>
                        <div className="item-location">{detailpost.room.place}</div>
                        <div className="item-description">{detailpost.room.description}</div>
                        <div className="item-area">Diện tích : {detailpost.room.area}</div>
                        <div className="phoneSeller">Số điện thoại người bán : {detailpost.phone}</div>
                        <div><NavLink to="" className="chat-item">Hỏi người cho thuê qua chat</NavLink></div>
                    </div>
                    <hr/>
                    <div className="contact-help">
                        Tin đăng này đã được kiểm duyệt. Nếu có vấn đề gì vui lòng <NavLink className="contact-cskh" to="">liên lạc</NavLink> với bộ phận CSKH.
                    </div>
                    <div>
                        <input className="input-comment" placeholder="Đưa ra nhận xét tại đây" type="text" />
                    </div>
                </div>
                <div className="col2">
                    <NavLink to="/ProfilePage" className="">
                        <div className="avatar-image">
                            <img className="ava-pic" src={avatar1} width="50" height="50" />
                        </div>
                    <span className="seller-name">{detailpost.name}</span>
                    </NavLink>
                    <div className="separator">
                        <div className="call-box">
                            Điện thoại liên lạc : {detailpost.phone}
                        </div>
                    </div>
                    <div className="separator">
                        <NavLink className="chat-link-box" to="">
                            Bấm để chat với người bán
                        </NavLink>
                    </div>
                    <div className="separator">
                        <span className="contact-help">Lưu ý : KHÔNG NÊN đặt cọc nếu chưa xác định chủ nhà.</span>
                    </div>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={50}
                        activeColor="#ffd700"
                    />,
                </div>
            </div>
        </div>
    );
}
export default DetailedItems;