import React from "react";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "./footer.css";
// import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <footer>
        <div className="row primary">
          <div className="column about">
            <h3>Suvidha Foundation </h3>

            <p>
              <span
                style={{
                  color: "#2183bb",
                  fontWeight: "bold",
                  fontSize: "27px",
                }}
              >
                
                Office Headquarters-
              </span>
              <br />
              <strong style={{ color: "white", fontSize: "20px" }}>
                Nagpur Headquarter:
              </strong>
              <br />
              Suvidha Foundation, Walni Ward No. 1, Jai Bhole Nagar, Walni,
              Saoner Nagpur, Maharashtra 441102 <br />
              <strong style={{ color: "white", fontSize: "20px" }}>
                Hyderabad Headquarter:
              </strong>
              <br />
              Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad
            </p>

            <div className="social">
              <i>
                <FaGithub />
              </i>
              <i>
                <FaLinkedin />
              </i>
              <i>
                <FaFacebook />
              </i>
              <i>
                <FaInstagram />
              </i>
            </div>
          </div>

          <div className="column links">
            <h3>Certificates</h3>

            <ul>
              <li>
                <a href="#faq">80G Certificate</a>
              </li>
              <li>
                <a href="#cookies-policy">12A Certificate</a>
              </li>
              <li>
                <a href="#terms-of-services">CSR Certificate</a>
              </li>
              <li>
                <a href="#support">Suvidha Darpan Registration</a>
              </li>
              <li>
                <a href="#support">Suvidha Pan Card</a>
              </li>
            </ul>
          </div>

          <div className="column links">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="#faq">Verify Your Certificate</a>
              </li>
              <li>
                <a href="#cookies-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="column subscribe">
            <h3>Connect</h3>
            <div>
              <input type="email" placeholder="Your email id here" className="input_footer"/>
              <a className="footer_btn">Subscribe</a>
            </div>
          </div>
        </div>

        <div className="row copyright">
          <div className="footer-menu">
            <a href="/">Home</a>
            <a href="/events">Events</a>
            <a href="/donar">Donars</a>
            <a href="/contact">Contact</a>
          </div>
          {/* <p>Copyright &copy; 2024 Suvidha Mahila Mandal</p> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
