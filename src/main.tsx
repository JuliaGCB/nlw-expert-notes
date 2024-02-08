import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'
import {Toaster} from 'sonner' // importando o Toaster para mostrar uma mensagem de sucesso

ReactDOM.createRoot(document.getElementById('root')!).render( // Aqui ira Mostrar em tela - Renderizar
  <React.StrictMode> 
    <App />
    <Toaster richColors/>
  </React.StrictMode>,
)
