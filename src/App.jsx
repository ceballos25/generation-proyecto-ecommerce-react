import { useState } from 'react'
import NavBar  from './app/ui/components/navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <NavBar />
  )
}


