import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import DashboardLayout from './pages/DashboardLayout.jsx'
import DashboardHome from './pages/DashboardHome.jsx'
import Profile from './pages/Profile.jsx'
import Settings from './pages/Settings.jsx'
import NotFound from "./pages/404.jsx"
import MovieSelection from './pages/MovieSelection.jsx'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/404' element={<NotFound />}></Route>
      <Route path='/selection' element={<MovieSelection />}></Route>
    </Routes>

    {/* <nav>
      <Link to="/dashboard" >This is /dashboard </Link> " "
      <Link to="/dashboard/profile" >This is a /dashboard/profile </Link> " "
      <Link to="/dashboard/settings" >This is a /dashboard/settings </Link>
    </nav>
      <Routes>
        <Route path='/dashboard' element={<DashboardLayout />} > 
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes> */}
      </>
  )
}

export default App
