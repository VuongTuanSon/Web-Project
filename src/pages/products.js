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
    district:"Đống Đa"
}
import ProductsRent from '../component/productsRent';
function Products() {
  return (
      <div className="ekvnxp">
          <div className="ergipz">
              <h1 className="eBxpbB">Danh sách phòng trọ</h1>
              <hr/>
              <ProductsRent/>
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
