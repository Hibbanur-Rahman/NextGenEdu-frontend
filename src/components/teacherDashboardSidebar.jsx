const TeacherDashboardSidebar=()=>{
    return (
        <div className="sidebar col-lg-3">
            <div className="list-item row m-3 ms-0 me-0 p-2 rounded-3 align-items-center active">
                <i className="bi bi-book-fill w-auto fs-5"></i>
                <p className="m-0 p-0 w-auto fs-6 " >Dashboard</p>

            </div>
            <div className="list-item row m-3 ms-0 me-0 p-2 rounded-3 align-items-center">
                <i className="bi bi-book-fill w-auto fs-5"></i>
                <p className="m-0 p-0 w-auto fs-6">Courses</p>

            </div>
            <div className="list-item row m-3 ms-0 me-0 p-2 rounded-3 align-items-center">
                <i className="bi bi-person-fill w-auto fs-5"></i>
                <p className="m-0 p-0 w-auto fs-6">My Account</p>

            </div>
            <div className="list-item row m-3 ms-0 me-0 p-2 rounded-3 align-items-center">
                <i className="bi bi-box-arrow-left w-auto fs-5"></i>
                <p className="m-0 p-0 w-auto fs-6">Logout</p>

            </div>
        </div>
    )
}

export default TeacherDashboardSidebar;