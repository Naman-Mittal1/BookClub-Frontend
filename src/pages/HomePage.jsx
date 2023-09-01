// HomePage.jsx

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/browse-books');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">

      <h1 className="text-5xl mb-3 font-semibold text-center text-slate-300" style={{ fontFamily: "'Courgette', cursive" }}>
        BookMates
      </h1>

      <p className="text-lg text-center text-slate-400 max-w-md mb-8">
        The world's largest ebook club and library
      </p>

      <div className="w-full max-w-3xl">
        <form onSubmit={handleSearch} className="relative mx-5 sm:mx-5 m-auto flex items-center bg-white rounded-xl overflow-hidden shadow-md h-12">
          <input
            type="text"
            placeholder="Search books, topics, authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" py-3 w-11/12 px-6" 
          />

          <button
            className="absolute right-0 p-3 text-gray-500 hover:text-blue-500"
            type="submit"
          >
            <BsSearch size={22} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
