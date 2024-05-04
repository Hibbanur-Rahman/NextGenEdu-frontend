import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import noData from "../../assets/images/noDataSvg.svg";
import VARIABLES from "../../../environmentVariables";
import CourseItems from "../../components/courseItem";

const Reviews = () => {
  const [reviewlist, setReviewlist] = useState([]);
  const [rating, setRating] = useState(1);
  const [reviewDetails, setReviewDetails] = useState({
    rating: rating,
    reviewText: "",
  });
  const handleViewReviewList = async () => {
    try {
      const response = await axios.post(
        `${VARIABLES.API_URL_REMOTE}/view-Review-list-studentId`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (response.data.success) {
        setReviewlist(response.data.data);
      } else {
        toast.error("Failed to view reviewlist");
      }
    } catch (error) {
      toast.error("Failed to view reviewlist");
      console.log(error);
    }
  };

  const handleEditReview = async (reviewId) => {
    try {
      const reviewText = reviewDetails.reviewText;
      const response = await axios.post(
        `${VARIABLES.API_URL_REMOTE}/edit-review-studentId`,
        { reviewId, reviewText, rating },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      console.log(response);
      if (response.status === 200) {
        toast.success("update successfully !!");
        
        handleViewReviewList();
      }
    } catch (error) {
      toast.error("Failed to edit review");
      console.log(error);
    }
  };

  const handleStarFill = (value) => {
    setRating(value);
    console.log(rating);
  };

  const handleReviewInputChange = (e) => {
    setReviewDetails({ ...reviewDetails, [e.target.name]: e.target.value });
  };

  const handleUpdateOpenModal = (item) => {
    handleStarFill(item.rating);
    setReviewDetails({ ...reviewDetails, reviewText: item.reviewText });
  };
  useEffect(() => {
    handleViewReviewList();
  }, []);
  return (
    <div className="row m-0 p-0">
      <h5
        className="m-0 p-0 pb-3 mb-5 mt-4 border border-1 border-top-0 border-start-0 border-end-0 "
        style={{ color: "rgb(0, 203, 184)" }}
      >
        Review list Courses
      </h5>
      {reviewlist.length > 0 ? (
        reviewlist.map((item) => (
          <div className="row m-0 mt-2 mb-3 p-0" key={item._id}>
            <div className="card m-0 p-0">
              <div className="row m-0 p-0 ps-3 pt-3 pb-3 border border-1 border-top-0 border-start-0 border-end-0">
                <h6 className="m-0 p-0">Course : {item.course.courseTitle}</h6>
              </div>
              <div className="row m-0 p-0 ps-3 pt-3 pb-3">
                <div className="col-md-9 col-6 m-0 p-0">
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={`bi bi-star-fill ${
                        index < item.rating ? "" : "bi-star"
                      } w-auto text-warning m-0 p-0 pe-2`}
                    ></i>
                  ))}
                </div>
                <div className="col-md-3 col-6 m-0 p-0 d-flex">
                  <i
                    className="bi bi-pencil-square w-auto text-secondary"
                    data-bs-toggle="modal"
                    data-bs-target={`#updateReviewModal-${item._id}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleUpdateOpenModal(item);
                    }}
                  ></i>
                  <p className="m-0 p-0 w-auto text-secondary ps-2">Edit</p>
                  <i className="bi bi-trash w-auto text-secondary ps-3"></i>
                  <p className="m-0 p-0 w-auto text-secondary ps-2">Delete</p>
                </div>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id={`updateReviewModal-${item._id}`}
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-3">
                      <div className="modal-header border-bottom-0">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <h4 className="m-0 p-0 text-center">
                          How would you rate this course?
                        </h4>
                        <p className="m-0 p-0 mt-3 mb-3 text-secondary text-center">
                          Select Rating
                        </p>
                        <div className="row m-0 p-0 justify-content-center ">
                          <i
                            className={`bi  ${
                              rating >= 1 ? "bi-star-fill" : "bi-star"
                            } w-auto text-warning m-0 p-0 pe-2 fs-1`}
                            onClick={() => {
                              handleStarFill(1);
                            }}
                            style={{ cursor: "pointer" }}
                          ></i>
                          <i
                            className={`bi ${
                              rating >= 2 ? "bi-star-fill" : "bi-star"
                            } w-auto text-warning m-0 p-0 pe-2 fs-1`}
                            onClick={() => {
                              handleStarFill(2);
                            }}
                            style={{ cursor: "pointer" }}
                          ></i>
                          <i
                            className={`bi ${
                              rating >= 3 ? "bi-star-fill" : "bi-star"
                            } w-auto text-warning m-0 p-0 pe-2 fs-1`}
                            onClick={() => {
                              handleStarFill(3);
                            }}
                            style={{ cursor: "pointer" }}
                          ></i>
                          <i
                            className={`bi ${
                              rating >= 4 ? "bi-star-fill" : "bi-star"
                            } w-auto text-warning m-0 p-0 pe-2 fs-1`}
                            onClick={() => {
                              handleStarFill(4);
                            }}
                            style={{ cursor: "pointer" }}
                          ></i>
                          <i
                            className={`bi ${
                              rating >= 5 ? "bi-star-fill" : "bi-star"
                            } w-auto text-warning m-0 p-0 pe-2 fs-1`}
                            onClick={() => {
                              handleStarFill(5);
                            }}
                            style={{ cursor: "pointer" }}
                          ></i>
                        </div>
                        <textarea
                          name="reviewText"
                          id="reviewText"
                          cols="30"
                          rows="8"
                          className="form-control mt-3"
                          placeholder="write a review"
                          onChange={handleReviewInputChange}
                          value={reviewDetails.reviewText}
                        ></textarea>
                      </div>
                      <div className="modal-footer border-top-0 justify-content-center ">
                        <button
                          type="button"
                          className="btn btn-transparent border border-1 border-primary-subtle "
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn text-light"
                          style={{ backgroundColor: "#49BBBD" }}
                          onClick={() => {
                            handleEditReview(item._id);
                          }}
                        >
                          Update Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="m-0 p-0 text-secondary ps-3 pb-3">
                {item.reviewText}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="content row m-0 p-0 justify-content-center align-items-center pt-5">
          <img src={noData} alt="No Data" />
          <p className="m-0 p-0 text-center">No data available in reviewlist</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
