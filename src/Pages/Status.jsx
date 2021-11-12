import React from "react";
import logo from "../Assets/images/logo.svg";
import flame from "../Assets/images/flame.svg";
import drop from "../Assets/images/drop.svg";

export default function Status() {
  return (
    <main role="main" class="middle-section">
      <h1 className="text-center text-white">Socksy Stats</h1>
      <div class="middle-inner">
        <section class="status-section">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-3 col-lg-4 col-md-7">
                <div class="status-card">
                  <div class="status-card-inner">
                    <div class="status-body">
                      <div class="staus-img">
                        <img src={logo} />
                      </div>
                      <div class="content">
                        <h3>10,000</h3>
                        <p>Total Socksy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-7">
                <div class="status-card">
                  <div class="status-card-inner">
                    <div class="status-body">
                      <div class="staus-img">
                        <img src={flame} />
                      </div>
                      <div class="content">
                        <h3>0</h3>
                        <p>Redeemed socks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-7">
                <div class="status-card">
                  <div class="status-card-inner">
                    <div class="status-body">
                      <div class="staus-img">
                        <img src={drop} />
                      </div>
                      <div class="content">
                        <h3>0</h3>
                        <p>Socksy liquidity Pool</p>
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
  );
}
