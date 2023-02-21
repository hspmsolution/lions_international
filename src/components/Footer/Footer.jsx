import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div class="row-footer">
          <div class="site-logo">
            <span>LIONS CLUB</span>
              <ul>
                <li className="imagee">
                  <img src="../images/logo2.png" alt=""/>
                </li>
              </ul>
          </div>
          <div class="site-links">
            <span>Quick Links</span>
            <ul class="list-links">
              <li>
                 <a href="#">Events</a>
              </li>
              <li>
              <a href="#">Activities</a>

              </li>
              <li>
                <a href="#">Privacy POlicies</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              
            </ul>
          </div>
          <div class="adr-email">
            <span>Contact Info</span>
            <ul class="call">
              <li class="location">
                <a>
                  <i class="fa-regular fa-phone">8882655840</i>
                </a>
              </li>
              <li class="email">
                <a href="#">
                  support@lions3234d2.com
                </a>
              </li>
            </ul>
          </div>
        </div> 

        <hr />

        <div class="row-footer">
          <div class="follow-icons">
            <li>
              <span>Follow me here</span>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
            </li>
            
            
            
          </div>
        </div>

        <div class="row-footer">
          <div class="left-dis">
            Copyright <strong></strong> © 2021. All the rights are
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;