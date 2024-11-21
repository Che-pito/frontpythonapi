import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Rutas } from './Routes/Rutas'
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Rutas></Rutas>
    </BrowserRouter>
  </StrictMode>,
)
