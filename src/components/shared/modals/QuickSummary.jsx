import React from 'react';
import './modalCss.css'

const QuickSummary = ({ isOpen, onRequestClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-bg">
        <div className="modal-content bg-blue-500 text-white">
          <h2 className="text-2xl font-semibold mb-4">Quick Summary</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Introduction</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in venenatis urna. Nulla facilisi.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Main Points</h3>
            <ul className="list-disc pl-4">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Sed in venenatis urna</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Conclusion</h3>
            <p>
              In summary, the main points discussed in the book are essential for understanding the subject.
            </p>
          </div>
          <button onClick={onRequestClose} className="text-white bg-blue-700 rounded-full px-4 py-2 mt-4 hover:bg-blue-800 focus:outline-none">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickSummary;
