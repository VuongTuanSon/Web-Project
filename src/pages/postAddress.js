import {
    NavLink,
    Link
} from 'react-router-dom';
function PostAddress() {
    return (
        <main className="ekvnxp">
            <section className="form-post">
                <form action="">
                    <label for="location">Chọn tỉnh thành <span>*</span></label>
                    <input type="text" name="location" placeholder="Chọn tỉnh thành" required/>
                    <label for="location">Chọn quận/huyện <span>*</span></label>
                    <input type="text" name="location" placeholder="Chọn quận/huyện" required/>
                    <label for="location">Chọn xã/phường/thị trấn <span>*</span></label>
                    <input type="text" name="location" placeholder="Chọn xã, phường, thị trấn" required/>
                    <div className="expand-address">
                        <div className="number-home">
                            <label for="numberhome">Số nhà</label>
                            <input type="text" name="numberhome" placeholder="Số nhà" />
                        </div>
                        <div className="street">
                            <label for="street">Đường/thôn</label>
                            <input type="text" name="street" placeholder="Đường, thôn" />
                        </div>
                    </div>
                    <div className="near-location">
                         <label for="location">Gần các địa điểm <span>*</span></label>
                          <input type="text" name="location" placeholder="Địa điểm 1" required/>
                          <input type="text" name="location" placeholder="Địa điểm 2" />
                    </div>
                    <div className="container">
                        <div className="col1-2">
                            <label for="room">Loại phòng <span>*</span></label>
                            <select name="room" id="" required>
                                <option value="" disabled selected>Loại phòng</option>
                                <option value="">Phòng trọ</option>
                                <option value="">Chung cư mini</option>
                                <option value="">Nhà nguyên căn</option>
                                <option value="">Chung cư nguyên căn</option>
                            </select>
                        </div>
                        <div className="col2-2">
                            <label for="amount">Số phòng <span>*</span></label>
                            <input type="number" placeholder="Số phòng" required/>
                        </div>
                    </div>
                    <label for="square">Diện tích (m2) <span>*</span></label>
                    <input name="square" type="text" id="square" placeholder="Diện tích" required/>
                    <div className="container">
                        <div className="col1-2">
                            <label for="price">Giá <span>*</span></label>
                            <input type="text" name="price" placeholder="Giá (triệu đồng)"/>
                        </div>
                        <span>/</span>
                        <div className="col2-2">
                            <label for="price">Trong bao lâu <span>*</span></label>
                                <select name="unit" id="" required>
                                    <option value="">Tháng</option>
                                    <option value="">Quý</option>
                                    <option value="">Năm</option>
                                </select>
                            </div>
                        </div>
                        <label for="own">Chung chủ <span>*</span></label>
                        <select name="own" id="" required>
                            <option value="" disabled selected>Chung chủ</option>
                            <option value="">Có</option>
                            <option value="">Không</option>
                        </select>
                        <label for="pre-money">Tiền cọc (đ) <span>*</span></label>
                    <input name="pre-money" type="text" id="square" placeholder="Tiền cọc" required />
                    <div className="type-room">
                        <label for="room">Phòng tắm <span>*</span></label>
                        <select name="room" id="" required>
                            <option value="" disabled selected>Phòng tắm</option>
                            <option value="">Có</option>
                            <option value="">Không</option>
                        </select>
                    </div>
                    <div className="amount-room">
                        <label for="heater">Nóng lạnh <span>*</span></label>
                        <select name="heater" id="" required>
                            <option value="" disabled selected>Nóng lạnh</option>
                            <option value="">Có</option>
                            <option value="">Không</option>
                        </select>
                    </div>
                <label for="square">Phòng bếp <span>*</span></label>
                <select name="heater" id="" required>
                    <option value="" disabled selected>Phòng bếp</option>
                    <option value="">Có</option>
                    <option value="">Không</option>
                </select>
                <div className="price-room">
                    <div className="air-conditioner">
                        <label for="price">Điều hoà <span>*</span></label>
                        <select name="price" id="" required>
                            <option value="" disabled selected>Điều hoà</option>
                            <option value="">Có</option>
                            <option value="">Không</option>
                        </select>
                    </div>
                    <div className="balcony">
                        <label for="balcony">Ban công <span>*</span></label>
                        <select name="balcony" id="" required>
                            <option value="" disabled selected>Ban công</option>
                            <option value="">Có</option>
                            <option value="">Không</option>
                        </select>
                    </div>
                </div>
                <div className="price-room">
                    <div className="air-conditioner">
                        <label for="electric">Điện (đ/kWh) <span>*</span></label>
                        <input type="text" name="electric" placeholder="Điện"/>
                    </div>
                        <div className="balcony">
                            <label for="water">Nước (đ/m3) <span>*</span></label>
                            <input type="text" name="water" placeholder="Nước"/>
                    </div>
                        </div>
                        <label for="utility">Tiện ích khác <span>*</span></label>
                        <input name="utility" type="text" id="square" placeholder="Tện ích khác" required/>
                    <div className="btn-container">
                        <Link to="">
                            <button className="continue-address-btn" type="submit">Quay lại</button>
                        </Link>
                        <Link to="/PostImage">
                            <button className="continue-address-btn" type="submit">Tiếp tục</button>
                        </Link>
                    </div>  
            </form>
        </section>
        </main>
        );
}
export default PostAddress;