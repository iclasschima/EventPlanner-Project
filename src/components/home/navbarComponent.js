import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import {NavLink} from 'react-router-dom'

const NavbarComponent = () => {
    return (
      <div>
        <Navbar expand="md">
          <NavLink className="navbar-brand" to="/">
            TABLE45
          </NavLink>
          <Navbar.Toggle aria-controls="basic__navbar__nav" />
          <Navbar.Collapse id="basic__navbar__nav">
            <Nav className="ml-auto pt-md-0">
              <Form inline className='mr-md-4'>
                <FormControl
                  type="text"
                  placeholder="e.g. Lagos, Birthday"
                />
                <Button type="submit" className="form-control btn-sm">
                  Search
                </Button>
              </Form>
              <NavLink className="nav-link" to="/planner-signup">
                EVENT PLANNER
              </NavLink>
              <NavLink className="nav-link" to="/login">
                LOGIN
              </NavLink>
              <NavLink className="nav-link" to="/signup">
                SIGN UP
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}


export default NavbarComponent
