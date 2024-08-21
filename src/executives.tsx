import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ExecutivesApp from './ExecutivesApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExecutivesApp/>
  </StrictMode>,
)
