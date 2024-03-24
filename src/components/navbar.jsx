import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="Navbar row m-0 p-0 justify-content-between align-items-center p-5 pt-3 pb-3">
      <div className="col-2 overflow-hidden ">
        <img src={logo} alt="logo" className="w-75" />
      </div>
      <div className="col-8">
        <div className="row m-0 p-0 align-items-center">
          <Link to="/" className=" text-light w-auto m-0 p-0 text-decoration-none ms-5 me-5 ">
            <p className="m-0 p-0 w-auto">Home</p>
          </Link>
          <Link to="/courses" className="text-light w-auto m-0 p-0 text-decoration-none ms-5 me-5">
            <p className="m-0 p-0 w-auto">Courses</p>
          </Link>
          <Link to="/careers" className="text-light w-auto m-0 p-0 text-decoration-none ms-5 me-5">
            <p className="m-0 p-0 w-auto">Careers</p>
          </Link>
          <Link to="/blog" className="text-light w-auto m-0 p-0 text-decoration-none ms-5 me-5">
            <p className="m-0 p-0 w-auto">Blog</p>
          </Link>
          <Link to="/aboutUs" className="text-light w-auto m-0 p-0 text-decoration-none ms-4 me-5">
            <p className="m-0 p-0 w-auto">About Us</p>
          </Link>
          <Link to="/login" className="text-light w-auto m-0 p-0 text-decoration-none ms-4 me-2">
            <button className="login btn bg-light rounded-pill ps-4 pe-4">Login</button>
          </Link>
          <Link to="/SignUp" className="text-light w-auto m-0 p-0 text-decoration-none ms-2">
            <button className="signup btn rounded-pill ps-3 pe-3 text-light">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
