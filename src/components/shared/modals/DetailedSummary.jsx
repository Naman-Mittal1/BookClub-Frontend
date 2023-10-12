import React from 'react';
import './modalCss.css'

const DetailedSummary = ({ isOpen, onRequestClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-bg">
        <div className="modal-content">
          <h2 className="text-white text-2xl font-semibold mb-2">Detailed Summary</h2>
          {/* Add your detailed summary content here */}
          <button onClick={onRequestClose} className="text-white bg-blue-500 rounded px-4 py-2 mt-2">Close</button>
        </div>
      </div>
    </div>
  );
};

export default DetailedSummary;
