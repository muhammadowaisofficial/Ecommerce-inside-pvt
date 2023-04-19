import React from "react";
import "./Header.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="main-header ">
        <div className="header-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-4 col-sm-4 social-review-wrap">
                <ul
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-delay="100"
                >
                  <li>
                    <a href="#" target="blank">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="blank">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="blank">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-8 col-sm-8 top-detail">
                <ul
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-delay="100"
                >
                  <li>
                    <a href="mailto:info@ecommerceinside.co">
                      <FaEnvelopeOpenText />
                      <span>info@ecommerceinside.co</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+971045916004">
                      <FaPhoneAlt />
                      <span>+1 (734) 361 4340</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
