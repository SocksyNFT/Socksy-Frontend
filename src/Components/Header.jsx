import React from "react";
import logo from "../Assets/images/logo.svg";
import closeMenu from "../Assets/images/closeMenu.png";
import arrow from "../Assets/images/arrow.svg";
import flame from "../Assets/images/flame.png";
import sollet from "../Assets/images/sollet.png";
import sollet1 from "../Assets/images/sollet1.png";
import solflare from "../Assets/images/solflare.png";
import phantom from "../Assets/images/phantom.png";

import { openNav2, closeNav2 } from "../Assets/js/custom.js";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="header">
        {/* <!-- Fixed navbar --> */}
        <nav className="navbar navbar-expand-md navbar-dark ">
          <div className="container-fluid">
            <div className="row d-flex no-gutters w-100 d-row m-auto">
              <div className="col-1 col-xl-3">
                <Link className="navbar-brand smoth-scroll" to="/">
                  <img src={logo} />
                </Link>
              </div>
              <div className="col-xl-9 col-11">
                <button
                  className="navbar-toggler"
                  onClick={openNav2}
                  type="button"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse1 navbar-collapse sidenav-new-menu nav-full-menu"
                  id="mySidenav2"
                >
                  <a
                    href="javascript:void(0)"
                    className="closebtn"
                    onClick={closeNav2}
                  >
                    <img src={closeMenu} />
                  </a>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item" onClick={closeNav2}>
                      <NavLink className="nav-link smoth-scroll" to="/" exact >
                        Home
                        <span className="arrow ml-2">
                          <img src={arrow} />
                        </span> 
                      </NavLink>
                    </li>

                    <li className="nav-item " onClick={closeNav2}>
                      <a
                        className="nav-link smoth-scroll"
                        href="https://medium.com/@SocksyNFT"
                      >
                        How it Works
                      </a>
                    </li>
                    <li className="nav-item " onClick={closeNav2}>
                      <NavLink className="nav-link smoth-scroll" to="/faq">
                        FAQ
                      </NavLink>
                    </li>
                    <li className="nav-item " onClick={closeNav2}>
                      <a
                        className="nav-link smoth-scroll"
                        href="https://drive.google.com/file/d/1IPxaIq4D9GbdgQymmNtIM2bFuYWbhVTS/view?usp=sharing"
                      >
                        Litepaper
                      </a>
                    </li>
                  
                    <li className="nav-item " onClick={closeNav2}>
                      <Link
                        className="nav-link smoth-scroll btn btn-outline-secondary "
                        to="/status"
                      >
                        <span className="flame-icon">
                          <img src={flame} />
                        </span>
                        0 Redeemed
                      </Link>
                    </li>
                    <li className="nav-item " onClick={closeNav2}>
                      <button
                        type="button"
                        className="nav-link smoth-scroll btn btn-outline-secondary connect-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#connect"
                      >
                        Connect wallet
                      </button>
                    </li>
                  </ul>
                </div>

                <div
                  id="cd-shadow-layer"
                  onClick={closeNav2}
                  style={{ display: "none" }}
                ></div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className="modal fade modal-custom"
        id="connect"
        tabindex="-1"
        role="dialog"
        aria-labelledby="connectLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {/* 
                <span aria-hidden="true">&times;</span>
              */}
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="wallet-logo">
                <img src={logo} />
              </div>
              <div className="wallet-text">
                <h3>CONNECT WALLET</h3>
                <p>To start using Socksy</p>
              </div>
              <div className="wallet-links">
                <a href="#!" className="btn">
                  <span>Sollet</span>
                  <span className="img">
                    <img src={sollet} />
                  </span>
                </a>

                <a href="#!" className="btn">
                  <span>Sollet (extension)</span>
                  <span className="img">
                    <img src={sollet1} />
                  </span>
                </a>

                <a href="#!" className="btn">
                  <span>solFlare</span>
                  <span className="img">
                    <img src={solflare} />
                  </span>
                </a>

                <a href="#!" className="btn">
                  <span>phantom</span>
                  <span className="img">
                    <img src={phantom} />
                  </span>
                </a>
              </div>

              <div className="wallte-action">
                <p>Don't have a Socksy wallet?</p>
                <a href="#!" className="btn">
                  <span>Create a new wallet</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
