
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "sass"
import "react-router-dom"
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/react-fontawesome"
createRoot(document.getElementById('root')).render(
    <App />
)
