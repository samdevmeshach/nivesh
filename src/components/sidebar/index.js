import React,{useState,useEffect} from "react";
import './style.scss'
import {data} from './SidebarData.js';
import {Link, Redirect, withRouter} from 'react-router-dom'

const isActive = (history,path) =>{
    if(history.location.pathname === path){
        return { backgroundColor: "rgba(255, 0, 0, 0.219)",borderLeft:"5px solid red",color:"red"}
    }
    else{
        return {border:"none"}
    }
}



const Sidebar = ({history}) => {   
   
   
  return (
    <div className="Sidebar">
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 bg-light sidebar fixed-top"
          >
            <div className="position-fixed pt-3">
              <div className="name">
                <h5>
                  Vaibhav Kumar
                </h5>
                <p>Customer code : 41254</p>
              </div>
              <ul className="nav flex-column">
              {data.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" style={isActive(history,item.path)} aria-current="page" to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
 
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <Icon.Home className="mx-2" size={15} />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Icon.File className="mx-2" size={15} />
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Icon.ShoppingCart className="mx-2" size={15} />
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Icon.Users className="mx-2" size={15} />
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    <Icon.BarChart2 className="mx-2" size={15} />
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Icon.Layers className="mx-2" size={15} />
                    Integrations
                  </a>
                </li> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
