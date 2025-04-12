import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/Context.jsx'
import { FoodProvider } from './context/FoodContext.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
     <FoodProvider>
        <App />
      </FoodProvider>
    </AppContextProvider>
  </BrowserRouter>,
)
