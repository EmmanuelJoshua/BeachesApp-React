import React from 'react'
import { Container, Nav } from 'react-bootstrap'

const Navbar = () => {
    return (
        <Container id='Navbar' fluid>
            <Nav className='p-2'>
                <Nav.Item>
                    <Nav.Link className='NavLogo'>
                        KIRCHNER
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item className='ml-auto'>
                    <Nav.Link className='NavNum'>
                    +49 (0) 67 75 • 96 98 • 0
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
}

export default Navbar;