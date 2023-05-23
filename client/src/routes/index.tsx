import FreelancersPage from 'pages/Freelancers'
import Home from 'pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import CompanyLandingPage from 'components/Companies/CompanyLandingPage'
import Projects from 'components/Projects/Projects'
import SingleFreelancerPage from 'pages/SingleFreelancerPage'
import Companies from 'components/Companies/Companies'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/freelancers/single" element={<SingleFreelancerPage />} /> */}
      {/* <Route path="/freelancers" element={<FreelancersPage />} /> */}
      <Route path="/freelancers" element={<SingleFreelancerPage />} />
      <Route path="/company" element={<Companies />} />
      <Route path="/company/landingpage" element={<CompanyLandingPage />} />
      <Route path="/company/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
