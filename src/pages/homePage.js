import {
    NavLink,
    Link
} from 'react-router-dom';
import hot1 from './images/hot1.jpg'
import hot2 from './images/hot2.jpg'
import hot3 from './images/hot3.jpg'
import hot4 from './images/hot4.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
function homePage() {
    return (
        <div className="ekvnxp" >
            <div className="ergipz">
                <h1 className="eBxpbB">Những nhà được xem nhiều nhất</h1>
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
                <h1 className="eBxpbB">Danh sách các phòng trọ hiện có</h1>
                <Carousel className="hot-pics" responsive={responsive}>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                </Carousel>
                <Carousel className="hot-pics" responsive={responsive}>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                    <NavLink to="#" activeClassName="">
                        <img src={hot4} className="img1" />
                    </NavLink>
                </Carousel>
            </div>
        </div>
    );
}
export default homePage;