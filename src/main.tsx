import '@radix-ui/themes/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Theme } from '@radix-ui/themes'

import '@radix-ui/themes/styles.css'

import App from './App.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Theme
          accentColor='teal'
          grayColor='sage'
          radius='medium'
          scaling='100%'
          hasBackground={true}
        >
          <App />
        </Theme>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
