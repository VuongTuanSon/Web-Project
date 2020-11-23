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
                    <input type="text" name="fullname" placeholder="" />
                </form>
            </section>
            <div className="btn-container">
                <Link to="/PostContact">
                    <button className="continue-address-btn" type="submit">Tiếp tục</button>
                </Link>
            </div>
        </main>
    );
}
export default PostContact;