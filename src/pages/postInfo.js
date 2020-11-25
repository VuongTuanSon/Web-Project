import {
    NavLink,
    Link
} from 'react-router-dom';
function PostInfo() {
    return (
        <main className="ekvnxp">
            <section class="form-post">
                <form action="">
                    <label for="title">Tiêu đề <span>*</span></label>
                    <input type="text" placeholder="Tiêu đề" required/>
                        <div class="duration-post">
                            <label for="text">Thời hạn <span>*</span></label>
                            <div class="input-duration">
                                <input type="number" placeholder="Tuần" required min="1" required max="4" />
                                <input type="number" placeholder="Tháng" required min="1" required max="12" />
                                <input type="number" placeholder="Quý" required min="1" required max="4" />
                                <input type="number" placeholder="Năm" required/>
                            </div>
                        </div>
                    <div class="infoRemind">
                             <b>Lưu ý</b>
                             <p>-  Tiêu đề rõ ràng, ngắn gọn, dễ hiểu, không điền số điện thoại, địa chỉ cụ thể vào tiêu đề</p>
                             <p>-  Lựa chọn thời hạn đăng phù hợp </p>
                         </div>
                </form>
            </section>
            <div className="btn-container">
                <Link to="/PostContact">
                    <button className="continue-address-btn" type="submit">Quay lại</button>
                </Link>
                <Link to="">
                    <button className="continue-address-btn" type="submit">Hoàn tất</button>
                </Link>
            </div>
        </main>
    );
}

export default PostInfo;