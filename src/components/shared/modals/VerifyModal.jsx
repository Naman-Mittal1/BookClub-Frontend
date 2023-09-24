import React from "react";

const VerifyModal = ({ isOpen, onRequestClose }) => {
  return (
    <>
      {isOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-25 backdrop-blur">
    <div className="bg-gray-900 p-8 rounded-lg max-w-md relative">
      <button
        onClick={onRequestClose}
        className="absolute top-2 right-2 text-white text-lg cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="text-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto text-blue-600 mb-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 17a1 1 0 01-1-1v-3a1 1 0 112 0v3a1 1 0 01-1 1zm0-6a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zM10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 6.414 5.707 11.707a1 1 0 01-1.414-1.414l6-6z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-xl font-semibold mb-2">Check Your Email</h2>
        <p className="text-md mb-6">
          We've sent a verification email to your registered email address. Please follow the instructions in the email to verify your account.
        </p>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default VerifyModal;
