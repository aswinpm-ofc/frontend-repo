import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import UserLogin from "./pages/userlogin";
import WorkerLogin from "./pages/workerlogin";
import ForgotPassword from "./pages/forgotpassword";
import UserSelection from "./pages/userselectionsection";
import EnterOtp from "./pages/enterotp";
import UserSignup from "./pages/usersignup";
import WorkerSignup from "./pages/workersignup";
import ScheduleAppointment from "./pages/scheduleappointment"; // ✅ Import the ScheduleAppointment page
import JobDetails from "./pages/jobdetails"; // ✅ Import the Job Details Page


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
        <Route path="/schedule" element={<ScheduleAppointment />} /> {/* ✅ Added this */}
        <Route path="/jobdetails" element={<JobDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
