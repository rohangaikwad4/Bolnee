import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Chatbot from './pages/solutions/Chatbot'
import ServiceClient from './pages/solutions/ServiceClient'
import Ecommerce from './pages/solutions/Ecommerce'
import AppointmentBooking from './pages/solutions/AppointmentBooking'
import RealEstate from './pages/solutions/RealEstate'
import HR from './pages/solutions/HR'
import Training from './pages/solutions/Training'
import Restaurant from './pages/solutions/Restaurant'
import Automotive from './pages/solutions/Automotive'
import Legal from './pages/solutions/Legal'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Tools from './pages/Tools'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import LegalPage from './pages/LegalPage'
import './app.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions/chatbot" element={<Chatbot />} />
          <Route path="/solutions/service-client" element={<ServiceClient />} />
          <Route path="/solutions/ecommerce" element={<Ecommerce />} />
          <Route path="/solutions/appointment-booking" element={<AppointmentBooking />} />
          <Route path="/solutions/real-estate" element={<RealEstate />} />
          <Route path="/solutions/hr" element={<HR />} />
          <Route path="/solutions/training" element={<Training />} />
          <Route path="/solutions/restaurant" element={<Restaurant />} />
          <Route path="/solutions/automotive" element={<Automotive />} />
          <Route path="/solutions/legal" element={<Legal />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/legal" element={<LegalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
