import React, { useEffect } from "react";
import bg from "../images/bg.jpg";
import contact from "../images/contact.jpg";
import logo from "../images/logo.png";
import cc from "../images/cc.png";
import dd from "../images/dd.jpg";
import WOW from "wowjs";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <div
        className="main_home"
        style={{
          backgroundImage: `linear-gradient(to right, #0f0c296f, #302b636f, #24243e6f),url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container  text-white ">
          <div className="row ">
            <div className=" left_box col-md-6 d-flex justify-content-center align-items-start">
              <h2>
                Get Access To Your Account With{" "}
                <span className="text-info">SPARKS</span> Bank
              </h2>
              <br />
              <br />
              <p className="text-secondary">
                No more waitting in the long queues. Transfer the money very
                easily with the help of our Sparks Bank System.A degital wallet
                platform and online payment system developed to power in app
              </p>
              <br />
              <br />
              <Link to="/all">
                <button className="btn btn-info btn-lg">Transfer Now</button>
              </Link>
            </div>
            <div className=" left_box right_box col-md-6  d-flex justify-content-center align-items-end">
              <img src={logo} className="logo" alt="Loading..." />
            </div>
          </div>
        </div>
      </div>
      <div className="main_down">
        <div className="container down_box">
          <div className="row">
            <div
              className="col-md-4 wow bounceInDown center"
              data-wow-delay="0.5s"
            >
              <div className="card">
                <img src={contact} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Contact Us</h5>
                  <p className="card-text">
                    You can contact us for any kind of issue. We are always
                    ready to hear you. You can tell us also about your
                    experience with our app
                  </p>
                  <Link to="./contact" className="btn btn-outline-primary">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow fadeInDown" data-wow-delay="0.7s">
              <div className="card ">
                <img src={cc} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">View all customer</h5>
                  <p className="card-text">
                    You can explore all the coustomer we have in SPRKS bank. You
                    can also transfer money to any person by choosing the
                    account
                  </p>
                  <Link to="/all" className="btn btn-outline-warning">
                    Check all
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 wow bounceInRight" data-wow-delay="0.5s">
              <div className="card ">
                <img src={dd} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Register</h5>
                  <p className="card-text">
                    If you are new to SPARKS banking system so you can register
                  </p>
                  <Link to="/register" className="btn btn-outline-info">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
