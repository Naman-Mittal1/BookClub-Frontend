import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import BookCard from '../components/BookCard/BookCard';
import Footer from '../components/Footer/Footer';
import Loader from '../components/shared/Loader/Loader';

const GenrePage = () => {
  const { genre } = useParams();
  const [genreBooks, setGenreBooks] = useState(null)
  const [isLoading, setIsLoading] = useState(false);


  useEffect(()=>{
    const fetchBooksFromGenre = async () => {
        setIsLoading(true);
        try{
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/books/genre/${genre}`);
          const data = response.data.data;
          setGenreBooks(data);
        } catch (error) {
          console.error("Error fetching books:", error);
        } finally {
          setIsLoading(false);
        }
      }
      fetchBooksFromGenre();
  }, [genre])

  if (isLoading) return <Loader />


  return (
    <>
     <div className="container mx-auto mt-5">
      {genreBooks && genreBooks.length > 0 ? (
        genreBooks.map((book) => (
          <div className="mb-3" key={book._id}>
            <Link to={`/book/${book._id}`}>
              <BookCard book={book} />
            </Link>
          </div>
        ))
      ) : (
        <h2 className='text-white text-xl sm:text-3xl m-4 sm:m-auto flex justify-center'>No books found of this genre</h2>
      )}
    </div>
    <Footer />
  </>
  )
}

export default GenrePage