import {
    NavLink,
    Link
} from 'react-router-dom';
import hot1 from './images/hot1.jpg'
import hot2 from './images/hot2.jpg'
import hot3 from './images/hot3.jpg'
import hot4 from './images/hot4.jpg'
import list1 from './images/list-item1.jpg'
import { Component } from 'react';


const imagesPath = {
    heart: "https://static.chotot.com/storage/icons/saveAd/save-ad.svg",
    heart2: "https://static.chotot.com/storage/icons/saveAd/save-ad-active.svg"
  }


class homePage extends Component {
    state = {
        open: true
      }
      toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
      }
    
      getImageName = () => this.state.open ? 'heart' : 'heart2'
    render ()
    {
        const imageName = this.getImageName();
        return (
        <div className="ekvnxp" >
            <div className="ergipz">
                <h1 className="eBxpbB">Những phòng trọ được xem nhiều nhất</h1>
                <div className="hot-pics">
                    <NavLink to="#" activeClassName="">
                        <img src={hot1} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot2} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot3} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                </div>
                <h1 className="eBxpbB">Danh sách phòng trọ</h1>
                <hr />
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
                            <img style={{maxWidth: '20px'}} src={imagesPath[imageName]} onClick={this.toggleImage} />
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
}
export default homePage;