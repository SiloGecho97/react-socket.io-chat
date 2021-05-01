import axios from './axiosDefault'
const environment = 'http://localhost:8080'
const chatService = {
 getMessages: async function (roomId) {
  try {
   const msg = await axios.get(
    `${environment}/chat/message/${roomId}?pageIndex=1`
   )
   console.log(`msg.data`, msg.data)
   return msg.data
  } catch (error) {
   return console.log(`error`, error)
  }
 }
 //  getVideos: async function (pagination) {
 //   try {
 //    const video = await axios.get(
 //     `${environment}/video?current=${pagination.current}&pageSize=${pagination.pageSize}&streamed=${pagination.streamed}`
 //    )
 //    return video.data
 //   } catch (error) {
 //    return checkResponse(error)
 //   }
 //  }
}

export default chatService
