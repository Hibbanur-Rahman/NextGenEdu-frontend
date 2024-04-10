import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import CoursesList from "./coursesList";
import AccountDetails from "./accountDetails";

const TeacherDashboard = () => {
  return (
    <div className="row m-0 p-0 mt-5 pt-5">
      <h1>teacher</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/coursesList" element={<CoursesList/>} />
        <Route path="/accountDetails" element={<AccountDetails />} />
      </Routes>
    </div>
  );
};

export default TeacherDashboard;
