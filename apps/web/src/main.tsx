import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <div className='dark'>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </StrictMode>
  </BrowserRouter>,
)
