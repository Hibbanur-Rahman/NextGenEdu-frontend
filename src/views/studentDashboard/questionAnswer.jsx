import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import noData from "../../assets/images/noDataSvg.svg";
import VARIABLES from "../../../environmentVariables";
import ForumQuestionItem from "../../components/forumQuestionItem";
import DeleteSvg from "../../assets/images/delete.svg";
const QuestionAnswer = () => {
  const [answerTabBtn, setAnswerTabBtn] = useState(false);
  const [questionTabBtn, setQuestionTabBtn] = useState(true);
  const [answerList, setAnswerList] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [questionDetails, setQuestionDetails] = useState({
    question: "",
    description: "",
    tags: "",
  });
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
  const handleDeleteQuestion = async (item) => {
    try {
      const response = await axios.post("/delete-question-studentId");
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateQuestion = async () => {
    try {
    } catch (error) {
      console.log(error);
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
  const handleInputChange = (e) => {
    setQuestionDetails({ ...questionDetails, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    handleViewForumQuestionList();
  }, []);

  return (
    <div className="enrolled-courses  row m-0 p-0">
      <h5 className="m-0 p-0 pb-3 mt-4  " style={{ color: "rgb(0, 203, 184)" }}>
        Question and Answer
      </h5>
      <div className="navtab row m-0 p-0 mt-3 mb-3 border border-1 border-start-0 border-end-0 border-top-0 pb-3">
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
              <div className="card p-3 m-0">
                <Link
                  to={`/forum-details/${item._id}`}
                  className="text-decoration-none p-0 m-0 text-dark"
                >
                  <h3 className="m-0 p-0">{item.question}</h3>
                </Link>
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
                  <div className="row col-6 m-0 p-0 align-items-center mt-2">
                    <i className="bi bi-hand-thumbs-up-fill p-0 m-0 text-secondary w-auto"></i>
                    <p className="vote w-auto m-0 p-0 ps-1">1338 Votes </p>
                    <i className="bi bi-chat-left-text-fill text-secondary w-auto"></i>
                    <p className="vote w-auto m-0 p-0">1144 Answers </p>
                  </div>
                  <div className="w-auto m-0 p-0 d-flex mt-4 mt-lg-0">
                    <div className="col-md-3 col-6 m-0 p-0 d-flex">
                      <i
                        className="bi bi-pencil-square w-auto text-secondary"
                        data-bs-toggle="modal"
                        data-bs-target={`#updateQuestionModal-${item._id}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleUpdateOpenModal(item);
                        }}
                      ></i>
                      <p className=" edit m-0 p-0 w-auto text-secondary ps-2">
                        Edit
                      </p>
                      <i
                        className="bi bi-trash w-auto text-secondary ps-3"
                        data-bs-toggle="modal"
                        data-bs-target={`#deleteQuestionModal-${item._id}`}
                        style={{ cursor: "pointer" }}
                      ></i>
                      <p className="m-0 p-0 w-auto text-secondary ps-2">
                        Delete
                      </p>
                    </div>
                    <div
                      className=" rounded-circle overflow-hidden w-auto m-0 p-0 ms-2"
                      style={{ backgroundColor: "#D9D9D9" }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* <!-- update Review Modal --> */}
              <div
                className="modal fade"
                id={`updateQuestionModal-${item._id}`}
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
                      <div className="card m-0 p-0 p-3 mt-4">
                        <form
                          action="/add-question"
                          onSubmit={handleAddQuestion}
                          method="post"
                        >
                          <div className="question-form col-lg-12 row m-0 p-0  mb-3 mt-3 position-relative ">
                            <label
                              htmlFor="question"
                              className="m-0 p-0 mb-2 text-secondary  w-auto pe-2 fs-5 fw-medium"
                            >
                              Your question
                            </label>
                            <input
                              type="text"
                              className="border border-1 rounded-2 p-2 ps-3 m-0"
                              id="question"
                              name="question"
                              placeholder="What would you like to know?"
                              onChange={handleInputChange}
                              value={questionDetails.question}
                              required
                            />
                            <p className="m-0 p-0 text-secondary mt-2">
                              Tip: write as if asking a friend, being as
                              specific as possible
                            </p>
                          </div>
                          <div className="question-form col-lg-12 row m-0 p-0  mb-3 mt-3 position-relative ">
                            <label
                              htmlFor="description"
                              className="m-0 p-0 mb-2 text-secondary  w-auto pe-2 fs-5 fw-medium"
                            >
                              Description
                            </label>
                            <textarea
                              type="text"
                              className="border border-1 rounded-2 p-2 ps-3 m-0 h-auto"
                              id="description"
                              name="description"
                              value={questionDetails.description}
                              placeholder="Include as much detail as possible to get most relevant answers"
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="question-form col-lg-12 row m-0 p-0  mb-3 mt-3 position-relative ">
                            <label
                              htmlFor="tags"
                              className="m-0 p-0 mb-2 text-secondary  w-auto pe-2 fs-5 fw-medium"
                            >
                              Tags
                            </label>
                            <input
                              type="text"
                              className="border border-1 rounded-2 p-2 ps-3 m-0"
                              id="tags"
                              name="tags"
                              placeholder="Start Typing to add tags.."
                              onChange={handleInputChange}
                              value={questionDetails.tags}
                              required
                            />
                            <p className="m-0 p-0 text-secondary mt-2">
                              You can add up to 10 tags
                            </p>
                          </div>
                          <div className="row m-0 p-0 justify-content-end mt-3 mb-3">
                            <button
                              type="button"
                              className="btn btn-transparent w-auto border border-1 border-primary-subtle "
                              data-bs-dismiss='modal'
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="btn text-light w-auto ms-3"
                              style={{ backgroundColor: "#49BBBD" }}
                              onClick={handleAddQuestion}
                            >
                              Post question
                            </button>
                          </div>
                        </form>
                        {/* <!-- Successful Added question Modal --> */}
                        <div
                          className="modal fade"
                          id="successfulModal"
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
                                <div className="row m-0 p-0 justify-content-center ">
                                  <img
                                    src={successfulImg}
                                    alt=""
                                    className=""
                                    style={{ height: "150px", width: "150px" }}
                                  />
                                </div>

                                <h3 className="m-0 p-0 text-center mt-3">
                                  You successfully posted your question!
                                </h3>
                                <p className="m-0 p-0 text-secondary text-center mt-3 mb-3">
                                  while you wait for the answers,feel free to
                                  browse other questions
                                </p>
                              </div>
                              <div className="modal-footer border-top-0 justify-content-center ">
                                <button
                                  type="button"
                                  className="btn text-light"
                                  data-bs-dismiss="modal"
                                  style={{ backgroundColor: "#49BBBD" }}
                                >
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                          handleUpdateQuestion(item._id);
                        }}
                      >
                        Update Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Delete Review Modal --> */}
              <div
                className="modal fade"
                id={`deleteQuestionModal-${item._id}`}
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
                      <div className="row m-0 p-0 justify-content-center ">
                        <img
                          src={DeleteSvg}
                          alt=""
                          className=""
                          style={{ height: "150px", width: "150px" }}
                        />
                      </div>

                      <h3 className="m-0 p-0 text-center mt-3">
                        Do You Want to Delete This Review?
                      </h3>
                      <p className="m-0 p-0 text-secondary text-center mt-3 mb-3">
                        Are you sure want to delete this review permanently from
                        the site? please confirm your choice
                      </p>
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
                          handleDeleteQuestion(item._id);
                        }}
                      >
                        Yes, Delete This
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
