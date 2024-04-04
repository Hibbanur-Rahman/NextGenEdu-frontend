import { Routes ,Route} from "react-router-dom";
import Dashboard from "./dashboard";
const AdminDashboard = () => {
  return (
    <div className="row m-0 p-0 mt-5 pt-5">
      <h1>admin</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
