import React, { useState, useEffect } from "react";
import { sampleSize } from 'lodash'; 

import { Link } from "react-router-dom";
import { getBooks } from "../../api/books";
import RandomBookCard from "../RandomBookCard/RandomBookCard";

const RandomBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getBooks();
        setBooks(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  const randomBooks = sampleSize(books, 8);


  return (
      <div className="my-24">
        <h2 className="my-10 text-xl">Checkout these Books Too....</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> 
    {randomBooks.map(book => (
      <Link to={`/book/${book._id}`} key={book._id}>
        <RandomBookCard book={book} />
      </Link>
    ))}
  </div>  
      </div>
  );
};

export default RandomBooks;
