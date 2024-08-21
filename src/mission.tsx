import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MissionApp from './MissionApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MissionApp/>
  </StrictMode>,
)
