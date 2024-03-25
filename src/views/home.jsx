import heroimage from "../assets/images/hero-image.png";
const Home = () => {
  return (
    <div className="home row m-0 p-0">
      <div className="hero-section row m-0 p-lg-5  pt-5 pt-lg-0pb-0 align-items-center ">
          <div className="col-lg-6">
            <h1 className="m-0 p-0 text-light">
              <span style={{ color: "#F48C06" }}>Studying</span> Online is now
              much easier
            </h1>
            <p className="m-0 p-0 text-light fs-4 mt-5">
                NextGenEdu is an interesting platform that will teach you in more interactive way
            </p>
            <div className="row m-0 p-0 mt-5 align-items-center ">
                <button className=" join btn rounded-pill text-light fw-medium fs-4 w-auto p-5 pt-2 pb-2">Join for free</button>
                <i class="bi bi-play-circle-fill w-auto text-light ms-lg-4"></i>
                <p className="w-auto m-0 p-0 ms-2 fs-5">watch how it works</p>
            </div>
          </div>

          <div className="col-lg-6">
            <img src={heroimage} alt="hero image" className="w-100 h-100" />
          </div>
        
      </div>
    </div>
  );
};

export default Home;
