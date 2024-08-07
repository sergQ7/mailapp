import React from 'react'
import ReactDOM from 'react-dom/client'
import {EmailEditor} from './components/email-editor/EmailEditor.tsx'
import {Home} from './Home.tsx'
import './index.css'
import { Provider } from './services/Provider.tsx'

const rootElement = document.getElementById('root')
if (!rootElement)  throw new Error('Failed to find root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider>
    <Home />
    </Provider>
    </React.StrictMode>,
)
