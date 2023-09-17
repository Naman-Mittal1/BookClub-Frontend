// BrowseBooks.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../api/books";
import BookCard from "../BookCard/BookCard";
import Loader from "../shared/Loader/Loader";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const res = await getBooks();
        setBooks(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);


  
  if (isLoading) return <Loader />


  return (
    <div className="">
    {books.map((book) => (
      <div className="mb-6" key={book._id}>
        <Link to={`/book/${book._id}`}>
          <BookCard book={book} />
        </Link>
      </div>
    ))}
  </div>
  );
};

export default AllBooks;
