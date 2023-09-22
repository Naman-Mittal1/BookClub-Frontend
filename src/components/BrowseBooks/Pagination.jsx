import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
  
    const handlePrev = () => {
      if (prevPage >= 1) {
        onPageChange(prevPage); 
      }
    }
  
    const handleNext = () => {
      if (nextPage <= totalPages) {
        onPageChange(nextPage);
      }
    }
  
    return (
        <div className="flex justify-end items-center py-3">
  <button
    className="text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-l disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
    disabled={currentPage === 1}
    onClick={handlePrev}
  >
    Prev
  </button>

  <span className="text-white mx-4 text-sm sm:text-base">
    Page {currentPage} of {totalPages}
  </span>

  <button
    className="text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-r disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
    disabled={currentPage === totalPages}
    onClick={handleNext}
  >
    Next
  </button>
</div>

      
    );
  }
  
export default Pagination