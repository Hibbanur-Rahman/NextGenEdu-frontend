import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import noData from "../../assets/images/noDataSvg.svg";
import VARIABLES from "../../../environmentVariables";
import CourseItems from "../../components/courseItem";

const Reviews = () => {
  const [reviewlist, setReviewlist] = useState([]);

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

  const handleEditReview=async(e)=>{
    try{
        const response=await axios.post(`${VARIABLES.API_URL_REMOTE}/edit-review-`)

    }catch(error){
        toast.error("Failed to edit review");
        console.log(error);
    }
  }

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
         
          <div className="row m-0 mt-2 mb-3 p-0">
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
                  <i className="bi bi-pencil-square w-auto text-secondary" onClick={handleEditReview}></i>
                  <p className="m-0 p-0 w-auto text-secondary ps-2">Edit</p>
                  <i className="bi bi-trash w-auto text-secondary ps-3"></i>
                  <p className="m-0 p-0 w-auto text-secondary ps-2">Delete</p>
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
