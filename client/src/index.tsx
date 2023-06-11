import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from './App'
import { AuthContextProvider } from 'context'
import './i18n'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
)
