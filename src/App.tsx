import { useState } from 'react'
import './App.css'
import RoutesList from './layouts/RoutesList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoutesList />
    </>
  )
}

export default App
