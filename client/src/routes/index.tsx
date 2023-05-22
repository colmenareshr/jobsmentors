import FreelancersPage from 'pages/Freelancers'
import Home from 'pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
// import Companies from '../components/Companies/Companies'
import CompanyLandingPage from 'components/Companies/CompanyLandingPage'
import Projects from 'components/Projects/Projects'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/freelancers" element={<FreelancersPage />} />
      <Route path="*" element={<Navigate to="/" />} />
      {/* <Route path="/company" element={<Companies />} /> */}
      <Route path="/company/landingpage" element={<CompanyLandingPage />} />
      <Route path="/company/projects" element={<Projects />} />
    </Routes>
  )
}
