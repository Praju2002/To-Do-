import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import theme from './theme/theme.js'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    {/* //for switching colors// */}
      <CssBaseline/>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
