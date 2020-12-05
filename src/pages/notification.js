
import {
    NavLink,
    Link
} from 'react-router-dom';
import NotificationPosts from '../component/notificationPosts';
const image = "https://cdn.chotot.com/RVBPMsdcNkMnqbqrbro4rGphDZp4JN4YQ0yiKuQqVmg/preset:listing/plain/a946be00d83819856214dea96b24c256-2695935237503285377.jpg"
function Notification() {
    return (
        <main className="ekvnxp">
            <div class="separator"></div>
            <hr/>
            <NotificationPosts image={image}/>
            <hr/>
            <div className="noti-approved">
                    <h2 className="noti-line2">Tài khoản của bạn đã được duyệt!</h2>
                    <span>Bấm vào <NavLink className="contact-cskh" to="/ProfilePage">đây</NavLink> để truy cập trang cá nhân của bạn.</span>
            </div>
        </main>
    );
}
export default Notification;