import {
    NavLink,
    Link
} from 'react-router-dom';
import list1 from './images/list-item1.jpg'
import heart from './images/heart.png'
function Products() {
  return (
      <div className="ekvnxp">
          <div className="ergipz">
              <h1 className="eBxpbB">Danh sách phòng trọ</h1>
              <hr/>
              <div className="container">
                  <div className="col1">
                      <NavLink to="/DetailedItems" className="wrap-list">
                          <img src={list1} className="wrap-list-img" />
                          <div className="wrap-list-body">
                              <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                              <div className="wrap-list-content-lowerhalf">
                                  <span className="wrap-list-price">2.6 triệu</span>
                                  <div className="adListingInfo">
                                      <span className="adItems">User</span>
                                      <span className="adItems">X minutes ago</span>
                                      <span>Y district</span>
                                  </div>
                              </div>
                          </div>
                      </NavLink>
                  </div>
                  <div className="col2">
                      <span className="heart-button">
                          <button>
                              <img src={heart} width="20" />
                          </button>
                      </span>
                  </div>
              </div>
              <hr/>
              <div className="container">
                  <div className="col1">
                      <NavLink to="/DetailedItems" className="wrap-list">
                          <img src={list1} className="wrap-list-img" />
                          <div className="wrap-list-body">
                              <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                              <div className="wrap-list-content-lowerhalf">
                                  <span className="wrap-list-price">2.6 triệu</span>
                                  <div className="adListingInfo">
                                      <span className="adItems">User</span>
                                      <span className="adItems">X minutes ago</span>
                                      <span>Y district</span>
                                  </div>
                              </div>
                          </div>
                      </NavLink>
                  </div>
                  <div className="col2">
                      <span className="heart-button">
                          <button>
                              <img src={heart} width="20" />
                          </button>
                      </span>
                  </div>
              </div>
                  <hr/>
              <div className="container">
                  <div className="col1">
                      <NavLink to="/DetailedItems" className="wrap-list">
                          <img src={list1} className="wrap-list-img" />
                          <div className="wrap-list-body">
                              <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                              <div className="wrap-list-content-lowerhalf">
                                  <span className="wrap-list-price">2.6 triệu</span>
                                  <div className="adListingInfo">
                                      <span className="adItems">User</span>
                                      <span className="adItems">X minutes ago</span>
                                      <span>Y district</span>
                                  </div>
                              </div>
                          </div>
                      </NavLink>
                  </div>
                  <div className="col2">
                      <span className="heart-button">
                          <button>
                              <img src={heart} width="20" />
                          </button>
                      </span>
                  </div>
              </div>
              <hr/>
              <div className="container">
                  <div className="col1">
                      <NavLink to="/DetailedItems" className="wrap-list">
                          <img src={list1} className="wrap-list-img" />
                          <div className="wrap-list-body">
                              <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                              <div className="wrap-list-content-lowerhalf">
                                  <span className="wrap-list-price">2.6 triệu</span>
                                  <div className="adListingInfo">
                                      <span className="adItems">User</span>
                                      <span className="adItems">X minutes ago</span>
                                      <span>Y district</span>
                                  </div>
                              </div>
                          </div>
                      </NavLink>
                  </div>
                  <div className="col2">
                      <span className="heart-button">
                          <button>
                              <img src={heart} width="20" />
                          </button>
                      </span>
                  </div>
              </div>
              <hr/>
              <div className="container">
                  <div className="col1">
                      <NavLink to="/DetailedItems" className="wrap-list">
                          <img src={list1} className="wrap-list-img" />
                          <div className="wrap-list-body">
                              <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                              <div className="wrap-list-content-lowerhalf">
                                  <span className="wrap-list-price">2.6 triệu</span>
                                  <div className="adListingInfo">
                                      <span className="adItems">User</span>
                                      <span className="adItems">X minutes ago</span>
                                      <span>Y district</span>
                                  </div>
                              </div>
                          </div>
                      </NavLink>
                  </div>
                  <div className="col2">
                      <span className="heart-button">
                          <button>
                              <img src={heart} width="20" />
                          </button>
                      </span>
                  </div>
              </div>
              <hr/>
              <div className="container">
                  <div className="col1">
                      <NavLink to="/DetailedItems" className="wrap-list">
                          <img src={list1} className="wrap-list-img" />
                          <div className="wrap-list-body">
                              <div className="wrap-list-content">Nhà cho thuê giá rẻ</div>
                              <div className="wrap-list-content-lowerhalf">
                                  <span className="wrap-list-price">2.6 triệu</span>
                                  <div className="adListingInfo">
                                      <span className="adItems">User</span>
                                      <span className="adItems">X minutes ago</span>
                                      <span>Y district</span>
                                  </div>
                              </div>
                          </div>
                      </NavLink>
                  </div>
                  <div className="col2">
                      <span className="heart-button">
                          <button>
                              <img src={heart} width="20" />
                          </button>
                      </span>
                  </div>
              </div>
              <hr />
              <ul className="productLists">
                  <li className="listItems"><Link to="">1</Link></li>
                  <li className="listItems"><Link to="/Products2">2</Link></li>
                  <li className="listItems"><Link to="/Products3">3</Link></li>
                  <li className="listItems"><Link to="/Products4">4</Link></li>
                  <li className="listItems"><Link to="/Products5">5</Link></li>
              </ul>
          </div>
    	</div>
    	
  );
}

export default Products;
