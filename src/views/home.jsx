import { Link } from "react-router-dom";

import CourseCategoryItem from "../components/courseCategoryItem";
import CourseItems from "../components/courseItem";

import heroimage from "../assets/images/hero-image.png";
import classroomImg from '../assets/images/classroom.png'
const courses = [
  {
    id: 1,
    name: "Design",
    duration: "3 Month",
    instructor: "AWS Certified solutions Architect",
    price: "$100",
    oldPrice: "$80",
  },
  {
    id: 2,
    name: "Design",
    duration: "3 Month",
    instructor: "AWS Certified solutions Architect",
    price: "$100",
    oldPrice: "$80",
  },
  // Add more courses as needed
];
const Home = () => {
  return (
    <div className="home row m-0 p-0 pt-5">
      <div className="hero-section row m-0 p-lg-5 pb-lg-0  pt-5 pt-lg-0pb-0 align-items-center ">
        <div className="col-lg-6">
          <h1 className="m-0 p-0 text-light">
            <span style={{ color: "#F48C06" }}>Studying</span> Online is now
            much easier
          </h1>
          <p className="m-0 p-0 text-light fs-4 mt-5">
            NextGenEdu is an interesting platform that will teach you in more
            interactive way
          </p>
          <div className="row m-0 p-0 mt-5 align-items-center ">
            <button className=" join btn rounded-pill text-light fw-medium fs-4 w-auto p-5 pt-2 pb-2">
              Join for free
            </button>
            <i class="bi bi-play-circle-fill w-auto text-light ms-lg-4"></i>
            <p className="w-auto m-0 p-0 ms-2 fs-5">watch how it works</p>
          </div>
        </div>

        <div className="col-lg-6">
          <img src={heroimage} alt="hero image" className="w-100 h-100" />
        </div>
      </div>
      {/* course list */}
      <div className="courses-section py-5 d-flex flex-column align-items-center  ">
        <h1 className="m-0 p-0 text-center">Featured Courses</h1>
        <p className="m-0 p-0 text-center text-secondary w-lg-50 fs-5 mt-3">
          Learning often happens in classrooms but it doesn’t have to. Use
          Eduflow to facilitate learning experiences no matter the context.
        </p>
        <div className="container mt-5">
          <div className="row m-0 p-0 justify-content-between mt-4 mb-4">
            <h5 className="m-0 p-0 w-auto">Get choice of your course</h5>
            <Link
              to="/courses"
              className="w-auto text-decoration-none fw-medium"
              style={{ color: "#49BBBD" }}
            >
              see all
            </Link>
          </div>
          <div className="row">
            <CourseItems />
            <CourseItems />
            <CourseItems />
            <CourseItems />
          </div>
        </div>
      </div>
      <div
        className="pt-3 pb-5"
        style={{ backgroundColor: "rgba(157,204,255,0.2)" }}
      >
        <div className="container mt-5 mb-5">
          <div className="row m-0 p-0 justify-content-between mt-4 mb-4">
            <h5 className="m-0 p-0 w-auto">Recommended for you</h5>
            <Link
              to="/courses"
              className="w-auto text-decoration-none fw-medium"
              style={{ color: "#49BBBD" }}
            >
              see all
            </Link>
          </div>
          <div className="row">
            <CourseItems />
            <CourseItems />
            <CourseItems />
            <CourseItems />
          </div>
        </div>
      </div>

      {/**course category list */}
      <div className="courseCategoryList">
        <div className="container  mt-5 mb-5">
          <div className="row m-0 p-0">
            <CourseCategoryItem
              name="Design"
              iconName="brush-fill"
              iconColor="#49BBBD"
              iconBgColor="rgba(73,187,189,0.3)"
            />
            <CourseCategoryItem
              name="Development"
              iconName="display"
              iconColor="#5B72EE"
              iconBgColor="rgba(91,114,238,0.3)"
            />
            <CourseCategoryItem
              name="Web Development"
              iconName="database-fill"
              iconColor="#9DCCFF"
              iconBgColor="rgba(157,204,255,0.3)"
            />
            <CourseCategoryItem
              name="Business"
              iconName="briefcase"
              iconColor="#00CBB8"
              iconBgColor="rgba(0,203,184,0.3)"
            />
            <CourseCategoryItem
              name="Marketing"
              iconName="shop-window"
              iconColor="#F48C06"
              iconBgColor="rgba(244,140,6,0.3)"
            />
            <CourseCategoryItem
              name="Photography"
              iconName="camera-fill"
              iconColor="#EE645B"
              iconBgColor="rgba(238,100,91,0.3)"
            />
            <CourseCategoryItem
              name="Acting"
              iconName="film"
              iconColor="#252641"
              iconBgColor="rgba(37,38,65,0.3)"
            />
            <CourseCategoryItem
              name="Business"
              iconName="brush-fill"
              iconColor="#00CBB8"
              iconBgColor="rgba(0,203,184,0.3)"
            />
          </div>
        </div>
      </div>

      {/**something about nextgenedu */}
      <div className="m-0 p-0 mt-5 mb-5">
        <div className="container">
          <h2 className="m-0 p-0 text-center" style={{ color: "#2F327D" }}>
            All-In-One{" "}
            <span className="" style={{ color: "#00CBB8" }}>
              Cloud Software
            </span>
          </h2>
          <p className="m-0 p-0 mt-3 text-secondary text-center">
            NextGenEdu is one powerful online software suite that combines all
            the tools <br /> needed to run a successful school or office
          </p>

          <div className="row m-0 p-0 mt-5 pt-3 justify-content-center ">
            <div className="courseCategoryItem col-lg-3 p-3 mt-lg-0 mt-4  ">
              <div className="card  p-3 pt-5 border-0 justify-content-center align-items-center rounded-4">
                <div
                  className="upper-icon position-absolute  d-flex justify-content-center align-items-center w-auto rounded-circle"
                  style={{ backgroundColor: "#5B72EE" }}
                >
                  <i
                    className={`bi bi-receipt w-auto fs-4 `}
                    style={{ color: "#fff" }}
                  ></i>
                </div>
                <h5
                  className="m-0 p-0 mt-4 text-center"
                  style={{ color: "#2F327D" }}
                >
                  Online Billing, Invoicing, & Contracts
                </h5>
                <p className="m-0 p-0 mt-4 mb-2 text-center text-secondary">
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts{" "}
                </p>
              </div>
            </div>

            <div className="courseCategoryItem col-lg-3 p-3 mt-lg-0 mt-4 ">
              <div className="card  p-3 pt-5 border-0 justify-content-center align-items-center rounded-4">
                <div
                  className="upper-icon position-absolute  d-flex justify-content-center align-items-center w-auto rounded-circle"
                  style={{ backgroundColor: "#00CBB8" }}
                >
                  <i
                    className={`bi bi-calendar2-week-fill w-auto fs-4 `}
                    style={{ color: "F5F5FC" }}
                  ></i>
                </div>
                <h5
                  className="m-0 p-0 mt-4 text-center"
                  style={{ color: "#2F327D" }}
                >
                  Easy Scheduling & Attendance Tracking
                </h5>
                <p className="m-0 p-0 mt-4 mb-2 text-center text-secondary">
                  Schedule and reserve classrooms at one campus or multiple
                  campuses. Keep detailed records of student attendance{" "}
                </p>
              </div>
            </div>

            <div className="courseCategoryItem col-lg-3 p-3 mt-lg-0 mt-4 ">
              <div className="card  p-3  pt-5 border-0 justify-content-center align-items-center rounded-4">
                <div
                  className="upper-icon position-absolute  d-flex justify-content-center align-items-center w-auto rounded-circle"
                  style={{ backgroundColor: "#29B9E7" }}
                >
                  <i
                    className={`bi bi-people-fill w-auto fs-4 `}
                    style={{ color: "#fff" }}
                  ></i>
                </div>
                <h5
                  className="m-0 p-0 mt-5 text-center"
                  style={{ color: "#2F327D" }}
                >
                  Customer Tracking
                </h5>
                <p className="m-0 p-0 mt-4 mb-2 text-center text-secondary">
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* what is nextgenEdu*/}
      <div className="m-0 p-0 justify-content-center ">
        <div className="container justify-content-center align-items-center   d-flex flex-column py-5">
          <h2 className="m-0 p-0 text-center" style={{ color: "#2F327D" }}>
            What is{" "}
            <span className="" style={{ color: "#00CBB8" }}>
              NextGenEdu
            </span>
          </h2>
          <p className="m-0 p-0 mt-3 text-secondary text-center col-8">
            NextGenEdu is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.{" "}
          </p>

          <div className="what-nextGenEdu row m-0 p-0 mt-5 w-100 justify-content-center">
            <div className="col-lg-5 p-4">
              <div className="card border-0 rounded-4 overflow-hidden justify-content-center align-items-center">
                <h4 className="m-0 p-0 text-white z-2 ">FOR INSTRUCTORS</h4>
                <button className="btn btn-transparent border border-2 rounded-pill w-auto z-2 text-light mt-3">
                  Start a class today
                </button>
              </div>
            </div>
            <div className="col-lg-5 p-4">
              <div className="card border-0 rounded-4 overflow-hidden justify-content-center align-items-center">
                <h4 className="m-0 p-0 text-white z-2 ">FOR STUDENTS</h4>
                <button className="btn btn-transparent border border-2 rounded-pill w-auto z-2 text-light mt-3">
                  Enter access code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* what is nextgenEdu*/}
      <div className="m-0 p-0 justify-content-center ">
        <div className="container d-flex">
          <div className="col-lg-6 p-lg-4">
            <h3 className="m-0 p-0 col-lg-11" style={{ color: "#2F327D" }}>
              Everything you can do in a physical classroom,{" "}
              <span className="" style={{ color: "#00CBB8" }}>
                you can do with NextGenEdu
              </span>
            </h3>
            <p className="m-0 p-0 text-secondary mt-3 mb-5">
              NextGenEdu’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <Link className="">Learn more</Link>
          </div>
          <div className="col-lg-6 p-lg-5 pt-0">
            <img src={classroomImg} alt="classroom image" className="w-100 rounded-5 h-75 border border-1 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
