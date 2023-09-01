// BookDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../../api/books';
import RandomBooks from '../BrowseBooks/RandomBooks';
import AddComment from '../AddComment/AddComment';
import Loader from '../shared/Loader/Loader';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        console.log('Fetching book with ID:', id);
        const { data } = await getBook(id);
        console.log('Fetched book data:', data);

        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchBookData();
  }, [id]);

  if (!book) {
    return <Loader />
  }

  return (
    <div className="text-white shadow-md rounded-lg mx-auto my-10 p-6 max-w-7xl">
      <div className='flex gap-7 sm:gap-2 flex-col sm:flex-row'>
        <img src={book.image} alt={book.title} className=" flex justify-center sm:justify-start rounded sm:mr-6 sm:m-0 w-60 h-80 m-auto" />
        <div>
          <h2 className="text-4xl font-semibold mb-4">{book.title}</h2>
          <p className=" mb-3 italic text-gray-400 font-semibold">By {book.author}</p>
          <p className="text-gray-300 mb-1"> Category:  {book.genre}</p>
          <p className="text-gray-300 mt-3 mb-1">Year: {book.year}</p>
          <p className="text-gray-300 mb-4 mt-3 max-w-2xl">Description: {book.description}</p>
          <a href={book.downloadLink} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 rounded-md py-2 mt-3 px-4 w-fit text-center block">
  Download
</a>

        </div>
      </div>

      <RandomBooks />

      <AddComment />
    </div>
  );
}

export default BookDetails;
