import { Routes ,Route} from "react-router-dom";
import Dashboard from "./dashboard";

const StudentDashboard=()=>{
    return(
        <div className="row m-0 p-0 mt-5 pt-5">
            <h1>Hello</h1>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
            </Routes>
        </div>
    )
}

export default StudentDashboard;