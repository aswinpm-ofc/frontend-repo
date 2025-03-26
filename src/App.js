import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import UserLogin from "./pages/userlogin";
import WorkerLogin from "./pages/workerlogin";
import ForgotPassword from "./pages/forgotpassword";
import UserSelection from "./pages/userselectionsection";
import EnterOtp from "./pages/enterotp";
import UserSignup from "./pages/usersignup";
import WorkerSignup from "./pages/workersignup";
import WorkerDashboard from "./pages/workerdashboard"; // ✅ Import Worker Dashboard
import ScheduleAppointment from "./pages/scheduleappointment"; // ✅ Import ScheduleAppointment page
import JobDetails from "./pages/jobdetails"; // ✅ Import JobDetails page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/workerlogin" element={<WorkerLogin />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/userselection" element={<UserSelection />} />
        <Route path="/enterotp" element={<EnterOtp />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/workersignup" element={<WorkerSignup />} />
        <Route path="/workerdashboard" element={<WorkerDashboard />} /> {/* ✅ Worker Dashboard Route */}
        <Route path="/schedule" element={<ScheduleAppointment />} />
        <Route path="/jobdetails" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
