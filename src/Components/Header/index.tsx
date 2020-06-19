import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



class Header extends React.Component {
    
    render(){
        return (
            <React.StrictMode>
                <Navbar collapseOnSelect fixed="top"  bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/favicon.ico"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React-Bootstrap
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href='/escritorio'>Escritório</Nav.Link>
                            <Nav.Link href='/atuacao'>Área de atuação</Nav.Link>
                            <Nav.Link href='/advogados'>Advogados</Nav.Link>
                            <Nav.Link href='/fale-conosco'>Fale conosco</Nav.Link>
                        </Nav>
                        <NavDropdown.Divider />
                        <Nav className="mr-auto">
                            <Nav.Link href="https://api.whatsapp.com/send?phone=5511951443170">
                                <img
                                    alt=""
                                    src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png"
                                    width="30"
                                    height="30"
                                    className="mr-3"
                                />{' '} 
                                    +55 (11) 95144-3170
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.StrictMode>
        );
    }
    
}

export default Header;