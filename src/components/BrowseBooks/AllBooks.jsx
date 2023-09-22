// BrowseBooks.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../api/books";
import BookCard from "../BookCard/BookCard";
import Loader from "../shared/Loader/Loader";
import Pagination from "./Pagination";

const PAGE_SIZE = 8;

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalBooks, setTotalBooks] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBooks = async () => {
      
      setIsLoading(true);
      try {
        const offset = (page - 1) * PAGE_SIZE;
        const res = await getBooks({
          limit: PAGE_SIZE,
          offset
        });
        
        setBooks(res.data);
        setTotalBooks(res.total); 
        
      } catch (error) {
        console.error("Error fetching books:", error);
      }finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, [page]);


  
  if (isLoading) return <Loader />

  const handlePageChange = (page) => {
    setPage(page);
  }

  const totalPages = Math.ceil(totalBooks / PAGE_SIZE);

  return (
    <>
    <div className="">
    {books.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((book) => (
  <div className="mb-6" key={book._id}>
    <Link to={`/book/${book._id}`}>
      <BookCard book={book} />
    </Link>
  </div>
))}
  </div>
  <Pagination 
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange} 
      />
    </>
  );
};

export default AllBooks;
