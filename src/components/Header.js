import React from 'react'
import Navbar from './Navbar'
import { Container, Col, Row, Image, Button } from 'react-bootstrap'
import header from '../images/header.jpg'

const Header = () => {
    return (
        <Container fluid='true' className='Header mb-5'>
            <Navbar/>
            <Row className='m-0'>
                <Col md='7' className='p-0 mb-md-4' >
                    <Image alt='logo' src={header} className='pt-1 mb-md-5' fluid />
                </Col>

                <Col md='4' className='pl-5 pt-5'>
                    <div className='HeaderText'>
                        <h3>Ihr Garten.</h3>
                        <h3>Ihr Paradies.</h3>
                    </div>
                    <h1>Unsere Aufgabe!</h1>
                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis facere maxime inventore soluta id! Earum fuga iure sapiente omnis.</p>
                    <Button variant='outline-dark'>
                        Get started
            </Button>
                </Col>

            </Row>

        </Container>
    );
}

export default Header;