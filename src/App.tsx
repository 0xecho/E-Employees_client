import { useState } from 'react'
import './App.css'

import Table from './components/Table'
import Button from './components/Button'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form></Form>
      <Table></Table>
    </>
  )
}

export default App
