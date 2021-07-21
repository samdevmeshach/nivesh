import React from "react";
import * as Icon from 'react-feather' 
import { Link } from "react-router-dom";
import "./style.scss";
const Register = () => {
  return (
    <div className="login">
      <div className="row">
        <div className="col col-6">
            <div>
                <p>Have an account?</p>
                <Link to="/login">
                    <button className="btn btn-outline-primary">Login</button>
                </Link>
            </div>
        </div>
        <div className="col col-6">
          <div className="cont">
            <h3>Register</h3>
            <p>
              Please provide the valid informations for a seamless log in
              process
            </p>
            <div>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    class="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputPassword1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputPassword1">Moile number</label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your password"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputPassword1">Referral code(optional)</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your referral code"
                  />
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button">
                    Register
                  </button>
                </div>
              </form>
              <p className="text-center">or</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
