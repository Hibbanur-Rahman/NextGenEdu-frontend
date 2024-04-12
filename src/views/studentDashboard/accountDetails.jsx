import { useState, useRef } from "react";
import profilePhoto from '../../assets/images/hibban-photo.jpg';

const AccountDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // Function to handle file input change event
  const handleImageChange = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  // Function to handle "Change Image" button click
  const handleChangeImageButtonClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle image upload
  const handleImageUpload = () => {
    if (selectedImage) {
      // Add your image upload logic here
      console.log("Selected image:", selectedImage);
    }
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="accountdetails row card m-0 p-3 mt-3 mb-3">
      <div className="row m-0 p-0">
        <h4 className="m-0 p-0 border border-1 border-top-0 border-start-0 border-end-0 pb-3">
          Generals
        </h4>

        <form action=""  method='post' className="m-0 p-0 mt-4" onSubmit={handleSubmit}>
          <div className="row m-0 p-0">
            <div className="col-lg-9 m-0 p-0">
              <div className="row m-0 p-0">
                <div className="input-feild col-lg-6 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative ">
                  <label
                    htmlFor="firstname"
                    className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    className="border border-1 rounded-2 p-2 ps-3 m-0"
                    id="firstname"
                    name='firstname'
                    value='Hibbanur'
                  />
                </div>
                <div className="input-feild col-lg-6 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative ">
                  <label
                    htmlFor="lastname"
                    className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    className="border border-1 rounded-2 p-2 ps-3 m-0"
                    id="lastname"
                    name='lastname'
                    value='Rahman'
                  />
                </div>
                <div className="input-feild col-lg-6 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative ">
                  <label
                    htmlFor="email"
                    className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="border border-1 rounded-2 p-2 ps-3 m-0"
                    id="email"
                    name='email'
                    value='hibbanrahmanhyt@gmail.com'
                  />
                </div>
                <div className="input-feild col-lg-6 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative ">
                  <label
                    htmlFor="phone"
                    className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                  >
                    Phone no.
                  </label>
                  <input
                    type="text"
                    className="border border-1 rounded-2 p-2 ps-3 m-0"
                    id="phone"
                    name='phone'
                    value='+91-9973152523'
                  />
                </div>
                <div className="input-feild col-lg-6 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative ">
                  <label
                    htmlFor="expertise"
                    className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                  >
                    Expertise
                  </label>
                  <input
                    type="text"
                    className="border border-1 rounded-2 p-2 ps-3 m-0"
                    id="expertise"
                    name='expertise'
                    value='Creative coder & designer'
                  />
                </div>
                <div className="input-feild col-lg-6 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative ">
                  <label
                    htmlFor="username"
                    className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                  >
                    User name
                  </label>
                  <input
                    type="text"
                    className="border border-1 rounded-2 p-2 ps-3 m-0"
                    id="username"
                    name='username'
                    value='Hibbanur Rahman'
                  />
                </div>
                <div className="input-feild col-lg-6 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative ">
                  <label
                    htmlFor="password"
                    className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    className="border border-1 rounded-2 p-2 ps-3 m-0"
                    id="password"
                    name='password'
                    value='Rahman@1234'
                  />
                </div>
                <div className="input-feild col-lg-6 row m-0 p-0 pe-lg-3 mb-3 mt-3 position-relative ">
                  <label
                    htmlFor="confirmPassword"
                    className="m-0 p-0 text-secondary position-absolute w-auto ps-2 pe-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    className="border border-1 rounded-2 p-2 ps-3 m-0"
                    id="confirmPassword"
                    name='confirmPassword'
                    value='Rahman@1234'
                  />
                </div>
                
              </div>
            </div>
            <div className="col-lg-3">
              <p className="m-0 p-0 fw-medium mb-3" style={{color:'#252641'}}>Profile Update</p>
              <div className="profile-image rounded-2 overflow-hidden d-flex align-items-center justify-content-center">
                <img src={selectedImage || profilePhoto} alt="" className="rounded-2 w-100 h-100"/>
              </div>
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="imageInput"
              />
              {/* Custom button to trigger file input */}
              <button className="upload-image btn btn-transparent border border-1 w-100 mt-4" onClick={handleChangeImageButtonClick}>
                Upload Image
              </button>
             
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
