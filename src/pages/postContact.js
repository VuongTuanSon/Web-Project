import {
    NavLink,
    Link
} from 'react-router-dom';
function PostContact() {
    return (
        <main className="ekvnxp">
            <section className="form-post">
                <form action="">
                    <label for="fullname">Điền họ tên của bạn</label>
                    <input type="text" name="fullname" placeholder="Họ tên của bạn" />
                    <label for="fullname">Điền số điện thoại của bạn</label>
                    <input type="text" name="fullname" placeholder="Số điện thoại bạn đang sử dụng" />
                </form>
            </section>
            <div className="btn-container">
                <Link to="">
                    <button className="continue-address-btn" type="submit">Quay lại</button>
                </Link>
                <Link to="/PostInfo">
                    <button className="continue-address-btn" type="submit">Tiếp tục</button>
                </Link>
            </div>
        </main>
    );
}
export default PostContact;