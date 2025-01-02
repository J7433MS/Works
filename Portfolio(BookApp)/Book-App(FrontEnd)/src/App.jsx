import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import MyAppointment from './pages/MyAppointment';
import Myprofile from './pages/MyProfile';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-appointment' element={<MyAppointment />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-profile' element={<Myprofile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
