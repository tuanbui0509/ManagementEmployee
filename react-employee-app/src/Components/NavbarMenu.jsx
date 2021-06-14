import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class NavbarMenu extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">Employee Management</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="d-inline text-decoration-none text-white p-2" to="/">Home</Link>
                        <Link className="d-inline text-decoration-none text-white p-2" to="/employee">Employee</Link>
                        <Link className="d-inline text-decoration-none text-white p-2" to='/department'>Department</Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarMenu;
