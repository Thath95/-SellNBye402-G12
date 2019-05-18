import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavLink from "react-bootstrap/NavLink";
import swal from "sweetalert";

export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.onLogOutClicked = this.onLogOutClicked.bind(this);
    }

    onLogOutClicked() {
        let fName = localStorage.getItem('fName');
        localStorage.removeItem('fName');
        localStorage.removeItem('lName');
        localStorage.removeItem('email');
        localStorage.removeItem('isLogged');

        swal("See you Soon " + fName, 'You are Successfully logged out !', "success").then(() => {
            window.location.href = 'http://localhost:3000';
        })
    }

    render() {
        let nameNavLink = () => {
            if (localStorage.getItem('fName')) {
                return <Nav>
                    <Nav.Link href="/home">{localStorage.getItem('fName')}</Nav.Link>
                    <Nav.Link eventKey={2} onClick={this.onLogOutClicked}>Logout</Nav.Link>
                </Nav>
            } else {
                return <Nav>
                    <NavLink href="/">Login</NavLink>
                </Nav>
            }
        };

        return <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Sell n Buy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Book Management" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/books/add">Add Book Details</NavDropdown.Item>
                            <NavDropdown.Item href="/books/edit">Edit/ Delete Book Details</NavDropdown.Item>
                            {/*<NavDropdown.Item href="/books/delete">Delete Books</NavDropdown.Item>*/}
                            {/*<NavDropdown.Divider/>*/}
                            {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                        </NavDropdown>
                    </Nav>
                    {nameNavLink()}
                </Navbar.Collapse>
            </Navbar>;
        </div>
    }
}