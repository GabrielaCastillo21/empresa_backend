import React from 'react';
import {
    Navbar,
    Container
} from 'react-bootstrap';

import logo from '../common/logo.png'

const Header = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        alt="logo de UMG"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Empresa UMG
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;