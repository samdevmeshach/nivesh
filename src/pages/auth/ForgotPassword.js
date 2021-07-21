import React from "react";
import * as Icon from 'react-feather' 
import { Link } from "react-router-dom";
import "./style.scss";
const ForgotPassword = () => {
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
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="...."
                  />
                </div>
                <Link to="/resetpassword">
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">
                        Continue
                    </button>
                </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
