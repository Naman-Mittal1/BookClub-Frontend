import React from 'react';

const RandomBookCard = ({ book }) => {
  return (
    <div className="py-4 rounded-md shadow-md flex flex-col items-center">
      <img 
        src={book.image} 
        alt={book.title}
        className="w-64 h-64 sm:w-48 sm:h-64 object-cover rounded"
      />
    </div>
  );
}

export default RandomBookCard;
