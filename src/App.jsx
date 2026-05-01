import { useState } from 'react'
import NavBar  from './app/ui/components/navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AppRouter from './router/AppRouter.jsx';
import './App.css'
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

export function App() {
  
  return <AppRouter />
  
}


