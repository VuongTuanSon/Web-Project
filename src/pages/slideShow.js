import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from './images/image1.jpg'
import slide2 from './images/image2.jpg'
import slide3 from './images/image3.jpg'
function slideShow() {
    return (
        <div className="wrap">
            <Slide>
                <div className="each-slide">
                    <img src={slide1} />
                </div>
                <div className="each-slide">
                    <img src={slide2} />
                </div>
                <div className="each-slide">
                    <img src={slide3} />
                </div>
            </Slide>
        </div>
    );
}

export default slideShow;
