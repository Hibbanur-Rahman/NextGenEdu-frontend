import { Link } from "react-router-dom";
import { useState } from "react";

import registerImg from "../assets/images/register-img.png";
import loginImg from "../assets/images/login-img.png";

const Login = (props) => {
  if (props.layout === "login") {
    const [loginStatus, setLoginStatus] = useState(true);
    const handleSetLoginStatus = () => {
      setLoginStatus(!loginStatus);
    };
    return loginStatus ? (
        <div className="login row m-0 p-0 mt-5 pt-5 justify-content-evenly align-items-center ">
          <div className="col-lg-6 d-none d-lg-flex overflow-hidden ">
            <img
              src={loginImg}
              alt="login image"
              className="login-Image w-100 rounded-5"
            />
          </div>
          <div className="col-lg-5 pb-5 d-flex flex-column align-items-center ">
            <p className="m-0 p-0 fw-medium pb-4">Welcome to NextGenEdu...!!</p>
            <div className="row m-0 p-0">
              <div className="login-tab  rounded-pill w-auto p-2">
                <button className="login-btn btn text-light rounded-pill ps-5 pe-5 w-auto">
                  Login
                </button>
                <button
                  className="btn text-light rounded-pill ps-5 pe-5 w-auto"
                  onClick={handleSetLoginStatus}
                >
                  Register
                </button>
              </div>
            </div>
            <p className="m-0 p-0 mt-5 mb-4   text-secondary">
              NextGenEdu is not just a platform, but a community of learners and
              educators who are passionate about innovation and creativity in
              education.
            </p>
            <div className="row m-0 p-0 w-100">
              <form action="" method="post" className="m-0 p-0">
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="row m-0 p-0 justify-content-between ">
                  <div className="row m-0 p-0 w-auto">
                    <input type="checkbox" className="w-auto" />
                    <p className="m-0 p-0 w-auto ps-2">Remember me</p>
                  </div>
                  <Link
                    to="/forget-password"
                    className="text-decoration-none text-black w-auto"
                  >
                    <p className="m-0 p-0 w-auto">Forget Password?</p>
                  </Link>
                </div>
                <div className="row m-0 p-0 justify-content-end mt-4">
                  <button
                    type="submit"
                    className="login-btn btn text-light rounded-pill ps-5 pe-5 w-auto"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="login row m-0 p-0 mt-5 pt-5 justify-content-evenly align-items-center ">
          <div className="col-lg-6 d-none d-lg-flex overflow-hidden ">
            <img
              src={registerImg}
              alt="register image"
              className="login-Image w-100 rounded-5"
            />
          </div>
          <div className="col-lg-5 d-flex flex-column align-items-center pt-5 pb-5">
            <p className="m-0 p-0 fw-medium pb-4">Welcome to NextGenEdu...!!</p>
            <div className="row m-0 p-0">
              <div className="login-tab  rounded-pill w-auto p-2">
                <button
                  className=" btn text-light rounded-pill ps-5 pe-5 w-auto"
                  onClick={handleSetLoginStatus}
                >
                  Login
                </button>
                <button className="login-btn btn text-light rounded-pill ps-5 pe-5 w-auto">
                  Register
                </button>
              </div>
            </div>
            <p className="m-0 p-0 mt-5 mb-4   text-secondary">
              NextGenEdu is not just a platform, but a community of learners and
              educators who are passionate about innovation and creativity in
              education.
            </p>
            <div className="row m-0 p-0 w-100">
              <form action="" method="post" className="m-0 p-0">
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="firstname"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="firstname"
                    placeholder="Enter your firstname"
                  />
                </div>
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="lastname"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="lastname"
                    placeholder="Enter your lastname"
                  />
                </div>
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="phone"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="phone"
                    placeholder="Enter your phone"
                  />
                </div>
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="role">Role</label>
                  <select
                    class="form-input rounded-pill m-0 mt-2 p-2"
                    aria-label="select the role"
                    id="role"
                  >
                    <option selected>select the role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>
    
                <div className="row m-0 p-0 justify-content-between ">
                  <div className="row m-0 p-0 w-auto">
                    <input type="checkbox" className="w-auto" />
                    <p className="m-0 p-0 w-auto ps-2">Remember me</p>
                  </div>
                  <Link
                    to="/forget-password"
                    className="text-decoration-none text-black w-auto"
                  >
                    <p className="m-0 p-0 w-auto">Forget Password?</p>
                  </Link>
                </div>
                <div className="row m-0 p-0 justify-content-end mt-4">
                  <button
                    type="submit"
                    className="login-btn btn text-light rounded-pill ps-5 pe-5 w-auto"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
  }
  if (props.layout === "register") {
    const [loginStatus, setLoginStatus] = useState(false);
    const handleSetLoginStatus = () => {
      setLoginStatus(!loginStatus);
    };
    return loginStatus ? (
        <div className="login row m-0 p-0 mt-5 pt-5 justify-content-evenly align-items-center ">
          <div className="col-lg-6 d-none d-lg-flex overflow-hidden ">
            <img
              src={loginImg}
              alt="login image"
              className="login-Image w-100 rounded-5"
            />
          </div>
          <div className="col-lg-5 pb-5 d-flex flex-column align-items-center ">
            <p className="m-0 p-0 fw-medium pb-4">Welcome to NextGenEdu...!!</p>
            <div className="row m-0 p-0">
              <div className="login-tab  rounded-pill w-auto p-2">
                <button className="login-btn btn text-light rounded-pill ps-5 pe-5 w-auto">
                  Login
                </button>
                <button
                  className="btn text-light rounded-pill ps-5 pe-5 w-auto"
                  onClick={handleSetLoginStatus}
                >
                  Register
                </button>
              </div>
            </div>
            <p className="m-0 p-0 mt-5 mb-4   text-secondary">
              NextGenEdu is not just a platform, but a community of learners and
              educators who are passionate about innovation and creativity in
              education.
            </p>
            <div className="row m-0 p-0 w-100">
              <form action="" method="post" className="m-0 p-0">
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="row m-0 p-0 justify-content-between ">
                  <div className="row m-0 p-0 w-auto">
                    <input type="checkbox" className="w-auto" />
                    <p className="m-0 p-0 w-auto ps-2">Remember me</p>
                  </div>
                  <Link
                    to="/forget-password"
                    className="text-decoration-none text-black w-auto"
                  >
                    <p className="m-0 p-0 w-auto">Forget Password?</p>
                  </Link>
                </div>
                <div className="row m-0 p-0 justify-content-end mt-4">
                  <button
                    type="submit"
                    className="login-btn btn text-light rounded-pill ps-5 pe-5 w-auto"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="login row m-0 p-0 mt-5 pt-5 justify-content-evenly align-items-center ">
          <div className="col-lg-6 d-none d-lg-flex overflow-hidden ">
            <img
              src={registerImg}
              alt="register image"
              className="login-Image w-100 rounded-5"
            />
          </div>
          <div className="col-lg-5 d-flex flex-column align-items-center pt-5 pb-5">
            <p className="m-0 p-0 fw-medium pb-4">Welcome to NextGenEdu...!!</p>
            <div className="row m-0 p-0">
              <div className="login-tab  rounded-pill w-auto p-2">
                <button
                  className=" btn text-light rounded-pill ps-5 pe-5 w-auto"
                  onClick={handleSetLoginStatus}
                >
                  Login
                </button>
                <button className="login-btn btn text-light rounded-pill ps-5 pe-5 w-auto">
                  Register
                </button>
              </div>
            </div>
            <p className="m-0 p-0 mt-5 mb-4   text-secondary">
              NextGenEdu is not just a platform, but a community of learners and
              educators who are passionate about innovation and creativity in
              education.
            </p>
            <div className="row m-0 p-0 w-100">
              <form action="" method="post" className="m-0 p-0">
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="firstname"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="firstname"
                    placeholder="Enter your firstname"
                  />
                </div>
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="lastname"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="lastname"
                    placeholder="Enter your lastname"
                  />
                </div>
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="phone"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="phone"
                    placeholder="Enter your phone"
                  />
                </div>
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="m-0 mt-2 form-input rounded-pill w-100 p-4"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-group row m-0 p-0 mb-4">
                  <label htmlFor="role">Role</label>
                  <select
                    class="form-input rounded-pill m-0 mt-2 p-2"
                    aria-label="select the role"
                    id="role"
                  >
                    <option selected>select the role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>
    
                <div className="row m-0 p-0 justify-content-between ">
                  <div className="row m-0 p-0 w-auto">
                    <input type="checkbox" className="w-auto" />
                    <p className="m-0 p-0 w-auto ps-2">Remember me</p>
                  </div>
                  <Link
                    to="/forget-password"
                    className="text-decoration-none text-black w-auto"
                  >
                    <p className="m-0 p-0 w-auto">Forget Password?</p>
                  </Link>
                </div>
                <div className="row m-0 p-0 justify-content-end mt-4">
                  <button
                    type="submit"
                    className="login-btn btn text-light rounded-pill ps-5 pe-5 w-auto"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
  }

  
};

export default Login;
