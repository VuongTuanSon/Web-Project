import {
    NavLink,
    Link
} from 'react-router-dom';
import list1 from './images/list-item1.jpg'
import { Component } from 'react';
import PostLiked from '../component/postLiked';


const imagesPath = {
    heart: "https://static.chotot.com/storage/icons/saveAd/save-ad.svg",
    heart2: "https://static.chotot.com/storage/icons/saveAd/save-ad-active.svg"
  }
  const image = "https://cdn.chotot.com/RVBPMsdcNkMnqbqrbro4rGphDZp4JN4YQ0yiKuQqVmg/preset:listing/plain/a946be00d83819856214dea96b24c256-2695935237503285377.jpg"
  class LikedPosts extends Component {
    state = {
        open: true
      }
      toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
      }
    
      getImageName = () => this.state.open ? 'heart2' : 'heart'
    render ()
    {
        const imageName = this.getImageName();
        return (
        <div className="ekvnxp" >
            <div className="ergipz">
                <h1 className="eBxpbB">Danh sách phòng đã lưu</h1>
                <hr />
                <PostLiked image={image}/>  
                
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
export default LikedPosts;