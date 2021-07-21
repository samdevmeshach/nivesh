import React from "react";
import * as Icon from 'react-feather' 
import { Link } from "react-router-dom";
import "./style.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="row">
        <div className="col col-6">
            <div>
                <p>Are you new to nivesh?</p>
                <Link to="/register">
                  <button className="btn btn-outline-primary">Register</button>
                </Link>
            </div>
        </div>
        <div className="col col-6">
          <div className="cont">
            <h3>Login</h3>
            <p>
              Please provide the valid informations for a seamless log in
              process
            </p>
            <div>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">User Id</label>
                  <input
                    type="email"
                    class="form-control mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your user Id"
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
                <Link to="forgotpassword">
                  <p className="text-end">Forgot password?</p>
                </Link>
                <Link to="/dashboard">
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">
                      Login
                    </button>
                  </div>
                </Link>
              </form>
              <p className="text-center">or</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
