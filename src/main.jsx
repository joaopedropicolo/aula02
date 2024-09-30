import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page1 from './exemplo1'
import Page2 from './exemplo2'
import Page3 from './exemplo3'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<Page1/>}/>
            <Route path="/exemplo2" element={<Page2 />} />
            <Route path="/exemplo3" element={<Page3 />} />
       </Routes>
    </BrowserRouter>
  </StrictMode>
)
