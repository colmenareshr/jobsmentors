import { useStore } from './context/useStore'
import { AppContext } from 'context/appContext'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from 'routes'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import './app.css'

function App() {
  const store = useStore()

  return (
    <AppContext.Provider value={store}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
