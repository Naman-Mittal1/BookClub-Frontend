import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-md shadow-md flex flex-col sm:flex-row items-center">
      <img 
        src={book.image} 
        alt={book.title}
        className="hidden sm:flex w-32 h-32 sm:w-48 sm:h-auto object-cover rounded"
      />

      <div className="ml-0 sm:ml-4 mt-4 sm:mt-0 flex flex-col flex-grow">
        <h3 className="text-2xl text-white font-semibold">{book.title}</h3>
        <p className="text-gray-100 mt-1">by {book.author}</p>
        <p className="text-gray-100">Genre: {book.genre}</p>
        <p className="text-gray-100">Year: {book.year}</p>
        <p className="text-gray-100">{book.description}</p>

        <div className="flex-grow"></div> {/* Fill remaining space */}
        
        <div className="mt-3 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
