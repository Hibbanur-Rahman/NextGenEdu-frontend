import { useState } from "react";
import InstructorImg from "../assets/images/instructor-Avatar.jpg";
import profileImage from "../assets/images/instructor-image-course.png";
const CourseDetails = () => {
  const [courseInfoTabBtn, setCourseInfoTabBtn] = useState(true);
  const [reviewTabBtn, setReviewTabBtn] = useState(false);
  const handleTab = (e) => {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === "reviews") {
      setReviewTabBtn(true);
      setCourseInfoTabBtn(false);
    }
    if (e.currentTarget.id === "courseInfo") {
      setReviewTabBtn(false);
      setCourseInfoTabBtn(true);
    }
  };
  return (
    <div className="courseDetails d-flex m-0 p-0 pt-5 mt-5 justify-content-center ">
      <div className="container pt-lg-5">
        <div className="row m-0 p-0 align-items-center ">
          <i className="bi bi-star-fill text-warning w-auto m-0 p-0 ps-0 pe-1"></i>
          <i className="bi bi-star-fill text-warning w-auto m-0 p-0 ps-2 pe-1"></i>
          <i className="bi bi-star-fill text-warning w-auto m-0 p-0 ps-2 pe-1"></i>
          <i className="bi bi-star-fill text-warning w-auto m-0 p-0 ps-2 pe-1"></i>
          <i className="bi bi-star-fill text-warning w-auto m-0 p-0 ps-2 pe-1"></i>
          <span className="m-0 p-0 ps-2 w-auto fw-medium ">4.67</span>
          <span className="m-0 p-0 ps-2 text-muted w-auto text-secondary ">
            (9 Ratings)
          </span>
        </div>
        {/* <h3 className="m-0 p-0 mt-3">
          Perfect Diet & Meal Plan-Complete Course
        </h3> */}
        <h3 className="m-0 p-0  mt-3 " style={{ color: "rgb(47, 50, 125)" }}>
          Perfect Diet &{" "}
          <span className="" style={{ color: "rgb(0, 203, 184)" }}>
            Meal Plan-Complete Course
          </span>
        </h3>
        <div className="row m-0 p-0 justify-content-between align-items-center ">
          <p className="text-secondary m-0 p-0 mt-2 w-auto">
            Categories:{" "}
            <span className="text-black">Featured, Health & Fitness</span>
          </p>
          <div className="w-auto d-flex align-items-center m-0 p-0 mt-3 mt-md-0">
            <i className="bi bi-bookmark w-auto m-0 p-0 text-secondary ps-0 pe-2"></i>
            <p className="m-0 p-0 w-auto text-secondary ps-1 pe-2">Wishlist</p>
            <i className="bi bi-share w-auto m-0 p-0 text-secondary ps-3 pe-2"></i>
            <p className="m-0 p-0 w-auto text-secondary ps-1 pe-0">share</p>
          </div>
        </div>

        <div className="row m-0 p-0 mt-5">
          <div className="col-lg-9 p-lg-4 pe-0 pe-lg-4 pt-0 pt-lg-0 ps-0 ps-lg-0">
            <iframe
              id="player"
              type="text/html"
              width="640"
              height="490"
              className="w-100"
              src="http://www.youtube.com/embed/yGDwk4z9EEg?enablejsapi=1&origin=http://example.com"
              frameborder="0"
            ></iframe>

            <div className="navtab row m-0 p-0 mt-5 border border-1 border-start-0 border-end-0 border-top-0 pb-3">
              <button
                className={`btn fw-medium w-auto ms-0 me-md-2 mt-2 mt-md-0 ${
                  courseInfoTabBtn ? "btn-active" : ""
                }`}
                id="courseInfo"
                onClick={handleTab}
              >
                Course Info
              </button>

              <button
                className={`btn fw-medium w-auto ms-2 me-2 mt-2 mt-md-0 ${
                  reviewTabBtn ? "btn-active" : ""
                }`}
                id="reviews"
                onClick={handleTab}
              >
                Reviews
              </button>
            </div>
            {courseInfoTabBtn ? (
              <div className="row m-0 p-0 mt-3" id="courseInfoDetails">
                <h3 className="m-0 p-0">About Course</h3>
                {/**about courses details paragraph */}
                <p className="m-0 p-0 mt-3">
                  <b>Are you new to PHP or need a refresher? </b> Then this
                  course will help you get all the fundamentals of Procedural
                  PHP, Object Oriented PHP, MYSQLi and ending the course by
                  building a CMS system similar to WordPress, Joomla or Drupal.
                  <br />{" "}
                  <b>
                    Knowing PHP has allowed me to make enough money to stay home
                    and make courses like this one for students all over the
                    world.
                  </b>{" "}
                  Being a PHP developer can allow anyone to make really good
                  money online and offline, developing dynamic applications.
                  <br /> Knowing <strong>PHP</strong> will allow you to build
                  web applications, websites or Content Management systems, like
                  WordPress, Facebook, Twitter or even Google. <br />
                  <strong>
                    There is no limit to what you can do with this knowledge.
                  </strong>{" "}
                  PHP is one of the most important web programming languages to
                  learn, and knowing it, will give you{" "}
                  <strong> SUPER POWERS </strong>
                  in the web development world and job market place.
                  <br />
                  <strong>Why?</strong>
                  <br />
                  Because Millions of websites and applications (the majority)
                  use PHP. You can find a job anywhere or even work on your own,
                  online and in places like freelancer or Odesk. You can
                  definitely make a substantial income once you learn it. <br />
                  <strong>I will not bore you 🙂</strong> <br /> I take my
                  courses very seriously but at the same time I try to make it
                  fun since I know how difficult learning from an instructor
                  with a monotone voice or boring attitude is. This course is
                  fun, and when you need some energy to keep going, you will get
                  it from me. <br /> <strong>My Approach</strong> <br />{" "}
                  Practice, practice and more practice. Every section inside
                  this course has a practice lecture at the end, reinforcing
                  everything with went over in the lectures. I also created a
                  small application the you will be able to download to help you
                  practice PHP. To top it off, we will build and awesome CMS
                  like WordPress, Joomla or Drupal.
                </p>
                {/**what will you learn */}
                <h3 className="m-0 p-0 mt-5 mb-3">What will you learn</h3>
                <div className="row m-0 p-0">
                  <div className="col-lg-6">
                    <div className="row m-0 p-0 align-items-center mt-2 justify-content-between">
                      <div className="col-1 m-0 p-0">
                        <div className="dot bg-secondary  rounded-circle p-0 m-0"></div>
                      </div>
                      <div className="col-11 m-0 p-0">
                        <p className="m-0 p-0 ">
                          Understanding the fundamentals of healthy
                          deiting(calories,protein,carbs,fat,vitamins &
                          minerals)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row m-0 p-0 align-items-center mt-2 justify-content-between">
                      <div className="col-1 m-0 p-0">
                        <div className="dot bg-secondary  rounded-circle p-0 m-0"></div>
                      </div>
                      <div className="col-11 m-0 p-0">
                        <p className="m-0 p-0 ">
                          Create a deit that is perfect for you needs and
                          lifestyle
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row m-0 p-0 align-items-center mt-2 justify-content-between">
                      <div className="col-1 m-0 p-0">
                        <div className="dot bg-secondary  rounded-circle p-0 m-0"></div>
                      </div>
                      <div className="col-11 m-0 p-0">
                        <p className="m-0 p-0 ">
                          Learn when, what and how much you should eat for
                          optimal body composition
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row m-0 p-0 align-items-center mt-2 justify-content-between">
                      <div className="col-1 m-0 p-0">
                        <div className="dot bg-secondary  rounded-circle p-0 m-0"></div>
                      </div>
                      <div className="col-11 m-0 p-0">
                        <p className="m-0 p-0 ">
                          Build more muscle by optimizing your meal plan{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row m-0 p-0 align-items-center mt-2 justify-content-between">
                      <div className="col-1 m-0 p-0">
                        <div className="dot bg-secondary  rounded-circle p-0 m-0"></div>
                      </div>
                      <div className="col-11 m-0 p-0">
                        <p className="m-0 p-0 ">
                          Lose fat faster by optimizing your meal plan{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row m-0 p-0 align-items-center mt-2 justify-content-between">
                      <div className="col-1 m-0 p-0">
                        <div className="dot bg-secondary  rounded-circle p-0 m-0"></div>
                      </div>
                      <div className="col-11 m-0 p-0">
                        <p className="m-0 p-0 ">
                          Improve immunity and energy levels with the right
                          vitamins and minerals{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/**course content */}
                <div className="row m-0 p-0">
                  <h3 className="m-0 p-0 mt-5 mb-3">Course Content</h3>

                  <div className="card content-item p-0 m-0 mt-3 overflow-hidden ">
                    <div
                      className="row m-0 p-0 p-3 border border-1 border-top-0 border-start-0 border-end-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#contentItem1"
                      aria-expanded="false"
                      aria-controls="contentItem1"
                    >
                      <h5 className="m-0 p-0">Meal Planning Basics</h5>
                    </div>

                    <div class="collapse m-0 p-0" id="contentItem1">
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            Meal Planning Explained
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <p className="m-0 p-0 text-secondary w-auto">17:24</p>
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            Macronutrients Explained
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <p className="m-0 p-0 text-secondary w-auto">05:12</p>
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            How Much Protein Should You Consume Per day?
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <p className="m-0 p-0 text-secondary w-auto">13:00</p>
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            How Much Fat Should You Consume Per Day?
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <p className="m-0 p-0 text-secondary w-auto">17:24</p>
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-clipboard-data-fill w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            Meal Timing Introduction
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-question-circle w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">This is Demo Quiz</p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card content-item p-0 m-0 mt-3 overflow-hidden ">
                    <div
                      className="row m-0 p-0 p-3 border border-1 border-top-0 border-start-0 border-end-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#contentItem2"
                      aria-expanded="false"
                      aria-controls="contentItem2"
                    >
                      <h5 className="m-0 p-0">Supplements</h5>
                    </div>

                    <div class="collapse m-0 p-0" id="contentItem2">
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            Supplements Explained
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <p className="m-0 p-0 text-secondary w-auto">17:24</p>
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            The Top 3 Beginner Supplements For Fitness
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <p className="m-0 p-0 text-secondary w-auto">05:12</p>
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>

                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-clipboard-data-fill w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            How To Use Protein Powder
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-clipboard-data-fill w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            Other Supplements To Consider
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card content-item p-0 m-0 mt-3 overflow-hidden ">
                    <div
                      className="row m-0 p-0 p-3 border border-1 border-top-0 border-start-0 border-end-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#contentItem3"
                      aria-expanded="false"
                      aria-controls="contentItem3"
                    >
                      <h5 className="m-0 p-0">Setting Up Your Diet</h5>
                    </div>

                    <div class="collapse m-0 p-0" id="contentItem3">
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            Meal Planning Explained
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <p className="m-0 p-0 text-secondary w-auto">17:24</p>
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            Macronutrients Explained
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <p className="m-0 p-0 text-secondary w-auto">05:12</p>
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            How Much Protein Should You Consume Per day?
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <p className="m-0 p-0 text-secondary w-auto">13:00</p>
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            How Much Fat Should You Consume Per Day?
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <p className="m-0 p-0 text-secondary w-auto">17:24</p>
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-clipboard-data-fill w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">
                            Meal Timing Introduction
                          </p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                      <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-question-circle w-auto text-secondary m-0 p-0 pe-2"></i>
                          <p className="m-0 p-0 w-auto">This is Demo Quiz</p>
                        </div>
                        <div className="row m-0 p-0 w-auto align-items-center">
                          <i className="bi bi-lock w-auto text-secondary"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card content-item p-0 m-0 mt-3 overflow-hidden ">
                  <div
                    className="row m-0 p-0 p-3 border border-1 border-top-0 border-start-0 border-end-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#contentItem4"
                    aria-expanded="false"
                    aria-controls="contentItem4"
                  >
                    <h5 className="m-0 p-0">
                      Adjusting Your Diet For Weight Loss & Muscle Gains
                    </h5>
                  </div>

                  <div class="collapse m-0 p-0" id="contentItem4">
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          Meal Planning Explained
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <p className="m-0 p-0 text-secondary w-auto">17:24</p>
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          Macronutrients Explained
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <p className="m-0 p-0 text-secondary w-auto">05:12</p>
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          How Much Protein Should You Consume Per day?
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <p className="m-0 p-0 text-secondary w-auto">13:00</p>
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          How Much Fat Should You Consume Per Day?
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <p className="m-0 p-0 text-secondary w-auto">17:24</p>
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-clipboard-data-fill w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          Meal Timing Introduction
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-question-circle w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">This is Demo Quiz</p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card content-item p-0 m-0 mt-3 overflow-hidden ">
                  <div
                    className="row m-0 p-0 p-3 border border-1 border-top-0 border-start-0 border-end-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#contentItem5"
                    aria-expanded="false"
                    aria-controls="contentItem5"
                  >
                    <h5 className="m-0 p-0">Micronuterients</h5>
                  </div>

                  <div class="collapse m-0 p-0" id="contentItem5">
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          Meal Planning Explained
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <p className="m-0 p-0 text-secondary w-auto">17:24</p>
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          Macronutrients Explained
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <p className="m-0 p-0 text-secondary w-auto">05:12</p>
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          How Much Protein Should You Consume Per day?
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <p className="m-0 p-0 text-secondary w-auto">13:00</p>
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          How Much Fat Should You Consume Per Day?
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <p className="m-0 p-0 text-secondary w-auto">17:24</p>
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-clipboard-data-fill w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          Meal Timing Introduction
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-question-circle w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">This is Demo Quiz</p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card content-item p-0 m-0 mt-3 overflow-hidden ">
                  <div
                    className="row m-0 p-0 p-3 border border-1 border-top-0 border-start-0 border-end-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#contentItem6"
                    aria-expanded="false"
                    aria-controls="contentItem6"
                  >
                    <h5 className="m-0 p-0">More Dieting Tips & Strategies</h5>
                  </div>

                  <div class="collapse m-0 p-0" id="contentItem6">
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          Meal Planning Explained
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <p className="m-0 p-0 text-secondary w-auto">17:24</p>
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          Macronutrients Explained
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <p className="m-0 p-0 text-secondary w-auto">05:12</p>
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          How Much Protein Should You Consume Per day?
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <p className="m-0 p-0 text-secondary w-auto">13:00</p>
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-youtube w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          How Much Fat Should You Consume Per Day?
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <p className="m-0 p-0 text-secondary w-auto">17:24</p>
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-clipboard-data-fill w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">
                          Meal Timing Introduction
                        </p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                    <div className="row m-0 p-0 p-3 justify-content-between align-items-center">
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-question-circle w-auto text-secondary m-0 p-0 pe-2"></i>
                        <p className="m-0 p-0 w-auto">This is Demo Quiz</p>
                      </div>
                      <div className="row m-0 p-0 w-auto align-items-center">
                        <i className="bi bi-lock w-auto text-secondary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row m-0 p-0" id="courseInfoDetails">
                {/**Reiviews and Rating */}

                <h3 className="m-0 p-0 mt-4">Student Rating & Reviews</h3>
                <div className="review-card card m-0 p-0 p-4 mt-4 border-0 ">
                  {/**star and rating row */}
                  <div className="row m-0 p-0 align-items-center">
                    <div className="col-lg-4">
                      <div className="card p-4 border-0 ">
                        <h5 className="m-0 p-0 text-secondary text-center">
                          4 Out of 5
                        </h5>
                        <div className="row m-0 p-0 justify-content-center mt-2">
                          <i className="bi bi-star-fill text-warning w-auto m-0 p-0 ps-1 pe-1"></i>
                          <i className="bi bi-star-fill text-warning w-auto m-0 p-0 ps-1 pe-1"></i>
                          <i className="bi bi-star-fill text-warning w-auto m-0 p-0 ps-1 pe-1"></i>
                          <i className="bi bi-star-fill text-warning w-auto m-0 p-0 ps-1 pe-1"></i>
                          <i className="bi bi-star text-warning w-auto m-0 p-0 ps-1 pe-1"></i>
                        </div>
                        <p className="m-0 p-0 text-secondary text-center mt-2">
                          Top Rating
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="row m-0 p-0 align-items-center mt-2">
                        <div className="col-3 col-lg-2 m-0 p-0">
                          <p className="m-0 p-0 text-secondary w-auto">
                            5 Stars
                          </p>
                        </div>
                        <div className="col-9 col-lg-10 m-0 p-0">
                          <div
                            className="progress m-0 p-0"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: "10px ",backgroundColor:'#D9D9D9'}}
                          >
                            <div
                              className="progress-bar rounded-2 "
                              style={{
                                width: "65%",
                                backgroundColor: "#49BBBD",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="row m-0 p-0 align-items-center mt-2">
                        <div className="col-3 col-lg-2 m-0 p-0">
                          <p className="m-0 p-0 text-secondary w-auto">
                            4 Stars
                          </p>
                        </div>
                        <div className="col-9 col-lg-10 m-0 p-0">
                          <div
                            className="progress m-0 p-0"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: "10px ",backgroundColor:'#D9D9D9' }}
                          >
                            <div
                              className="progress-bar rounded-2 "
                              style={{
                                width: "65%",
                                backgroundColor: "#49BBBD",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="row m-0 p-0 align-items-center mt-2">
                        <div className="col-3 col-lg-2 m-0 p-0">
                          <p className="m-0 p-0 text-secondary w-auto">
                            3 Stars
                          </p>
                        </div>
                        <div className="col-9 col-lg-10 m-0 p-0">
                          <div
                            className="progress m-0 p-0"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: "10px ",backgroundColor:'#D9D9D9' }}
                          >
                            <div
                              className="progress-bar rounded-2 "
                              style={{
                                width: "65%",
                                backgroundColor: "#49BBBD",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="row m-0 p-0 align-items-center mt-2">
                        <div className="col-3 col-lg-2 m-0 p-0">
                          <p className="m-0 p-0 text-secondary w-auto">
                            2 Stars
                          </p>
                        </div>
                        <div className="col-9 col-lg-10 m-0 p-0">
                          <div
                            className="progress m-0 p-0"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: "10px ",backgroundColor:'#D9D9D9' }}
                          >
                            <div
                              className="progress-bar rounded-2 "
                              style={{
                                width: "65%",
                                backgroundColor: "#49BBBD",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="row m-0 p-0 align-items-center mt-2">
                        <div className="col-3 col-lg-2 m-0 p-0">
                          <p className="m-0 p-0 text-secondary w-auto">
                            1 Stars
                          </p>
                        </div>
                        <div className="col-9 col-lg-10 m-0 p-0">
                          <div
                            className="progress m-0 p-0"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: "10px ",backgroundColor:'#D9D9D9' }}
                          >
                            <div
                              className="progress-bar rounded-2 "
                              style={{
                                width: "65%",
                                backgroundColor: "#49BBBD",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**reviews list */}
                  <div className="review-list row m-0 p-0 mt-4">
                    <div className="row m-0 p-0 mt-2 mb-2 border border-2 border-top-0 border-start-0 border-end-0 pb-3">
                      <div className="row m-0 p-0 justify-content-between align-items-end">
                        <div className="row m-0 p-0 w-auto">
                          <div
                            className=" rounded-circle overflow-hidden w-auto m-0 p-0"
                            style={{ backgroundColor: "#D9D9D9" }}
                          >
                            <img
                              src={profileImage}
                              alt="instructor image"
                              className="instructorImg  rounded-circle"
                            />
                          </div>
                          <div className="w-auto">
                            <p className="m-0 p-0 fw-medium w-auto">Lina</p>
                            <div className="row m-0 p-0">
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                            </div>
                          </div>
                        </div>
                        <div className="row m-0 p-0 w-auto">
                          <i className="bi bi-stopwatch text-secondary w-auto"></i>
                          <p className="w-auto text-secondary m-0 p-0">
                            3 Month
                          </p>
                        </div>
                      </div>
                      <p className="m-0 p-0 text-secondary mt-3">
                        class, launched less than a year ago by Blackboard
                        co-founder Khaleel ahmad,integrates exclusively
                      </p>
                    </div>
                    <div className="row m-0 p-0 mt-2 mb-2 border border-2 border-top-0 border-start-0 border-end-0 pb-3">
                      <div className="row m-0 p-0 justify-content-between align-items-end">
                        <div className="row m-0 p-0 w-auto">
                          <div
                            className=" rounded-circle overflow-hidden w-auto m-0 p-0"
                            style={{ backgroundColor: "#D9D9D9" }}
                          >
                            <img
                              src={profileImage}
                              alt="instructor image"
                              className="instructorImg  rounded-circle"
                            />
                          </div>
                          <div className="w-auto">
                            <p className="m-0 p-0 fw-medium w-auto">Lina</p>
                            <div className="row m-0 p-0">
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                            </div>
                          </div>
                        </div>
                        <div className="row m-0 p-0 w-auto">
                          <i className="bi bi-stopwatch text-secondary w-auto"></i>
                          <p className="w-auto text-secondary m-0 p-0">
                            3 Month
                          </p>
                        </div>
                      </div>
                      <p className="m-0 p-0 text-secondary mt-3">
                        Great clarity in explanations and thoroughly enjoyed the
                        course. I had been working out for quite a while, but a
                        few little things we might miss out from a diet
                        perspective are covered well in detail here. Especially
                        loved how you structured the entire focus area of
                        dieting into most important ones to lesser ones.
                      </p>
                    </div>
                    <div className="row m-0 p-0 mt-2 mb-2 border border-2 border-top-0 border-start-0 border-end-0 pb-3">
                      <div className="row m-0 p-0 justify-content-between align-items-end">
                        <div className="row m-0 p-0 w-auto">
                          <div
                            className=" rounded-circle overflow-hidden w-auto m-0 p-0"
                            style={{ backgroundColor: "#D9D9D9" }}
                          >
                            <img
                              src={profileImage}
                              alt="instructor image"
                              className="instructorImg  rounded-circle"
                            />
                          </div>
                          <div className="w-auto">
                            <p className="m-0 p-0 fw-medium w-auto">Lina</p>
                            <div className="row m-0 p-0">
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                            </div>
                          </div>
                        </div>
                        <div className="row m-0 p-0 w-auto">
                          <i className="bi bi-stopwatch text-secondary w-auto"></i>
                          <p className="w-auto text-secondary m-0 p-0">
                            3 Month
                          </p>
                        </div>
                      </div>
                      <p className="m-0 p-0 text-secondary mt-3">
                        class, launched less than a year ago by Blackboard
                        co-founder Khaleel ahmad,integrates exclusively
                      </p>
                    </div>
                    <div className="row m-0 p-0 mt-2 mb-2 border border-2 border-top-0 border-start-0 border-end-0 pb-3">
                      <div className="row m-0 p-0 justify-content-between align-items-end">
                        <div className="row m-0 p-0 w-auto">
                          <div
                            className=" rounded-circle overflow-hidden w-auto m-0 p-0"
                            style={{ backgroundColor: "#D9D9D9" }}
                          >
                            <img
                              src={profileImage}
                              alt="instructor image"
                              className="instructorImg  rounded-circle"
                            />
                          </div>
                          <div className="w-auto">
                            <p className="m-0 p-0 fw-medium w-auto">Lina</p>
                            <div className="row m-0 p-0">
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                            </div>
                          </div>
                        </div>
                        <div className="row m-0 p-0 w-auto">
                          <i className="bi bi-stopwatch text-secondary w-auto"></i>
                          <p className="w-auto text-secondary m-0 p-0">
                            3 Month
                          </p>
                        </div>
                      </div>
                      <p className="m-0 p-0 text-secondary mt-3">
                        class, launched less than a year ago by Blackboard
                        co-founder Khaleel ahmad,integrates exclusively
                      </p>
                    </div>
                    <div className="row m-0 p-0 mt-2 mb-2 border border-2 border-top-0 border-start-0 border-end-0 pb-3">
                      <div className="row m-0 p-0 justify-content-between align-items-end">
                        <div className="row m-0 p-0 w-auto">
                          <div
                            className=" rounded-circle overflow-hidden w-auto m-0 p-0"
                            style={{ backgroundColor: "#D9D9D9" }}
                          >
                            <img
                              src={profileImage}
                              alt="instructor image"
                              className="instructorImg  rounded-circle"
                            />
                          </div>
                          <div className="w-auto">
                            <p className="m-0 p-0 fw-medium w-auto">Lina</p>
                            <div className="row m-0 p-0">
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                            </div>
                          </div>
                        </div>
                        <div className="row m-0 p-0 w-auto">
                          <i className="bi bi-stopwatch text-secondary w-auto"></i>
                          <p className="w-auto text-secondary m-0 p-0">
                            3 Month
                          </p>
                        </div>
                      </div>
                      <p className="m-0 p-0 text-secondary mt-3">
                        class, launched less than a year ago by Blackboard
                        co-founder Khaleel ahmad,integrates exclusively
                      </p>
                    </div>
                    <div className="row m-0 p-0 mt-2 mb-2 border border-2 border-top-0 border-start-0 border-end-0 pb-3">
                      <div className="row m-0 p-0 justify-content-between align-items-end">
                        <div className="row m-0 p-0 w-auto">
                          <div
                            className=" rounded-circle overflow-hidden w-auto m-0 p-0"
                            style={{ backgroundColor: "#D9D9D9" }}
                          >
                            <img
                              src={profileImage}
                              alt="instructor image"
                              className="instructorImg  rounded-circle"
                            />
                          </div>
                          <div className="w-auto">
                            <p className="m-0 p-0 fw-medium w-auto">Lina</p>
                            <div className="row m-0 p-0">
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                            </div>
                          </div>
                        </div>
                        <div className="row m-0 p-0 w-auto">
                          <i className="bi bi-stopwatch text-secondary w-auto"></i>
                          <p className="w-auto text-secondary m-0 p-0">
                            3 Month
                          </p>
                        </div>
                      </div>
                      <p className="m-0 p-0 text-secondary mt-3">
                        class, launched less than a year ago by Blackboard
                        co-founder Khaleel ahmad,integrates exclusively
                      </p>
                    </div>
                    <div className="row m-0 p-0 mt-2 mb-2 border border-2 border-top-0 border-start-0 border-end-0 pb-3">
                      <div className="row m-0 p-0 justify-content-between align-items-end">
                        <div className="row m-0 p-0 w-auto">
                          <div
                            className=" rounded-circle overflow-hidden w-auto m-0 p-0"
                            style={{ backgroundColor: "#D9D9D9" }}
                          >
                            <img
                              src={profileImage}
                              alt="instructor image"
                              className="instructorImg  rounded-circle"
                            />
                          </div>
                          <div className="w-auto">
                            <p className="m-0 p-0 fw-medium w-auto">Lina</p>
                            <div className="row m-0 p-0">
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                            </div>
                          </div>
                        </div>
                        <div className="row m-0 p-0 w-auto">
                          <i className="bi bi-stopwatch text-secondary w-auto"></i>
                          <p className="w-auto text-secondary m-0 p-0">
                            3 Month
                          </p>
                        </div>
                      </div>
                      <p className="m-0 p-0 text-secondary mt-3">
                        class, launched less than a year ago by Blackboard
                        co-founder Khaleel ahmad,integrates exclusively
                      </p>
                    </div>
                    <div className="row m-0 p-0 mt-2 mb-2 border border-2 border-top-0 border-start-0 border-end-0 pb-3">
                      <div className="row m-0 p-0 justify-content-between align-items-end">
                        <div className="row m-0 p-0 w-auto">
                          <div
                            className=" rounded-circle overflow-hidden w-auto m-0 p-0"
                            style={{ backgroundColor: "#D9D9D9" }}
                          >
                            <img
                              src={profileImage}
                              alt="instructor image"
                              className="instructorImg  rounded-circle"
                            />
                          </div>
                          <div className="w-auto">
                            <p className="m-0 p-0 fw-medium w-auto">Lina</p>
                            <div className="row m-0 p-0">
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                              <i className="bi bi-star-fill w-auto text-warning m-0 p-0 pe-2"></i>
                            </div>
                          </div>
                        </div>
                        <div className="row m-0 p-0 w-auto">
                          <i className="bi bi-stopwatch text-secondary w-auto"></i>
                          <p className="w-auto text-secondary m-0 p-0">
                            3 Month
                          </p>
                        </div>
                      </div>
                      <p className="m-0 p-0 text-secondary mt-3">
                        class, launched less than a year ago by Blackboard
                        co-founder Khaleel ahmad,integrates exclusively
                      </p>
                    </div>
                  </div>

                 </div>
                  {/**write a reiview */}
                  <button className="add-review-btn btn text-light w-auto mt-3"><i className="w-auto text-light bi bi-star"></i> Write a review</button>
                
              </div>
            )}
          </div>
          <div className="col-lg-3 pe-lg-0 p-0 p-lg-2 pt-lg-0">
            <div className="card overflow-hidden me-0 mt-4 mt-lg-0">
              <div className="upper p-4 bg-light border border-1 border-bottom-1 border-top-0 border-start-0 border-end-0">
                <h4 className="m-0 p-0">Free</h4>
                <button className="btn btn-active w-100 mt-4">
                  Enroll now
                </button>
                <p className="m-0 p-0 text-secondary text-center mt-3">
                  Free access this course
                </p>
              </div>
              <div className="lower m-0 p-4">
                <div className="row m-0 p-0 mt-2">
                  <i className="bi bi-bar-chart m-0 p-0 w-auto"></i>
                  <p className="m-0 p-0 ms-2 w-auto">Beginner</p>
                </div>
                <div className="row m-0 p-0 mt-2">
                  <i className="bi bi-mortarboard m-0 p-0 w-auto"></i>
                  <p className="m-0 p-0 ms-2 w-auto">87 Total Enrolled</p>
                </div>
                <div className="row m-0 p-0 mt-2">
                  <i className="bi bi-stopwatch m-0 p-0 w-auto"></i>
                  <p className="m-0 p-0 ms-2 w-auto">
                    15 hours 20 minutes Duration
                  </p>
                </div>
                <div className="row m-0 p-0 mt-2">
                  <i className="bi bi-arrow-clockwise m-0 p-0 w-auto"></i>
                  <p className="m-0 p-0 ms-2 w-auto">
                    April 20,2024 Last Updated
                  </p>
                </div>
              </div>
            </div>

            <div className="card me-0 mt-5">
              <div className="upper p-4 border border-1 border-top-0 border-start-0 border-end-0">
                <p className="m-0 p-0 fs-5">A course by</p>
                <div className="row m-0 p-0 align-items-center w-auto mt-2">
                  <div
                    className=" rounded-circle overflow-hidden w-auto m-0 p-0"
                    style={{ backgroundColor: "#D9D9D9" }}
                  >
                    <img
                      src={InstructorImg}
                      alt="instructor image"
                      className="instructorImg  rounded-circle"
                    />
                  </div>
                  <p className=" text-decoration-none  m-0 p-0 ps-2 w-auto fw-medium">
                    Dr. Omar Ahmad
                  </p>
                </div>
              </div>
              <div className="lower p-4">
                {/**Material includes */}
                <h5 className="m-0 p-0 mb-4">Material includes</h5>
                <div className="row m-0 p-0 align-items-center mt-2">
                  <span className="dot bg-secondary  rounded-circle p-0 m-0"></span>
                  <p className="m-0 p-0 w-auto ps-2">
                    15.5 hours on-demand video
                  </p>
                </div>
                <div className="row m-0 p-0 align-items-center mt-2">
                  <span className="dot bg-secondary  rounded-circle p-0 m-0"></span>
                  <p className="m-0 p-0 w-auto ps-2">7 articles</p>
                </div>
                <div className="row m-0 p-0 align-items-center mt-2">
                  <span className="dot bg-secondary  rounded-circle p-0 m-0"></span>
                  <p className="m-0 p-0 w-auto ps-2">
                    22 downloadable resources
                  </p>
                </div>
                <div className="row m-0 p-0 align-items-center mt-2">
                  <span className="dot bg-secondary  rounded-circle p-0 m-0"></span>
                  <p className="m-0 p-0 w-auto ps-2">Full lifetime access</p>
                </div>
                <div className="row m-0 p-0 align-items-center mt-2">
                  <span className="dot bg-secondary  rounded-circle p-0 m-0"></span>
                  <p className="m-0 p-0 w-auto ps-2">Access on mobile and TV</p>
                </div>
                <div className="row m-0 p-0 align-items-center mt-2">
                  <span className="dot bg-secondary  rounded-circle p-0 m-0"></span>
                  <p className="m-0 p-0 w-auto ps-2">
                    Certificate of Completion
                  </p>
                </div>

                {/**Requirements */}
                <h5 className="m-0 p-0 mb-4 mt-5">Requirements</h5>
                <div className="row m-0 p-0 align-items-center mt-2 ">
                  <span className="dot bg-secondary  rounded-circle p-0 m-0"></span>
                  <p className="m-0 p-0 w-auto ps-2"> Mac or PC or Mobile</p>
                </div>
                <div className="row m-0 p-0 align-items-center mt-2 ">
                  <span className="dot bg-secondary  rounded-circle p-0 m-0"></span>
                  <p className="m-0 p-0 w-auto ps-2">
                    Blender's physics engine
                  </p>
                </div>
                <div className="row m-0 p-0 align-items-center mt-2">
                  <span className="dot bg-secondary  rounded-circle p-0 m-0"></span>
                  <p className="m-0 p-0 w-auto ps-2">Principle of modeling</p>
                </div>

                {/**Tags */}
                <h5 className="m-0 p-0 mb-4 mt-5">Tags</h5>
                <button className="btn btn-transparent border border-1  me-2">
                  3D Modeling
                </button>
                <button className="btn btn-transparent border border-1 ms-2">
                  Blender
                </button>

                {/**Audience */}
                <h5 className="m-0 p-0 mb-3 mt-5">Audience</h5>
                <div className="row m-0 p-0 align-items-center mt-2 justify-content-between">
                  <div className="col-1 m-0 p-0">
                    <div className="dot bg-secondary  rounded-circle p-0 m-0"></div>
                  </div>
                  <div className="col-11 m-0 p-0">
                    <p className="m-0 p-0 ">
                      Competent and confident with using a computer
                    </p>
                  </div>
                </div>
                <div className="row m-0 p-0 align-items-center mt-2 justify-content-between">
                  <div className="col-1 m-0 p-0">
                    <div className="dot bg-secondary  rounded-circle p-0 m-0"></div>
                  </div>
                  <div className="col-11 m-0 p-0">
                    <p className="m-0 p-0 ">
                      Artists who want to learn to bring their assets alive.
                    </p>
                  </div>
                </div>
                <div className="row m-0 p-0 align-items-center mt-2 justify-content-between">
                  <div className="col-1 m-0 p-0">
                    <div className="dot bg-secondary  rounded-circle p-0 m-0"></div>
                  </div>
                  <div className="col-11 m-0 p-0">
                    <p className="m-0 p-0 ">
                      Game Developers who wish to expand their Skill Set
                    </p>
                  </div>
                </div>
                <div className="row m-0 p-0 align-items-center mt-2 justify-content-between">
                  <div className="col-1 m-0 p-0">
                    <div className="dot bg-secondary  rounded-circle p-0 m-0"></div>
                  </div>
                  <div className="col-11 m-0 p-0">
                    <p className="m-0 p-0 ">
                      Complete beginners who are willing to work hard{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
