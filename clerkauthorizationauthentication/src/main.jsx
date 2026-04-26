import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react';

const clerkKey=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!clerkKey){
  throw new Error("Key not Found");
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider key={clerkKey}>
    <App />
    </ClerkProvider>
  </StrictMode>,
)
