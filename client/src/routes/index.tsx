import FreelancersPage from 'pages/Freelancers'
import Home from 'pages/Home'
import { Routes, Route } from 'react-router-dom'
import CompanyLandingPage from 'components/Companies/CompanyLandingPage'
import Projects from 'components/Projects/Projects'
import SingleFreelancerPage from 'pages/SingleFreelancerPage'
import Companies from 'components/Companies/Companies'
import RegisterFreelancer from 'pages/RegisterFreelancer'
import CompanyRegistrationPage from 'pages/CompanyRegistrationPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/freelancers" element={<FreelancersPage />} />
      <Route path="/freelancer/:id" element={<SingleFreelancerPage />} />
      <Route path="/freelancer/register/:id" element={<RegisterFreelancer />} />
      <Route
        path="/company/register/:id"
        element={<CompanyRegistrationPage />}
      />
      <Route path="/company" element={<Companies />} />
      <Route path="/company/:id" element={<CompanyLandingPage />} />
      <Route path="/company/projects" element={<Projects />} />
    </Routes>
  )
}
