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
class AllPosts extends React.Component{
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
                    <NavLink to="/DetailedItems" className="wrap-list2">
                        <img src={this.state.image} className="wrap-list-img2" />
                        <div className="wrap-list-body">
                            <div className="wrap-list-content2">{detailpost.description}</div>
                            <div className="wrap-list-content-lowerhalf2">
                                <span className="wrap-list-price">{detailpost.price} triệu</span>
                                <div className="adListingInfo2">
                                    <span className="adItems">{detailpost.name}</span>
                                    <span className="adItems">{detailpost.minutes} minutes ago</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
        </>
        )
    }
    
}
export default AllPosts