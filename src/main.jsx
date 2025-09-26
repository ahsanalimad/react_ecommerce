import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {AuthContextProvider} from './services/context/AuthContext';
import {Home} from './home';
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <AuthContextProvider>
         <Home></Home>
      </AuthContextProvider>
   </BrowserRouter>
)
