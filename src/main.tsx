import '@radix-ui/themes/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//import { QueryClient, QueryClientProvider } from 'react-query'
import { Theme } from '@radix-ui/themes'
import { ModeAndLevelProvider } from '@/contexts/modeAndLevel'
import '@radix-ui/themes/styles.css'
import { COLOR_CORRECT } from '@/constants'

import App from './App.tsx'
import { allQuestions } from './data'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModeAndLevelProvider
      value={{
        level: { name: 'A1', questions: allQuestions.A1 },
        mode: 'training',
      }}
    >
      <BrowserRouter basename='/'>
        {/* <QueryClientProvider client={queryClient}> */}
        <Theme
          accentColor={COLOR_CORRECT}
          grayColor='sage'
          radius='medium'
          scaling='100%'
          hasBackground={true}
        >
          <App />
        </Theme>
        {/* </QueryClientProvider> */}
      </BrowserRouter>
    </ModeAndLevelProvider>
  </React.StrictMode>
)
