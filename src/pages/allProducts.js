import {
    NavLink,
    Link
} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AllPosts from '../component/allPosts';
const image = "https://cdn.chotot.com/RVBPMsdcNkMnqbqrbro4rGphDZp4JN4YQ0yiKuQqVmg/preset:listing/plain/a946be00d83819856214dea96b24c256-2695935237503285377.jpg"

function AllProducts() 
{
    return(
        <div className="ekvnxp">
            <Container fluid>
                <Row>
                    <Col>
                        <AllPosts image={image}/>
                    </Col>
                    <Col>
                        <AllPosts image={image}/>
                    </Col>
                    <Col>
                        <AllPosts image={image}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AllPosts image={image}/>
                    </Col>
                    <Col>
                        <AllPosts image={image}/>
                    </Col>
                    <Col>
                        <AllPosts image={image}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AllPosts image={image}/>
                    </Col>
                    <Col>
                        <AllPosts image={image}/>
                    </Col>
                    <Col>
                        <AllPosts image={image}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AllPosts image={image}/>
                    </Col>
                    <Col>
                        <AllPosts image={image}/>
                    </Col>
                    <Col>
                        <AllPosts image={image}/>
                    </Col>
                </Row>
                <div className="separator"></div>
            </Container>
        </div>
    );
}
export default AllProducts;