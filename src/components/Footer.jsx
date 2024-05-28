import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark py-5 text-light">
      <div className="container container-fluid mt-5 w-100 ">
        <div className="d-lg-flex justify-content-between">
          <div className="intro ">
            <h5 className="py-2 text-light">
            <i class="fa-solid fa-pepper-hot"></i> Spicy
            </h5>
            <p>
            The Ember Hotel: A vibrant retreat offering fiery cuisine and
              <br />  electrifying entertainment for the adventurous traveler.<br />  <br/>
             
            </p>
            <p>Enjpoy the dish and let every bite ignite your senses.</p>
            <p>Currently v5.3.2.</p>
          </div>
          <div className="links d-flex flex-column">
            <h5 className="py-2 text-light">Links</h5>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              About
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              Review
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              Contact us
            </a>
          </div>
          <div className="Guides d-flex flex-column">
            <h5 className="py-2 text-light">Guides </h5>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              React
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              Redux
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
             Bootstrap
            </a>
          </div>
          <div className="Contact d-flex flex-column">
            <h5 className="py-2 text-light">Contact Us</h5>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Email id Please"
                className="form-control"
              />
              <button className="btn btn-light ms-2">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="icons d-flex justify-content-between mt-3">
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center p-1">
          <p>Copyright © 2024 Spicy. Built with React.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
