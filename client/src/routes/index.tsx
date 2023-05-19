import Home from 'pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import Companies from '../components/Companies/Companies'
import Projects from 'components/Projects/Projects'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/companies/projects" element={<Projects />} />
    </Routes>
  )
}
