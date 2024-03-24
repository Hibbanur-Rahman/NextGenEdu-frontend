import heroimage from "../assets/images/hero-image.png";
const Home = () => {
  return (
    <div className="home row m-0 p-0">
      <div className="hero-section row m-0 p-5 pb-0">
          <div className="col-6">
            <h1 className="m-0 p-0 text-light">
              <span style={{ color: "#F48C06" }}>Studying</span> Online is now
              much easier
            </h1>
            <p className="m-0 p-0">
                NextGenEdu is an interesting platform that will teach you in more interactive way
            </p>
          </div>

          <div className="col-6">
            <img src={heroimage} alt="hero image" className="w-100" />
          </div>
        
      </div>
    </div>
  );
};

export default Home;
