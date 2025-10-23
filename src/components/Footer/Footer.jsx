import React from "react";
import logo from "/images/whiteLogo.png";
import styles from "./Footer.module.css";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Store Info */}
          <div className="col-md-4 mb-4">
            <div className={styles.footerBrand}>
              <img src={logo} alt="Logo" width={691} height={361} />
            </div>
            <p className="text-secondary">
              Your one-stop shop for all your needs. We deliver top-quality products with fast shipping and excellent support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              
              <li><Link to="/" className="text-light text-decoration-none d-block mb-2">Home</Link></li>
              <li><Link to="/AboutUs" className="text-light text-decoration-none d-block mb-2">About Us</Link></li>
              <li><Link to="/ContactUs" className="text-light text-decoration-none d-block mb-2">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled navItems">
              <li className="mb-2">
                <a href="#!" className="text-white" >
                <i className="fa-solid fa-location-dot me-2"></i> Karachi, Pakistan
                </a>
              </li>
              <li className="mb-2"  >
                <a href="tel:03001234567"  className="text-white" >
                <i className="fa-solid fa-phone me-2"></i> +92 300 1234567
                </a>
              </li>
              <li className="mb-2"  >
                <a href="mailto:info@demostore.com"  className="text-white" >
                <i className="fa-solid fa-envelope me-2"></i> info@demostore.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="#!" className="text-light fs-5"><i className="fa-brands fa-facebook"></i></a>
              <a href="#!" className="text-light fs-5"><i className="fa-brands fa-instagram"></i></a>
              <a href="#!" className="text-light fs-5"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#!" className="text-light fs-5"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Footer Bottom */}
        <div className="text-center text-secondary">
          © {new Date().getFullYear()} <span className="text-light">Demo Store</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
