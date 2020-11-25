import {
    NavLink,
    Link
} from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';

function PostImage() {
    return (
        <main class="ekvnxp">
            <div className="image-input">
                <em>Tối thiểu 3 hình ảnh</em>
                <label for="file-input">
                    <div className="upload-space">
                        <FaCamera className="camera-icon" />
                    </div>
                </label>
                <input className="input-button" id="file-input" type="file" />
                
                </div>
            <div className="infoRemind">
                <b>Để cho thuê nhanh hơn: </b>
                <p>- Chụp hình khổ ngang: phòng trọ, phòng vệ sinh, không gian sử dụng chung (nếu có), bên ngoài, ...</p>
                <b>Không: </b>
                <p>- Sử dụng hình ảnh trùng lặp hoặc lấy từ Internet</p>
                <p>- Chèn số điện thoại/email/logo vào hình</p>
            </div>
            <div className="btn-container">
                <Link to="">
                    <button className="continue-address-btn" type="submit">Quay lại</button>
                </Link>
                <Link to="/PostContact">
                    <button className="continue-address-btn" type="submit">Tiếp tục</button>
                </Link>
            </div>
        </main>
    );
}
export default PostImage;