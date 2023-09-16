
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const getMessages = async (roomId) => {
  return api.get(`/rooms/${roomId}/messages`); 
}

export const sendMessage = async (roomId, message) => {
  return api.post(`/rooms/${roomId}/messages`, message);
}

export default {
  getMessages,
  sendMessage
}