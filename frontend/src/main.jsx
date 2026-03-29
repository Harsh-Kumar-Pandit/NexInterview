import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider, useAuth } from '@clerk/react'
import { BrowserRouter, useNavigate } from 'react-router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useEffect } from 'react'
import { setClerkTokenGetter } from './lib/axios'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk Publishable Key')
}

const queryClient = new QueryClient()

function ClerkAxiosSync() {
  const { getToken } = useAuth()

  useEffect(() => {
    setClerkTokenGetter(() => getToken())
  }, [getToken])

  return null
}

function AppProviders() {
  const navigate = useNavigate()

  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        routerPush={(to) => navigate(to)}
        routerReplace={(to) => navigate(to, { replace: true })}
      >
        <ClerkAxiosSync />
        <App />
      </ClerkProvider>
    </QueryClientProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProviders />
    </BrowserRouter>
  </StrictMode>,
)
