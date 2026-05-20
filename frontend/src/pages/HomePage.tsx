import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'


const HomePage = () => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes")
        console.log(res.data)
        setNotes(res.data)

      } catch (error) {
        console.log("Error fetching notes")

      } finally {
        setLoading(false)
      }
    }
    fetchNotes()
  }, [])


  return (
    <div className='min-h-screen'>
      <Navbar />

      <div className=''></div>

      


    </div>
  )
}

export default HomePage