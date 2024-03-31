import heroImg from "../assets/images/blog-hero.png";

const Blog = () => {
  return (
    <div className="blog row m-0 p-0 mt-5 pt-lg-4 ">
      <div className="blog-hero m-0 p-0 pt-lg-3 pt-5 ps-lg-0 pe-lg-0 ps-2 pe-2 justify-content-center ">
        <div className="container d-lg-flex">
          <div className="col-lg-6 p-lg-5 ps-lg-0">
            <p className="m-0 p-0 fs-4">
              By Themadbrains in
              <span style={{ color: "#49BBBD" }} className="fw-medium ps-2">
                inspiration
              </span>
            </p>
            <h2 className="m-0 p-0 mt-2">
              Why Swift UI Should Be on the Radar of Every Mobile Developer
            </h2>
            <p className="text-secondary mt-4">
              The world of mobile app development is evolving rapidly, and Swift
              UI is at the forefront of this evolution. With its declarative
              syntax and powerful features, Swift UI offers developers a more
              intuitive and efficient way to build modern, feature-rich apps for
              iOS and beyond. Whether you're a seasoned developer or just
              starting out. In this article, we'll explore why Swift UI should
              be on the radar of every mobile developer and how it can help you
              create better apps, faster.
            </p>
            <button className="btn text-light mt-4">Start Learning Now</button>
          </div>
          <div className="col-lg-6 p-lg-5 mt-lg-0 mt-5">
            <img src={heroImg} alt="blog-hero image" className="w-100 rounded-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
