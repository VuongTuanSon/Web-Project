import React from 'react'
import {
    NavLink,
    Link
} from 'react-router-dom';
const detailpost = 
    {
        description:"Nhà cho thuê giá rẻ" ,
        name: "Vuong Tuan Son",
        price: 2.6,
        minutes: 20,
    }
class NotificationPosts extends React.Component{
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
                <div className="col1-noti">
                    <NavLink to="/DetailedItems" className="wrap-list">
                        <img src={this.state.image} className="wrap-list-img" />
                        <div className="wrap-list-body">
                            <div className="wrap-list-content">{detailpost.description}</div>
                            <div className="wrap-list-content-lowerhalf">
                                <span className="wrap-list-price">{detailpost.price} triệu</span>
                                <div className="adListingInfo">
                                    <span className="adItems">{detailpost.name}</span>
                                    <span className="adItems">{detailpost.minutes} minutes ago</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="">
                    <h2 className="noti-line">Tin của bạn đã được duyệt!</h2>
                    <span>Bấm vào <NavLink className="contact-cskh" to="/Products">đây</NavLink> để truy cập danh sách nhà cho thuê của bạn.</span>
                </div>
            </div>
        </>
        )
    }
    
}
export default NotificationPosts