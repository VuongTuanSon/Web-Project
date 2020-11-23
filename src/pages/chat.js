import {
    NavLink,
    Link
} from 'react-router-dom';
import avatar1 from './images/avatar1.png'
function Chat() {
    return (
        <div className="ekvnxp">
            <div className="container">
                <div className="col1-chat">
                    <NavLink className="chat-section" to="">
                        <div>
                            <div className="chat-section2">
                                <img className="ava-pic" src={avatar1} width="50" height="50" />
                            </div>
                            <span className="seller-name">Vương Tuấn Sơn</span>
                        </div>
                    </NavLink>
                    <hr />
                    <NavLink className="chat-section" to="">
                        <div>
                            <div className="chat-section2">
                                <img className="ava-pic" src={avatar1} width="50" height="50" />
                            </div>
                            <span className="seller-name">Vương Tuấn Sơn</span>
                        </div>
                    </NavLink>
                    <hr />
                    <NavLink className="chat-section" to="">
                        <div>
                            <div className="chat-section2">
                                <img className="ava-pic" src={avatar1} width="50" height="50" />
                            </div>
                            <span className="seller-name">Vương Tuấn Sơn</span>
                        </div>
                    </NavLink>
                    <hr/>
                </div>
                <div className="vl2"></div>
                <div className="col2-chat">
                    <table className="container2">
                        <tr>
                            <td valign="top">
                                <div className="chat-name">Vương Tuấn Sơn</div>
                            </td>
                        </tr>
                        <tr>
                            <td valign="bottom">
                                <input className="input-chat" placeholder="Nhập tin nhắn" type="text"/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Chat; 