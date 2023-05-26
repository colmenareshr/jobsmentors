import FreelancersPage from 'pages/Freelancers'
import Home from 'pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import CompanyLandingPage from 'components/Companies/CompanyLandingPage'
import Projects from 'components/Projects/Projects'
import SingleFreelancerPage from 'components/SingleFreelancer/SingleFreelancerPage'
import Companies from 'components/Companies/Companies'
import FreelancerProfile from 'pages/FrelancerProfile'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/freelancers" element={<FreelancersPage />} />
      <Route
        path="/freelancers/landingpage"
        element={<SingleFreelancerPage />}
      />
      <Route path="/freelancers/:profileName" element={<FreelancerProfile />} />
      <Route path="/company" element={<Companies />} />
      <Route path="/company/landingpage" element={<CompanyLandingPage />} />
      <Route path="/company/projects" element={<Projects />} />
      {/* <Route path="*" element={<Navigate to="/" />} />  */}
    </Routes>
  )
}
