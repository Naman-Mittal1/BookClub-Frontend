
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})


export const getBooks = async () => {
    try {
      const response = await api.get('/books');
      return response.data;
      
    } catch (error) {
      console.log(error);
      throw error; 
    }
}

export const getBook = async (bookId) => {
  try {
    const response = await api.get(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const addBook = async bookData  => {
  try {
    const response = await api.post(`/books`, bookData );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const searchBooks = async (title) => {
  try {
    const response = await api.get(`/books/search/${title}`);
    return response.data;
  } catch (error) {
    console.error('Error searching books:', error);
    return [];
  }
};

// export const addComment = async (bookId) => {
//   try {
//     const response = await api.get(`/books/${bookId}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };