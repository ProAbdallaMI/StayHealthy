import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/Landing_Page/LandingPage'
import Login from './components/Login/Login'
import SignUp from './components/Sign_Up/SignUp'
import InstantConsultation from './components/InstantConsultationBooking/InstantConsultation'
import Notification from './components/Notification/Notification'
import ReviewForm from './components/ReviewForm/ReviewForm'
import ProfileForm from './components/ProfileCard/ProfileForm'
import ReportsLayouts from './components/ReportsLayout/ReportsLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/review" element={<ReviewForm />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/reports" element={<ReportsLayouts />} />
        </Routes>
        <Notification />
      </BrowserRouter>
    </>
  )
}

export default App
