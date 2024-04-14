import { useState } from "react";
import noData from '../../assets/images/noDataSvg.svg';

const EnrolledCourses = () => {
    const [enrolledBtn,setEnrolledBtn]=useState(true);
    const [activeBtn,setActiveBtn]=useState(false);
    const [completedBtn,setCompletedBtn]=useState(false);
    const handleTab=(e)=>{
        console.log(e.currentTarget.id)
        if(e.currentTarget.id==='completedCourses'){
            setCompletedBtn(true);
            setEnrolledBtn(false);
            setActiveBtn(false);
        }
        if(e.currentTarget.id==='enrolledCourses'){
            setCompletedBtn(false);
            setEnrolledBtn(true);
            setActiveBtn(false);
        }
        if(e.currentTarget.id==='activeCourses'){
            setCompletedBtn(false);
            setEnrolledBtn(false);
            setActiveBtn(true);
        }
        
    }

  return (
    <div className="enrolled-courses row m-0 p-0 pt-3">
      <h5 className="m-0 p-0" style={{ color: "rgb(0, 203, 184)" }}>
        Enrolled Courses
      </h5>
      <div className="navtab row m-0 p-0 mt-3 border border-1 border-start-0 border-end-0 border-top-0 pb-3">
        
          <button className={`btn fw-medium w-auto ms-0 me-md-2 mt-2 mt-md-0 ${enrolledBtn?'btn-active':''}`} id='enrolledCourses' onClick={handleTab}>
           Enrolled Courses
          </button>
        
        
          <button className={`btn fw-medium w-auto ms-2 me-2 mt-2 mt-md-0 ${activeBtn?'btn-active':''}`} id='activeCourses' onClick={handleTab} >
           Active Courses
          </button>
        
        
          <button className={`btn fw-medium w-auto ms-md-2 me-md-2 mt-2 mt-md-0 ${completedBtn?'btn-active':''}`} id='completedCourses' onClick={handleTab}>
           Completed Courses
          </button>    
      </div>
      <div className="content row m-0 p-0 justify-content-center align-items-center pt-5">
            <img src={noData} alt="No Data" />
            <p className="m-0 p-0 text-center">No data is Available on this section</p>
      </div>
    </div>
  );
};

export default EnrolledCourses;
