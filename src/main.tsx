import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="502976420645-7cfd2j3d1m94d20vs7p5kqjdlcjqdf4a.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>;
    
  </StrictMode>,
)
