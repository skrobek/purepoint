import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';


const AppNavbar = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Recipe Finder</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Home</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavbar;