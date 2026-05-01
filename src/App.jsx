import { useState } from 'react'
import NavBar  from './app/ui/components/NavBar.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AppRouter from './router/AppRouter.jsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function App() {
  
  return <AppRouter />
  
}


