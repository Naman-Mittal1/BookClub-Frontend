// SearchComponent.js

import React, { useState, useEffect } from 'react';
import { searchBooks } from '../../../api/books';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = async (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery.trim() !== '') {
      const searchResults = await searchBooks(newQuery);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    async function fetchInitialData() {
      const initialResults = await searchBooks('');
      setResults(initialResults);
    }

    fetchInitialData();
  }, []);

  return (
    <div>
      <input 
        type="text"
        value={query}
        onChange={handleInputChange}  
      />

      {results.length > 0 && (
        <div>
          {results.map(book => (
            <div key={book._id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
