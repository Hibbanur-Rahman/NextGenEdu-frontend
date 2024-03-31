import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import CourseCategoryItem from "../components/courseCategoryItem";
import CourseItems from "../components/courseItem";
import ProgressCourseItem from "../components/progressCourseItem";
// Import Swiper React components
import {   Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Autoplay, Pagination } from "swiper/modules";

const Courses = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="courses row m-0 p-0 pt-5 mt-5">
      {/**progress course items */}
      <div className="progressCourseRow m-0 p-0 justify-content-center ">
        <div className="container pt-5 pb-5">
          <div className="row m-0 p-0 justify-content-between ">
            <h4 className="m-0 p-0 w-auto mb-4">
              Welcome back, ready for your next lesson?
            </h4>
            <Link
              className="w-auto text-decoration-none "
              style={{ color: "#49BBBD" }}
            >
              <p className="m-0 p-0 w-auto fw-medium ">View history</p>
            </Link>
          </div>
          <div className="row m-0 p-0">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                className: "swiper-pagination-top-spacing",
              }}
              modules={[Autoplay,Pagination]}
              breakpoints={{
                // When window width is <= 640px, show only 1 slide
                640: {
                  slidesPerView: 1,
                },
                // When window width is <= 768px, show 2 slides
                768: {
                  slidesPerView: 2,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
              <SwiperSlide>
                <ProgressCourseItem />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/**course category list */}
      <div className="courseCategoryList">
        <div className="container  mt-5 mb-5">
          <h4 className="m-0 p-0">Choice favourite course from top category</h4>
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
      {/* course list */}
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
      <div className="courses-section py-5 d-flex flex-column align-items-center  ">
       
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

      {/**online coaching remote */}
      <div className=" m-0 mt-5 p-0 d-flex justify-content-center ">
        <div className="learningnow container">
            <div className="card p-5 rounded-4 d-flex align-items-center  justify-content-center " style={{backgroundColor:'#252641'}}>
                <h4 className="m-0 p-0 w-auto text-light">Online coaching lessons for remote learning.</h4>
                <p className="m-0 p-0 mt-3 text-white text-center ">
                    Join our online classroom and learn from experts in the field. Our courses are designed to be completed at your own pace, allowing
                    Join our online classroom and get access to a library of video tutorials, quizzes, and assessments. Our experienced train
                    Join our online classes and get access to a library of video tutorials, live sessions, and resources. Our experienced trainers will guide
                </p>
                <button className=" btn text-light mt-4">
                    start learning now
                </button>
            </div>
        </div>
      </div>
      <div className="courses-section py-5 d-flex flex-column align-items-center  ">
       
       <div className="container mt-5">
         <div className="row m-0 p-0 justify-content-between mt-4 mb-4">
           <h5 className="m-0 p-0 w-auto">The course in personal development</h5>
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
            <h5 className="m-0 p-0 w-auto">Student are viewing</h5>
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
     
    </div>
  );
};

export default Courses;
