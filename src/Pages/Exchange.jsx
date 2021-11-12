import React from "react";
import tagImg from "../Assets/images/tagImg.png";
import feets from "../Assets/images/feets.png";
import { useState } from "react";
import cookies from "../Assets/images/cookies.png";
export default function Exchange() {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <main role="main" className="middle-section">
        <div className="middle-inner">
          <section className="exchange-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="exchange-card">
                    <div className="exchange-card-inner">
                      <div className="exchange-body">
                        <div className="exchange-img">
                          <div className="exchange-img-inner">
                            <div className="card-text-top">
                              <div className="img">
                                <img src={tagImg} />
                              </div>
                              <h3>Socksy</h3>
                            </div>
                            <div className="card-img">
                              <img src={feets} />
                            </div>

                            <div className="card-text">
                              <h3>sOL</h3>
                              <p>10,000/10,000 Available</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="exchange-footer">
                        <div className="btn-div">
                          <a
                            href="#"
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Buy
                          </a>
                        </div>
                        <div className="btn-div-2">
                          <a
                            href="#"
                            className="btn btn-outline-primary"
                           // data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                          >
                            Sell
                          </a>
                          <a href="#" className="btn btn-outline-primary">
                            Redeem
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <div
        className="modal fade modal-custom"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered exchange-modal"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              {/* 
                <span aria-hidden="true">&times;</span>
              */}
              <button
                type="button"
                className=" close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                &times;
              </button>
            </div>
            <div className="exchange-modal-body modal-body ">
              <div className="exchange-modal-card">
                <div className="exchange-modal-card-inner">
                  <div className="exchange-modal-body-inner">
                    <div className="exchange-modal-img">
                      <div className="exchange-modal-img-inner">
                        <div className="card-modal-text-top">
                          <div>
                            <img src={tagImg} className="modal-img" />
                          </div>
                          <h3>Socksy</h3>
                        </div>
                        <div className="card-modal-img">
                          <img src={feets} />
                        </div>

                        <div className="card-modal-text">
                          <h3>2 SOL</h3>
                          <p>10,000/10,000 Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center flex-column align-items-center">
                <div className="modal-counter text-center">
                  <span
                    onClick={() => {
                      if (counter != 1) {
                        setCounter(counter - 1);
                      }
                    }}
                  >
                    -
                  </span>
                  <span>{counter}</span>
                  <span
                    onClick={() => {
                      setCounter(counter + 1);
                    }}
                  >
                    +
                  </span>
                </div>
                <div className="modal-amount">Amount of socks</div>
                <div className="modal-money">$20,000</div>
                <div className="mt-lg-2">
                  <div className="wallte-action">
                    <a
                      href="#!"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#connect"
                    >
                      <span>Connect Wallet</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div
        className="modal fade modal-custom"
        id="staticBackdrop"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdrop"
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
              <div className="cookies text-center">
                <img src={cookies} />
                <div className="cookie-heading">Have a Cookie :)</div>
                <div className="cookie-desc">
                  We have cookies to ensure that we give you the best experience
                  on our website.
                </div>
                <div className="wallte-action">
                  <a href="#!" className="btn">
                    <span>Mmm... Sweet!</span>
                  </a>
                </div>
                <div className="cookie-footer"> Nope... i am on a Diet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
