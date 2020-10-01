import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Img1 from '../images/img1.jpg'
import Img2 from '../images/img2.jpg'

const Products = () => {
    return (
        <Container fluid='true' className='Products pb-5'>
            <Row className='m-0'>
                <Col>
                    <Image alt='logo' src={Img1} className='pt-1 mb-3' fluid />
                    <h3>The Beach</h3>
                    <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis facere maxime inventore soluta id! Earum fuga iure sapiente omnis.</p>
                    <Button variant='outline-dark'>
                        FIND OUT MORE
                    </Button>
                </Col>

                <Col>
                    <Image alt='logo' src={Img2} className='pt-1 mb-3' fluid />
                    <h3>Our Beaches</h3>
                    <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis facere maxime inventore soluta id! Earum fuga iure sapiente omnis.</p>
                    <Button variant='outline-dark'>
                        SEE BEACHES
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Products;