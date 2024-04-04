import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";

const TeacherDashboard = () => {
  return (
    <div className="row m-0 p-0 mt-5 pt-5">
      <h1>teacher</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default TeacherDashboard;
