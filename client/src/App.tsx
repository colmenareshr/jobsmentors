import MainPages from './components/MainPages/MainPages'
import './app.css'
import { useStore } from './context/useStore'
import { AppContext } from 'context/appContext'

function App() {
  const store = useStore()

  return (
    <AppContext.Provider value={store}>
      <MainPages />
    </AppContext.Provider>
  )
}

export default App
