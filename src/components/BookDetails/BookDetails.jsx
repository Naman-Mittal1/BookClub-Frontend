// BookDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBook } from '../../api/books';
import RandomBooks from '../BrowseBooks/RandomBooks';
import AddComment from '../AddComment/AddComment';
import Loader from '../shared/Loader/Loader';
import AudioBook from '../AudioBook/AudioBook';
import FooterUn from '../Footer/FooterUn';

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
    <>
    <div className="text-white shadow-md rounded-lg mx-auto my-10 p-4 sm:p-6 max-w-7xl">
      <div className='flex gap-7 sm:gap-2 flex-col sm:flex-row'>
        <img src={book.image} alt={book.title} className=" flex justify-center sm:justify-start rounded sm:mr-6 sm:m-0 w-60 h-80 m-auto" />
        <div>
          <h2 className="text-2xl  sm:text-4xl font-semibold mb-4">{book.title}</h2>
          <p className=" mb-3 text-base italic text-gray-400 font-semibold">By {book.author}</p>
          <p className="text-gray-300 text-base mb-1">
            Category:   
            <span  className='italic text-blue-600 '>
              <Link to={`/explore/${book.genre}`}>  {book.genre}</Link>
            </span> 
          </p>          
          <p className="text-gray-300 text-base mt-3 mb-1">Year: {book.year}</p>
          <p className="text-gray-300 text-sm sm:text-base mb-4 mt-3 max-w-2xl text-justify">Description: {book.description}</p>
          <div className='flex text-base sm:flex-row justify-center sm:justify-normal items-center gap-3 sm:gap-5'>
  <Link
    to=""
    className="text-white text-sm sm:text-base bg-blue-900 hover:bg-blue-800 rounded-md py-2 px-4 text-center block transition duration-300 ease-in-out transform hover:scale-105"
  >
    Quick Summary
  </Link>
  <Link
    to=""
    className="text-white text-sm sm:text-base bg-blue-900 hover:bg-blue-800 rounded-md py-2 px-4 text-center block transition duration-300 ease-in-out transform hover:scale-105"
  >
    Detailed Summary
  </Link>
</div>
{/* target="_blank" rel="noopener noreferrer" */}

        </div>
      </div>

      <AudioBook  bookId={id} />

      <RandomBooks />

      <AddComment />
    </div>
    <FooterUn />
    </>
  );
}

export default BookDetails;
