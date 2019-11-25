import React from 'react'
import Footer from './home/footerComponent'
import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)


export default () => {

    const [isPasswordShown, toggleIsPasswordShown] = React.useState(false);
    return (
      <div>
        <div id="signup" className="container-fluid">
          <div className="row">
            <div className="col-lg-8" id="left__side">
              <Navbar>
                <NavLink className="navbar-brand" to="/">
                  TABLE45
                </NavLink>
              </Navbar>
              <form className="col-7 pt-4" id="left__side__form">
                <h5 className="text-center mb-2">Create Account</h5>
                <p className="text-center">
                  Great decision. Good to have you onboard
                </p>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="firstname"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="lastname"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="myemail@gmail.com"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Sex</label>
                    <select className="form-control">
                      <option>--select--</option>
                      <option default>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Contact</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="08123456789"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Lagos, Nigeria"
                    />
                  </div>
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
                <div className="form-group">
                  <button class="btn btn-primary form-control">Sign up</button>
                </div>
                <div id="signin-button" className="text-center mt-5">
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
                    You have been here before?
                    <Link to="/login"> Login</Link>
                  </h6>
                </div>
              </form>
            </div>
            <div
              className="col-4 text-center d-none d-lg-block"
              id="right__side"
            >
              <div className="col-12 text-center mt-4">
                <h6>
                  Quick Description of the process, wake up, book, go back to
                  bed, attend party
                </h6>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
