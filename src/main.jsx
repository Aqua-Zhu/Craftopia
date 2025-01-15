import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/style.scss'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
{/* 動態設置 basename */ }
// const basename = process.env.NODE_ENV === 'production' ? '/Debug/' : '/';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    {/* <BrowserRouter basename={basename}>
      <App/>
    </BrowserRouter> */}
  </StrictMode>,
)
