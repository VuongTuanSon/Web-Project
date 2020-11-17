﻿import {
    NavLink,
    Link
} from 'react-router-dom';
import list5 from './images/list-item5.jpg'
function Products5() {
    return (
        <div className="ekvnxp">
            <div className="ergipz">
                <h1 className="eBxpbB">Danh sách phòng trọ</h1>
                <hr />
                <NavLink to="" className="wrap-list">
                    <img src={list5} className="wrap-list-img" />
                    <div className="wrap-list-body">
                        <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                        <div className="wrap-list-content-lowerhalf">
                            <span className="wrap-list-price">4 triệu</span>
                            <div className="adListingInfo">
                                <span className="adItems">User</span>
                                <span className="adItems">X minutes ago</span>
                                <span>Y district</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <hr />
                <NavLink to="" className="wrap-list">
                    <img src={list5} className="wrap-list-img" />
                    <div className="wrap-list-body">
                        <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                        <div className="wrap-list-content-lowerhalf">
                            <span className="wrap-list-price">4 triệu</span>
                            <div className="adListingInfo">
                                <span className="adItems">User</span>
                                <span className="adItems">X minutes ago</span>
                                <span>Y district</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <hr />
                <NavLink to="" className="wrap-list">
                    <img src={list5} className="wrap-list-img" />
                    <div className="wrap-list-body">
                        <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                        <div className="wrap-list-content-lowerhalf">
                            <span className="wrap-list-price">4 triệu</span>
                            <div className="adListingInfo">
                                <span className="adItems">User</span>
                                <span className="adItems">X minutes ago</span>
                                <span>Y district</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <hr />
                <NavLink to="" className="wrap-list">
                    <img src={list5} className="wrap-list-img" />
                    <div className="wrap-list-body">
                        <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                        <div className="wrap-list-content-lowerhalf">
                            <span className="wrap-list-price">4 triệu</span>
                            <div className="adListingInfo">
                                <span className="adItems">User</span>
                                <span className="adItems">X minutes ago</span>
                                <span>Y district</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <hr />
                <NavLink to="" className="wrap-list">
                    <img src={list5} className="wrap-list-img" />
                    <div className="wrap-list-body">
                        <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                        <div className="wrap-list-content-lowerhalf">
                            <span className="wrap-list-price">4 triệu</span>
                            <div className="adListingInfo">
                                <span className="adItems">User</span>
                                <span className="adItems">X minutes ago</span>
                                <span>Y district</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <hr />
                <NavLink to="" className="wrap-list">
                    <img src={list5} className="wrap-list-img" />
                    <div className="wrap-list-body">
                        <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                        <div className="wrap-list-content-lowerhalf">
                            <span className="wrap-list-price">4 triệu</span>
                            <div className="adListingInfo">
                                <span className="adItems">User</span>
                                <span className="adItems">X minutes ago</span>
                                <span>Y district</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <hr />
                <ul className="productLists">
                    <li className="listItems"><Link to="/Products">1</Link></li>
                    <li className="listItems"><Link to="/Products2">2</Link></li>
                    <li className="listItems"><Link to="/Products3">3</Link></li>
                    <li className="listItems"><Link to="/Products4">4</Link></li>
                    <li className="listItems"><Link to="/Products5">5</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Products5;