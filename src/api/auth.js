
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
})

const setAuthToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const registerUser = async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
export const loginUser = async (data) => {
  try {
    const res = await api.post('/auth/login', data);
    localStorage.setItem('token', res.data.token);
    
    setAuthToken(res.data.token);
    return res.data;
  } catch (err) {
    console.log("Error: ", err);
    throw err; 
  }
};

  
  export const logoutUser = async () => {
    try {
      const response = await api.delete('/auth/logout');
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };