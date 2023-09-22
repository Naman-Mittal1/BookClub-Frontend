import React, { useState, useEffect } from 'react';
import { searchBooks } from '../../../api/books';
import { BsSearch } from 'react-icons/bs';
import useDebounce from '../../../hooks/useDebounce';
import BookCard from '../../BookCard/BookCard';
import { Link } from 'react-router-dom';
import AllBooks from '../../BrowseBooks/AllBooks';

const Searchbar = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearchTerm = useDebounce(search, 1000);

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchBooks(debouncedSearchTerm);
      setSearchResults(data);
    };
    
    fetchData();

  }, [debouncedSearchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  
let resultsContent;

if(search === '') {
  resultsContent = (
  <>
  <div className='mt-20'></div>
  {<AllBooks />}
  </>
  )

} else if(searchResults.length === 0) {
  resultsContent = (
    <>
    <p className='text-white text-lg text-center my-8'>No Result Found.. You can Request this book</p>
    {<AllBooks />}
    </>
  )
} else {
  resultsContent = (
    <>
      {searchResults && searchResults.map((book) => (
          <div key={book._id} className=" rounded-lg shadow-md mt-10 mb-2">
             <Link to={`/book/${book._id}`}>
              <BookCard book={book} />
            </Link>
          </div>
        ))}
    </>
  )
}


  return (
    <div className="flex flex-col items-center justify-center mb-5">
      <h1 className="text-5xl mb-3 font-semibold text-slate-300" style={{ fontFamily: "'Courgette', cursive" }}>
      BookMates
      </h1>
      <p className="sm:text-lg text-base text-slate-400 sm:max-w-md px-1 text-center mb-8">
        The world's largest ebook club and library
      </p>
      <form onSubmit={handleSearch} className="w-full max-w-4xl focus:outline-none outline-none bg-transparent">
        <div className="relative flex items-center bg-white rounded-xl overflow-hidden shadow-md h-12">
          <input
            type="text"
            placeholder="Search books, topics, authors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none focus:outline-none py-3 px-6"
          />
          <button type="submit" className="absolute right-0 p-3 text-gray-500 hover:text-blue-500">
            <BsSearch size={22} />
          </button>
        </div>
      </form>
      <div className="mt-4">
        {resultsContent}
      </div>
    </div>
  );
};

export default Searchbar;
