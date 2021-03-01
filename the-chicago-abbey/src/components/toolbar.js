import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Toolbar(){
    return(
        <Navbar bg="light" expand="md" sticky="top">
            <Navbar.Brand href="/">The Chicago Abbey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/menu">Menu</Nav.Link>
                    <Nav.Link href="/reservations">Reservations</Nav.Link>  
                    <Nav.Link href="/music">Music</Nav.Link>
                    <Nav.Link href="/tickets">Tickets</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>               
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Toolbar;