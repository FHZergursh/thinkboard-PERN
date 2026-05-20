import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <button className='bg-red-500' onClick={() => toast.success("congrats!")}>click me</button>
      <button className='btn btn-outline btn-primary'>daisy</button>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>

    </div>
  )
}

export default App