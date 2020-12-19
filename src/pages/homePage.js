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
import PostComponent from '../component/post';
import Slider from './slideShow';
import Header from '../headerComponents/header';
import Footer from '../footerComponents/footer';
import ListPost from '../component/ListPost';


const imagesPath = {
    heart: "https://static.chotot.com/storage/icons/saveAd/save-ad.svg",
    heart2: "https://static.chotot.com/storage/icons/saveAd/save-ad-active.svg"
}
const image = "https://cdn.chotot.com/RVBPMsdcNkMnqbqrbro4rGphDZp4JN4YQ0yiKuQqVmg/preset:listing/plain/a946be00d83819856214dea96b24c256-2695935237503285377.jpg"

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
            <>
                <Header />
                <Slider/>
                {/* <div className="ekvnxp" >
                    <div className="ergipz">
                        <h1 className="eBxpbB">Những phòng trọ được xem nhiều nhất</h1>
                        <div className="hot-pics">
                            <NavLink to="/DetailedItems/:id" activeClassName="">
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
                        <PostComponent image={image}/>
                        <hr />

                        <ul className="row">
                            <li className="listItems"><Link to="">1</Link></li>
                            <li className="listItems"><Link to="/Products2">2</Link></li>
                            <li className="listItems"><Link to="/Products3">3</Link></li>
                            <li className="listItems"><Link to="/Products4">4</Link></li>
                            <li className="listItems"><Link to="/Products5">5</Link></li>
                        </ul>
                    </div>
                </div> */}
                <div>
                    <ListPost />
                </div>
                
                <div>
                    <Footer />
                </div>
                
            </>
        );
    }
}
export default homePage;