import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
