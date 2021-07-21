import React from "react";
import * as Icon from 'react-feather' 
import { Link } from "react-router-dom";
import "./style.scss";
const ResetPassword = () => {
  return (
    <div className="login">
      <div className="row">
        <div className="col col-6">
            <div>
                {/* <p>Are you new to nivesh?</p>
                <Link to="/register">
                  <button className="btn btn-outline-primary">Register</button>
                </Link> */}
            </div>
        </div>
        <div className="col col-6">
          <div className="cont">
            <h3>Forgot password</h3>
            <p>
              Enter your 4 digit that you hava recived in your mobile number 
            </p>
            <div>
              <form>
                <div class="form-group mb-3">
                  <label for="exampleInputPassword1">New password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your new password"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleInputPassword1">Confirm password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter your confirm password"
                  />
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button">
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
