import React from "react";
import { Link } from "react-router-dom";
import arrow from "../Assets/images/arrow.svg";
import bannerImg from "../Assets/images/bannerImg.PNG";
export default function Home() {
  return (
    <>
      <main role="main" className="middle-section ">
        <div className="middle-inner">
          <section className="banner-section">
            <div className="banner-inner">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-lg-5">
                    <div className="content-img">
                      <img src={bannerImg} className="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <h2>
                        Extraordinary
                        <br />
                        <span className="gt">SOCKS </span>
                        <span className="s2">you”ll </span>
                        <span className="s3">love</span>
                      </h2>

                      <p>
                        {/* Buy Sell and Redeem <span>SOLANA</span> 
                        <span>NFT SOCKS</span> Created By Worlds
                        <span>{" "}Top Artists</span> */}
                        <span>
                          10,000 Real value NFTs redeemable socks shipped to
                          anywhere in the world!
                        </span>
                      </p>

                      <Link className="btn  btn-arrow getsocks" to="/exchange">
                        Get Socks
                        <span className="arrow">
                          <img src={arrow} alt="" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="powerby-section">
            <div className="powerby-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <p>
                      Powered by <span>SOLANA</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
