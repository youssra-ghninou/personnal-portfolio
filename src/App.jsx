import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Navbar/>
  );
}

export default App
