import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import noData from "../../assets/images/noDataSvg.svg";
import VARIABLES from "../../../environmentVariables";
import ForumQuestionItem from "../../components/forumQuestionItem";

const QuestionAnswer = () => {
  const [answerTabBtn, setAnswerTabBtn] = useState(false);
  const [questionTabBtn, setQuestionTabBtn] = useState(true);
  const [answerList, setAnswerList] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const handleViewForumQuestionList = async () => {
    try {
      const response = await axios.post(
        `${VARIABLES.API_URL_REMOTE}/view-Forum-QuestionList-studentId`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 200) {
        setQuestionList(response.data.data.forumQuestion);
        setAnswerList(response.data.data.forumAnswer);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to view Forum");
    }
  };
  const handleTab = (e) => {
    if (e.currentTarget.id === "questionTab") {
      setQuestionTabBtn(true);
      setAnswerTabBtn(false);
    }
    if (e.currentTarget.id === "answerTab") {
      setQuestionTabBtn(false);
      setAnswerTabBtn(true);
    }
  };
  useEffect(() => {
    handleViewForumQuestionList();
  }, []);

  return (
    <div className="enrolled-courses  row m-0 p-0">
      <h5
        className="m-0 p-0 pb-3 mb-5 mt-4 border border-1 border-top-0 border-start-0 border-end-0 "
        style={{ color: "rgb(0, 203, 184)" }}
      >
        Question and Answer
      </h5>
      <div className="navtab row m-0 p-0 mt-3 border border-1 border-start-0 border-end-0 border-top-0 pb-3">
        <button
          className={`btn fw-medium w-auto ms-0 me-md-2 mt-2 mt-md-0 ${
            questionTabBtn ? "btn-active" : ""
          }`}
          id="questionTab"
          onClick={(e) => {
            handleTab(e);
          }}
        >
          Questions
        </button>

        <button
          className={`btn fw-medium w-auto ms-2 me-2 mt-2 mt-md-0 ${
            answerTabBtn ? "btn-active" : ""
          }`}
          id="answerTab"
          onClick={(e) => {
            handleTab(e);
          }}
        >
          Answers
        </button>
      </div>
      {questionTabBtn ? (
        questionList.length > 0 ? (
          Array.isArray(questionList) &&
          questionList.map((item) => (
            <div className="forumQuestion row m-0 p-0 mt-2 mb-2 ">
              <Link
                to={`/forum-details/${item._id}`}
                className="text-decoration-none p-0 m-0"
              >
                <div className="card p-3 m-0">
                  <h3 className="m-0 p-0">{item.question}</h3>
                  <div className="row m-0 p-0 mt-3">
                    {Array.isArray(item.tags) &&
                      item.tags.map((element) => (
                        <div className="badge-items w-auto rounded-1 ms-0 m-2">
                          <p className="m-0 p-1 fw-medium text-secondary">
                            {element}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="row m-0 p-0 align-items-center  justify-content-between ">
                    <div className="row col-8 m-0 p-0 align-items-center mt-2">
                      <i className="bi bi-hand-thumbs-up-fill p-0 m-0 text-secondary w-auto"></i>
                      <p className="vote w-auto m-0 p-0 ps-1">1338 Votes </p>
                      <i className="bi bi-chat-left-text-fill text-secondary w-auto"></i>
                      <p className="vote w-auto m-0 p-0">1144 Answers </p>
                    </div>
                    <div className="w-auto m-0 p-0 d-flex mt-4 mt-lg-0">
                      <div className="d-flex flex-column justify-content-end ">
                        {/* <p className="m-0 p-0 text-secondary w-auto">
                        {formattedUpdateTime}
                      </p> */}
                      </div>
                      <div
                        className=" rounded-circle overflow-hidden w-auto m-0 p-0 ms-2"
                        style={{ backgroundColor: "#D9D9D9" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="content row m-0 p-0 justify-content-center align-items-center pt-5">
            <img src={noData} alt="No Data" />
            <p className="m-0 p-0 text-center">No data available in wishlist</p>
          </div>
        )
      ) : answerList.length > 0 ? (
        Array.isArray(answerList) &&
        answerList.map((item) => (
          <div className="forumQuestion row m-0 p-0 mt-2 mb-2 ">
            <Link
              to={`/forum-details/${item._id}`}
              className="text-decoration-none p-0 m-0"
            >
              <div className="card p-3 m-0">
                <h3 className="m-0 p-0">{item.question}</h3>
                <div className="row m-0 p-0 mt-3">
                  {Array.isArray(item.tags) &&
                    item.tags.map((element) => (
                      <div className="badge-items w-auto rounded-1 ms-0 m-2">
                        <p className="m-0 p-1 fw-medium text-secondary">
                          {element}
                        </p>
                      </div>
                    ))}
                </div>
                <div className="row m-0 p-0 align-items-center  justify-content-between ">
                  <div className="row col-8 m-0 p-0 align-items-center mt-2">
                    <i className="bi bi-hand-thumbs-up-fill p-0 m-0 text-secondary w-auto"></i>
                    <p className="vote w-auto m-0 p-0 ps-1">1338 Votes </p>
                    <i className="bi bi-chat-left-text-fill text-secondary w-auto"></i>
                    <p className="vote w-auto m-0 p-0">1144 Answers </p>
                  </div>
                  <div className="w-auto m-0 p-0 d-flex mt-4 mt-lg-0">
                    <div className="d-flex flex-column justify-content-end ">
                      {/* <p className="m-0 p-0 text-secondary w-auto">
                          {formattedUpdateTime}
                        </p> */}
                    </div>
                    <div
                      className=" rounded-circle overflow-hidden w-auto m-0 p-0 ms-2"
                      style={{ backgroundColor: "#D9D9D9" }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="content row m-0 p-0 justify-content-center align-items-center pt-5">
          <img src={noData} alt="No Data" />
          <p className="m-0 p-0 text-center">No data available in wishlist</p>
        </div>
      )}
    </div>
  );
};

export default QuestionAnswer;
