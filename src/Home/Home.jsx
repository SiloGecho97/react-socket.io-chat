import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {
 //  const [roomName, setRoomName] = React.useState('')

 //  const handleRoomNameChange = (event) => {
 //   setRoomName(event.target.value)
 //  }

 return (
  <div className='home-container'>
   <Link
    to={`/59a0b699-dad3-465a-bca3-3259376a1156`}
    className='enter-room-button'
   >
    User 1
   </Link>
   <Link
    to={`/5dada5bd-768c-4f4d-8477-279d42dda179`}
    className='enter-room-button'
   >
    user 2
   </Link>
   <Link
    to={`/5e7febc3-e6b7-4035-81ec-38a758ee72cd`}
    className='enter-room-button'
   >
    user 3
   </Link>
  </div>
 )
}

export default Home
