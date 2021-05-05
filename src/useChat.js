import { useEffect, useRef, useState } from 'react'
import socketIOClient from 'socket.io-client'

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'
// const CHAT_START = 'start-chat'

const SOCKET_SERVER_URL = 'http://localhost:5000'

const useChat = (roomId) => {
 const [messages, setMessages] = useState([])
 const socketRef = useRef()

 useEffect(() => {
  socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
   query: { roomId }
  })

  // socketRef.current.emit(CHAT_START, {
  //  chatId: roomId
  // })

  socketRef.current.on('chat-current', (message) => {
   console.log(`message`, message)
  })

  socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
   console.log(`message`, message)
   const incomingMessage = {
    ...message,
    ownedByCurrentUser: message.senderId === socketRef.current.id
   }
   setMessages((messages) => [...messages, incomingMessage])
  })

  return () => {
   socketRef.current.disconnect()
  }
 }, [roomId])

 const sendMessage = (messageBody) => {
  socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
   message: messageBody,
   senderId: socketRef.current.id,
   chatId: roomId
  })
 }

 return { messages, sendMessage }
}

export default useChat
