import React from "react";
import { Link,withRouter } from "react-router-dom";
import Logo from '../../assets/img/logo.png'
import * as Icon from 'react-feather'
import "./style.scss";
const Header = ({history}) => {
  return (
    <div className="Nabbar">
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top ">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt=""/>
                </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    </ul>
                    <form className="">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                              <Link className="btn btn-primary btn-sm nav-link text-light" type="submit">Buy now</Link>
                            </li>
                            <li className="nav-item dropdown">
                              <Icon.ShoppingCart className="m-2" size={15} />
                            </li>
                            <li className="nav-item dropdown">
                              <Icon.Bell className="m-2" size={15} />
                            </li>
                            <li className="nav-item">
                                <img src={Logo} alt="" />
                                <div className="user">
                                  <span className="name">Manju rajesh</span>
                                  <span className="position">sup advisor</span>
                                </div>
                            </li>
                        </ul>
                    </form>
                    </div>
                </div>
            </nav>
    </div>
  );
};

export default withRouter(Header);
