import React from 'react'
import {
    NavLink,
    Link
} from 'react-router-dom';
const imagesPath = {
    heart: "https://static.chotot.com/storage/icons/saveAd/save-ad.svg",
    heart2: "https://static.chotot.com/storage/icons/saveAd/save-ad-active.svg"
  }

class PostLiked extends React.Component{
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

    getImageName = () => this.state.open ? 'heart2' : 'heart'
    render() {
        const imageName = this.getImageName();
        return (
        <>
            <div className="container">
                    <div className="col1">
                        <NavLink to="/DetailedItems" className="wrap-list">
                            <img src={this.state.image} className="wrap-list-img" />
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
        </>
        )
    }
    
}
export default PostLiked