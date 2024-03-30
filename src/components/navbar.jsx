import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 100;

      setIsFixed(scrollPosition > offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className={`Navbar row m-0 p-0 justify-content-between align-items-center pt-3 pb-3 p-md-5 pt-md-3 pb-md-3  fixed ${isFixed?'navbar-light':' '}`}>
      <div className="col-3 col-lg-2 overflow-hidden ">
        <img src={logo} alt="logo" className="w-lg-75 w-100" />
      </div>
      <div className="col-9 d-lg-flex d-none">
        <div className="row m-0 p-0 w-100 align-items-center justify-content-between">
          <Link
            to="/"
            className={`text-light col-1 m-0 p-0 text-decoration-none   ${isFixed?'text-dark':' '}`}
          >
            <p className="m-0 p-0 w-auto">Home</p>
          </Link>
          <Link
            to="/courses"
            className={`text-light col-1 m-0 p-0 text-decoration-none  ${isFixed?'text-dark':' '}`}
          >
            <p className="m-0 p-0 w-auto">Courses</p>
          </Link>
          <Link
            to="/careers"
            className={`text-light col-1 m-0 p-0 text-decoration-none  ${isFixed?'text-dark':' '}`}
          >
            <p className="m-0 p-0 w-auto">Careers</p>
          </Link>
          <Link
            to="/blog"
            className={`text-light col-1 m-0 p-0 text-decoration-none  ${isFixed?'text-dark':' '}`}
          >
            <p className="m-0 p-0 w-auto">Blog</p>
          </Link>
          <Link
            to="/aboutUs"
            className={`text-light col-1 m-0 p-0 text-decoration-none ${isFixed?'text-dark':' '}`}
          >
            <p className="m-0 p-0 w-auto">About Us</p>
          </Link>
         <div className="col-4 d-flex justify-content-end">
         <Link
            to="/login"
            className={`text-light w-auto m-0 p-0 text-decoration-none  ${isFixed?'text-light':' '}`}
          >
            <button className={`login btn bg-light rounded-pill ps-4 pe-4 ${isFixed?'login-scroll':' '}`}>
              Login
            </button>
          </Link>
          <Link
            to="/register"
            className={`text-light w-auto m-0 p-0 text-decoration-none ms-1 ${isFixed?'text-dark':' '}`}
          >
            <button className={`signup btn rounded-pill ps-3 pe-3 text-light ${isFixed?'signup-scroll':''}`}>
              Sign Up
            </button>
          </Link>
         </div>
        </div>
      </div>

      <i
        class="bi bi-list fs-1 w-auto d-flex d-lg-none"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      ></i>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <div className="col-6">
            <img src={logo} alt="logo" className="w-100" />
          </div>

          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="row m-0 p-0 align-items-center">
            <Link
              to="/"
              className=" text-light  m-0 p-0 text-decoration-none mt-3 mb-3 "
            >
              <p className="m-0 p-0 w-auto fs-4 ">Home</p>
            </Link>
            <Link
              to="/courses"
              className="text-light  m-0 p-0 text-decoration-none mt-3 mb-3"
            >
              <p className="m-0 p-0 w-auto fs-4 ">Courses</p>
            </Link>
            <Link
              to="/careers"
              className="text-light  m-0 p-0 text-decoration-none mt-3 mb-3"
            >
              <p className="m-0 p-0 w-auto fs-4 ">Careers</p>
            </Link>
            <Link
              to="/blog"
              className="text-light  m-0 p-0 text-decoration-none mt-3 mb-3"
            >
              <p className="m-0 p-0 w-auto fs-4 ">Blog</p>
            </Link>
            <Link
              to="/aboutUs"
              className="text-light  m-0 p-0 text-decoration-none mt-3 mb-3"
            >
              <p className="m-0 p-0 w-auto fs-4 ">About Us</p>
            </Link>
            <Link
              to="/login"
              className="text-light w-auto m-0 p-0 text-decoration-none"
            >
              <button className="login btn bg-light rounded-pill ps-4 pe-4 fs-4">
                Login
              </button>
            </Link>
            <Link
              to="/register"
              className="text-light w-auto m-0 p-0 text-decoration-none ms-2"
            >
              <button className="signup btn rounded-pill ps-3 pe-3 text-light fs-4">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
