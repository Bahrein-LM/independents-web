import React, { Component } from 'react';
import '../style/NavbarComponent.css';
import { Navbar, Nav, Container, Image  } from "react-bootstrap";

class NavbarComponent extends Component {
    render() {
        return (
            <Navbar className='navbarStyle fixed-top' variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                    <Image src="assets/logo/logo-17.png" className='logoStyle'/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#about"><strong>About</strong></Nav.Link>
                    <Nav.Link href="#weather"><strong>Weather</strong></Nav.Link>
                    <Nav.Link href="#maps"><strong>Maps</strong></Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarComponent;
