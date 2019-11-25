import React, { useState } from 'react'
import FooterComponent from "./home/footerComponent";
import { Navbar, Nav } from "react-bootstrap"
import {NavLink, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);


export default function LoginComponent() {
  
  const [isPasswordShown, toggleIsPasswordShown] = useState(false)
  return (
    <div id="LoginComponent">
      <Navbar expand="md">
        <NavLink className="navbar-brand" to="/">
          Table45
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/planner-signup">
              REGISTER AS PLANNER
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="col-12" id="form-div">
        <form className="col-lg-4 col-md-8">
          <h4 className="text-center mb-3">Login to your Account</h4>
          <p className="text-center">Hello, great to have you back</p>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="myemail@gmail.com"
            />
          </div>
          <div className="form-group mt-3" id="password-div">
            <label>Password</label>
            <input
              className="form-control"
              placeholder="*******"
              type={isPasswordShown ? "text" : "password"}
            />
            <FontAwesomeIcon
              icon={isPasswordShown ? faEyeSlash : faEye}
              onClick={() => toggleIsPasswordShown(!isPasswordShown)}
            />
          </div>
          <div className="form-group form-row mt-4">
            <div className="col-6">
              <input type="checkbox" className="mr-1" />
              <span>Keep me signed in</span>
            </div>
            <div className="col-6 text-right">
              <Link to="/">
                <span>Forgot Password?</span>
              </Link>
            </div>
          </div>
          <div className="form-group">
            <Link to='/dashboard' class="btn btn-primary form-control">Login</Link>
          </div>
        </form>

        <div id="signin-button" className="text-center col-lg-4 col-md-8">
          <Link
            to="/"
            className="btn btn-sm btn-outline-primary form-control mb-3"
          >
            <FontAwesomeIcon icon={["fab", "google"]} />
            Continue with Google
          </Link>
          <Link
            to="/"
            className="btn btn-sm btn-outline-primary form-control"
          >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            Continue with Facebook
          </Link>
          <h6 className="mt-3">
            Are you new around here? <Link to="/signup">Create account</Link>
          </h6>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}