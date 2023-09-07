
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export const loginUser = async (data) => {
    try {
      const res = await api.post('/feeds', data);
      return res.data;
    } catch (err) {
      console.log("Error: ", err);
      throw err; 
    }
  };