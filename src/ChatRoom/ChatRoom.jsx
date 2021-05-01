import React, { useEffect } from 'react'

import './ChatRoom.css'
import useChat from '../useChat'
import chatService from '../service/chatService'

const ChatRoom = (props) => {
 const { roomId } = props.match.params
 const { messages, sendMessage } = useChat(roomId)
 const [newMessage, setNewMessage] = React.useState('')

 const handleNewMessageChange = (event) => {
  setNewMessage(event.target.value)
 }

 const handleSendMessage = () => {
  sendMessage(newMessage)
  setNewMessage('')
 }
 useEffect(() => {
  chatService.getMessages(roomId).then((data) => {
   messages.push(...data.rows)
   console.log(`messages`, messages)
  })
 }, [])
 return (
  <div className='chat-room-container'>
   <h1 className='room-name'>Room: {roomId}</h1>
   <div className='messages-container'>
    <ol className='messages-list'>
     {messages.map((message, i) => (
      <li
       key={i}
       className={`message-item ${
        message.ownedByCurrentUser ? 'my-message' : 'received-message'
       }`}
      >
       {message.message}
      </li>
     ))}
    </ol>
   </div>
   <textarea
    value={newMessage}
    onChange={handleNewMessageChange}
    placeholder='Write message...'
    className='new-message-input-field'
   />
   <button onClick={handleSendMessage} className='send-message-button'>
    Send
   </button>
  </div>
 )
}

export default ChatRoom
