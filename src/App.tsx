import { useState } from 'react'
import './App.css'

import Table from './components/Table'
import Button from './components/Button'
import Form from './components/Form'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/index'
import { removeAlert } from './store/slices/alertSlice'
import Alerts from './components/Alerts'

function App() {

  return (
    <>
      <Alerts></Alerts>
      <Form></Form>
      <Table></Table>

    </>
  )
}

export default App
