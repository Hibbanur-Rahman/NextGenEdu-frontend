import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { toast } from "react-toastify";
import VARIABLES from "../../../environmentVariables";

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [aboutCourse, setAboutCourse] = useState("");
  const [learnItems, setLearnItems] = useState([""]); // Initialize with an empty string
  const [materialIncludesItems, setMaterialIncludesItems] = useState([""]); // Initialize with an empty string
  const [requirementItems, setRequirementItems] = useState([""]); // Initialize with an empty string
  const [tagItems, setTagItems] = useState([""]); // Initialize with an empty string
  const [audienceItems, setAudienceItems] = useState([""]); // Initialize with an empty string

  const [courseDetails, setCourseDetails] = useState({
    courseTitle,
    courseCategory,
    videoLink,
    aboutCourse,
    learnItems: [""],
    materialIncludesItems: [""],
    requirementItems: [""],
    tagItems: [""],
    audienceItems: [""],
  });

  const handleLearnItemChange = (index, value) => {
    const updatedItems = [...learnItems];
    updatedItems[index] = value;
    setLearnItems(updatedItems);
    setCourseDetails({ ...courseDetails, learnItems });
  };
  const handleAddLearnItem = () => {
    setLearnItems([...learnItems, ""]); // Add an empty string when clicking the "Add" button
  };

  const handleMaterialIncludeItemChange = (index, value) => {
    const updatedItems = [...materialIncludesItems];
    updatedItems[index] = value;
    setMaterialIncludesItems(updatedItems);
    setCourseDetails({ ...courseDetails, materialIncludesItems });
  };
  const handleAddMaterialIncludeItem = () => {
    setMaterialIncludesItems([...materialIncludesItems, ""]);
  };

  const handleRequirementItemChange = (index, value) => {
    const updatedItems = [...requirementItems];
    updatedItems[index] = value;
    setRequirementItems(updatedItems);
    setCourseDetails({ ...courseDetails, requirementItems });
  };
  const handleAddRequirementItem = () => {
    setRequirementItems([...requirementItems, ""]);
  };

  const handleTagItemChange = (index, value) => {
    const updatedItems = [...tagItems];
    updatedItems[index] = value;
    setTagItems(updatedItems);
    setCourseDetails({ ...courseDetails, tagItems });
  };
  const handleAddTagItem = () => {
    setTagItems([...tagItems, ""]);
  };

  const handleAudienceItemChange = (index, value) => {
    const updatedItems = [...audienceItems];
    updatedItems[index] = value;
    setAudienceItems(updatedItems);
    setCourseDetails({ ...courseDetails, audienceItems });
  };
  const handleAddAudienceItem = () => {
    setAudienceItems([...audienceItems, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${VARIABLES.API_URL_REMOTE}/add-course`,
        {
          courseDetails,
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if(response.status===201){
        toast.success("course added successfully!!");
        setCourseDetails({
          courseTitle,
          courseCategory,
          videoLink,
          aboutCourse,
          learnItems: [""],
          materialIncludesItems: [""],
          requirementItems: [""],
          tagItems: [""],
          audienceItems: [""],
        })
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add course");
    }
  };
  useEffect(() => {
    setCourseDetails({ ...courseDetails, aboutCourse });
    setCourseDetails({ ...courseDetails, learnItems });
    setCourseDetails({ ...courseDetails, materialIncludesItems });
    setCourseDetails({ ...courseDetails, requirementItems });
    setCourseDetails({ ...courseDetails, audienceItems });
    setCourseDetails({ ...courseDetails, tagItems });
    setCourseDetails({...courseDetails,videoLink});
    setCourseDetails({...courseDetails,courseTitle});
    setCourseDetails({...courseDetails,courseCategory});
  }, [aboutCourse,learnItems,materialIncludesItems,requirementItems,tagItems,courseCategory,courseTitle,videoLink,audienceItems]);

  return (
    <div className="add-course accountdetails row card m-0 p-3 mt-3 mb-3">
      <div className="row m-0 p-0">
        <form
          action=""
          method="post"
          className="m-0 p-0 mt-4"
          onSubmit={handleSubmit}
        >
          {/* Course details */}
          <div className="row m-0 p-0 mt-5 mt-lg-0">
            {/* Course Title */}
            <h4 className="m-0 p-0 border border-1 border-top-0 border-start-0 border-end-0 pb-3 mb-4">
              Course Title
            </h4>
            {/* Course Title Input */}
            <div className="input-field col-lg-12 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative ">
              <label
                htmlFor="course"
                className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
              >
                Course Title
              </label>
              <input
                type="text"
                className="border border-1 rounded-2 p-2 ps-3 m-0"
                id="course"
                name="course"
                placeholder="Perfect Diet & Meal Plan-Complete Course"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
              />
            </div>
            {/* Course Category */}
            <div className="input-field col-lg-6 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative ">
              <label
                htmlFor="courseCategory"
                className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
              >
                Course Category
              </label>
              <input
                type="text"
                className="border border-1 rounded-2 p-2 ps-3 m-0"
                id="courseCategory"
                name="courseCategory"
                placeholder="Featured, Health & Fitness"
                value={courseCategory}
                onChange={(e) => setCourseCategory(e.target.value)}
              />
            </div>
            {/* Video Link */}
            <div className="input-field col-lg-6 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative ">
              <label
                htmlFor="videoLink"
                className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
              >
                Video Link
              </label>
              <input
                type="text"
                className="border border-1 rounded-2 p-2 ps-3 m-0"
                id="videoLink"
                name="videoLink"
                placeholder="https://www.youtube.com/watch?v=W4O98sbGpMc"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
              />
            </div>
          </div>

          {/* Course Info- about course */}
          <div className="row m-0 p-0 mt-5 pt-4 mt-lg-0">
            <h4 className="m-0 p-0 border border-1 border-top-0 border-start-0 border-end-0 pb-3 mb-4">
              About Course
            </h4>
            <div className="row m-0 p-0 mb-5">
              <ReactQuill
                theme="snow"
                value={aboutCourse}
                onChange={setAboutCourse}
                className="m-0 p-0"
              />
            </div>
          </div>

          {/* What will you learn */}
          <div className="row m-0 p-0 mt-5 pt-4 mt-lg-0">
            <h4 className="m-0 p-0 border border-1 border-top-0 border-start-0 border-end-0 pb-3 mb-4">
              What will you learn
            </h4>
            {/* Learn Item Inputs */}
            {learnItems.map((item, index) => (
              <div
                key={index}
                className="input-field col-lg-12 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative"
              >
                <label
                  htmlFor={`whatWillYouLearn-${index}`}
                  className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                >
                  Title details
                </label>
                <input
                  type="text"
                  className="border border-1 rounded-2 p-2 ps-3 m-0"
                  id={`whatWillYouLearn-${index}`}
                  name={`whatWillYouLearn-${index}`}
                  placeholder="Understanding the fundamentals of healthy deiting(calories,protein,carbs,fat,vitamins & minerals)"
                  value={item}
                  onChange={(e) => handleLearnItemChange(index, e.target.value)}
                />
              </div>
            ))}
            {/* Add Learn Item Button */}
            <button
              type="button"
              className="addLearnBtn btn w-auto"
              onClick={handleAddLearnItem}
            >
              +
            </button>
          </div>

          {/* Material Includes*/}
          <div className="row m-0 p-0 mt-5 pt-4 mt-lg-0">
            <h4 className="m-0 p-0 border border-1 border-top-0 border-start-0 border-end-0 pb-3 mb-4">
              Materials Include
            </h4>
            {/* Materials include Item Inputs */}
            {materialIncludesItems.map((item, index) => (
              <div
                key={index}
                className="input-field col-lg-12 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative"
              >
                <label
                  htmlFor={`materialIncludesItem-${index}`}
                  className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                >
                  Title details
                </label>
                <input
                  type="text"
                  className="border border-1 rounded-2 p-2 ps-3 m-0"
                  id={`materialIncludesItem-${index}`}
                  name={`materialIncludesItem-${index}`}
                  placeholder="15.5 hours on-demand video"
                  value={item}
                  onChange={(e) =>
                    handleMaterialIncludeItemChange(index, e.target.value)
                  }
                />
              </div>
            ))}
            {/* Add Learn Item Button */}
            <button
              type="button"
              className="addLearnBtn btn w-auto"
              onClick={handleAddMaterialIncludeItem}
            >
              +
            </button>
          </div>

          {/* Requirements*/}
          <div className="row m-0 p-0 mt-5 pt-4 mt-lg-0">
            <h4 className="m-0 p-0 border border-1 border-top-0 border-start-0 border-end-0 pb-3 mb-4">
              Requirements
            </h4>
            {/* Requirements Item Inputs */}
            {requirementItems.map((item, index) => (
              <div
                key={index}
                className="input-field col-lg-12 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative"
              >
                <label
                  htmlFor={`requirementItem-${index}`}
                  className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                >
                  Title details
                </label>
                <input
                  type="text"
                  className="border border-1 rounded-2 p-2 ps-3 m-0"
                  id={`requirementItem-${index}`}
                  name={`requirementItem-${index}`}
                  placeholder="Mac or PC or Mobile"
                  value={item}
                  onChange={(e) =>
                    handleRequirementItemChange(index, e.target.value)
                  }
                />
              </div>
            ))}
            {/* Add Learn Item Button */}
            <button
              type="button"
              className="addLearnBtn btn w-auto"
              onClick={handleAddRequirementItem}
            >
              +
            </button>
          </div>

          {/* Tags*/}
          <div className="row m-0 p-0 mt-5 pt-4 mt-lg-0">
            <h4 className="m-0 p-0 border border-1 border-top-0 border-start-0 border-end-0 pb-3 mb-4">
              Tags
            </h4>

            <div className="row m-0 p-0">
              {/* Tags Item Inputs */}
              {tagItems.map((item, index) => (
                <div
                  key={index}
                  className="input-field col-lg-6 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative"
                >
                  <label
                    htmlFor={`tagItem-${index}`}
                    className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                  >
                    Title details
                  </label>
                  <input
                    type="text"
                    className="border  border-1 rounded-2 p-2 ps-3 m-0"
                    id={`tagItem-${index}`}
                    name={`tagItem-${index}`}
                    placeholder="3D"
                    value={item}
                    onChange={(e) => handleTagItemChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>

            {/* Add Learn Item Button */}
            <button
              type="button"
              className="addLearnBtn btn w-auto"
              onClick={handleAddTagItem}
            >
              +
            </button>
          </div>

          {/* Audience*/}
          <div className="row m-0 p-0 mt-5 pt-4 mt-lg-0">
            <h4 className="m-0 p-0 border border-1 border-top-0 border-start-0 border-end-0 pb-3 mb-4">
              Audience
            </h4>
            {/* Audience Item Inputs */}
            {audienceItems.map((item, index) => (
              <div
                key={index}
                className="input-field col-lg-12 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative"
              >
                <label
                  htmlFor={`audienceItem-${index}`}
                  className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                >
                  Title details
                </label>
                <input
                  type="text"
                  className="border border-1 rounded-2 p-2 ps-3 m-0"
                  id={`audienceItem-${index}`}
                  name={`audienceItem-${index}`}
                  placeholder="Competent and confident with using a computer"
                  value={item}
                  onChange={(e) =>
                    handleAudienceItemChange(index, e.target.value)
                  }
                />
              </div>
            ))}
            {/* Add Learn Item Button */}
            <button
              type="button"
              className="addLearnBtn btn w-auto"
              onClick={handleAddAudienceItem}
            >
              +
            </button>
          </div>

          <div className="row m-0 p-0 justify-content-start">
            {/* Submit Button */}
            <button type="submit" className="btn mt-4 w-auto">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
