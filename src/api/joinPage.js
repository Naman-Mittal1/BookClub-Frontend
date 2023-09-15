
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export const createRoom = async (data) => {
    try {
      const res = await api.post('/rooms', data);
      return res.data;
    } catch (err) {
      console.log("Error: ", err);
      throw err; 
    }
  };