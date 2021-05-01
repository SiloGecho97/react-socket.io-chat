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
    to={`/73141453-46b1-45b4-9671-c42b57b6e5df`}
    className='enter-room-button'
   >
    User 1
   </Link>
   <Link
    to={`/755989ea-d3ca-4ad4-837e-bec26d08a0cc`}
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
