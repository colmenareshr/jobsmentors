import FreelancersPage from 'pages/Freelancers'
import Home from 'pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="freelancers" element={<FreelancersPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
