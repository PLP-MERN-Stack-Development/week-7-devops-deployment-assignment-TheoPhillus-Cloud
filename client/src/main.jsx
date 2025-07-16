// client/src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// grab your API base URL from the Vite env
const apiUrl = import.meta.env.VITE_API_URL

// sanity‐check your backend
fetch(`${apiUrl}/api/health`)
  .then(res => res.json())
  .then(data => console.log('API Health:', data))
  .catch(err => console.error('Health check failed:', err))

// mount your React app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)