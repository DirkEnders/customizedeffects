import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

export function NavBar () {
    return (
        <div className='App tc f3'>
            <Navbar bg='light' expand='lg'>
                <Navbar.Brand href="7">FINALE 3D</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='mr-auto'>
                        <Nav.Link href="/add">Add effect</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                    </Nav>
                    <Form inline>
                        <a href="/login"><Button >Login</Button></a>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
