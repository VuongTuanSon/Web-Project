import React from 'react'
import {
    NavLink,
    Link
} from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import DetailedItems from '../pages/detailedItems';
const imagesPath = {
    heart: "https://static.chotot.com/storage/icons/saveAd/save-ad.svg",
    heart2: "https://static.chotot.com/storage/icons/saveAd/save-ad-active.svg"
  }
  const detailpost = 
  {
      description:"Nhà cho thuê giá rẻ" ,
      name: "Vuong Tuan Son",
      price: 2.6,
      minutes: 20,
      district:"Đống Đa"
  }
class ProductsRent extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            open: true
        }
        console.log(props)
    }
    componentDidMount() {
        this.setState({image: this.props.image})
    }
    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
    }

    getImageName = () => this.state.open ? 'heart' : 'heart2'
    render() {
        const imageName = this.getImageName();
        return (
        <>
            <div className="container">
                  <div className="col1">
                      <NavLink to="/DetailedItems" className="wrap-list">
                          <img src={this.state.image} className="wrap-list-img" />
                          <div className="wrap-list-body">
                              <div className="wrap-list-content">{detailpost.description}</div>
                              <div className="wrap-list-content-lowerhalf">
                                  <span className="wrap-list-price">{detailpost.price} triệu</span>
                                  <div className="adListingInfo">
                                      <span className="adItems">{detailpost.name}</span>
                                      <span className="adItems">{detailpost.minutes} minutes ago</span>
                                      <span>{detailpost.district} district</span>
                                  </div>
                              </div>
                          </div>
                      </NavLink>
                  </div>
                  <div className="col2">
                      <Link to="/PostAddress">
                          <button type="button" className="heart-button">
                              <FaCog className="settings" />
                              <span>Chỉnh sửa</span>
                          </button>
                      </Link>
                  </div>
              </div>
        </>
        )
    }
    
}
export default ProductsRent