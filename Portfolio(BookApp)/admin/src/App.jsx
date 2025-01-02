import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Admin/DashBoard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";
import { DoctorContext } from "./context/DoctorContext";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointment from "./pages/Doctor/DoctorAppointments";
import DoctorProfile from "./pages/Doctor/DoctorProfile";
import Login from "./pages/Login"


const App = () => {

    const {aToken} = useContext(AdminContext)
    const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className="bg-[#F8F9FD]">
    <ToastContainer />
    <Navbar />
    <div className="flex items-start">
      <Sidebar />
      <Routes>
        { /* Admin Route */}
        <Route path='/' element={<></>} />
        <Route path='/admin-dashboard' element={<DashBoard />} />
        <Route path='/all-appointments' element={<AllAppointments />} />
        <Route path='/add-doctor' element={<AddDoctor />} />
        <Route path='/doctor-list' element={<DoctorsList />} />

        { /* Doctor Route */}
        <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
        <Route path='/doctor-appointments' element={<DoctorAppointment />} />
        <Route path='/doctor-profile' element={<DoctorProfile />} />
      </Routes>
    </div>
    </div>
  ) : (
    <>
    <Login />
    <ToastContainer />
    </>
  )
}

export default App