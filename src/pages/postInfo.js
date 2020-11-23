import {
    NavLink,
    Link
} from 'react-router-dom';
function PostInfo() {
    return (
        <div className="btn-container">
            <Link to="/PostContact">
                <button className="continue-address-btn" type="submit">Tiếp tục</button>
            </Link>
        </div>
    );
}

export default PostInfo;