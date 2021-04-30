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
   <Link to={`/8mXi1jyulaUIS92Jki1`} className='enter-room-button'>
    User 1
   </Link>
   <Link to={`/8mXi1jyulaUIS92Jki2`} className='enter-room-button'>
    user 2
   </Link>
   <Link to={`/8mXi1jyulaUIS92Jki3`} className='enter-room-button'>
    user 3
   </Link>
  </div>
 )
}

export default Home
