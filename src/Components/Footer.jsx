import React from 'react'
import discord from "../Assets/images/icon/discord.png"
export default function Footer() {
    return (
        <footer className="footer-section mt-auto wow fadeIn" data-wow-delay="0.2s" data-wow-duration="1.5s"  data-wow-offset="5">
      <div className="footer-inner">
        <div className="container">
        
          <div className="copy-right-text">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="social-media">
                  <ul>
                    <li>
                      <a href="https://discord.gg/f9aHCt4683">
                      {/* <i class="fab fa-discord"></i> */}
                      <img src={discord} alt=""  className="discord"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/SocksyChat">
                      <i class="fab fa-telegram-plane"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/SocksyNFT">
                      <i class="fab fa-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a href="https://github.com/SocksyNFT">
                      <i class="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>

                </div>

                <p>&copy; 2021 Socksy All Right Reserved</p>
              </div>   
            </div>
          </div>
          
        </div>
      </div>

    </footer>
    )
}
