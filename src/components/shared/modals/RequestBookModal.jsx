import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


const RequestBookModal = ({ isOpen, onRequestClose }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [additionalComment, setAdditionalComment] = useState("");

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setYear("");
    setAdditionalComment("");
  };
  const navigate = useNavigate()

  const handleRequestSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/books/request`, {
        title,
        author,
        year,
        additionalComment
      });
      toast.success("Book Request Added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      resetForm();
      navigate("/")
      onRequestClose();
    } catch (error) {
      
      toast.error("Book is Already Requested..", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onRequestClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onRequestClose]);

  return (
    <>
    {isOpen && <div className="fixed inset-0 bg-opacity-25 backdrop-blur"></div>}
    <div style={{margin: "0"}}
      className={`${
        isOpen ? "fixed m-0" : "hidden"
      } inset-0 flex items-center justify-center z-50`}
    >
      <div className="bg-gray-900 p-8 rounded-lg relative w-full lg:w-1/3 xl:1/3 max-w-lg">
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-white text-lg cursor-pointer"
        >
          X
        </button>
        <h2 className="text-white text-xl  font-semibold mb-2 text-center pb-3">Request a Book</h2>
        <p className="text-white text-md mb-6">request!</p>
        <form onSubmit={handleRequestSubmit} method="POST">
          <label htmlFor="title" className="text-white block mb-1">
            
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white rounded mb-3"
          />
          <label htmlFor="author" className="text-white block mb-1">
            
            </label>
            <input
              type="text"
              id="author"
              placeholder="Enter book author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded mb-3"
            />

            <label htmlFor="year" className="text-white block mb-1">
            
            </label>
            <input
              type="number"
              id="year"
              placeholder="Enter year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded mb-3"
            />

            <label htmlFor="additionalComment" className="text-white block mb-1">
            
            </label>
            <textarea
              rows={5}
              type="text"
              id="additionalComment"
              placeholder="Enter additional comments"
              value={additionalComment}
              onChange={(e) => setAdditionalComment(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded mb-3"
            />


          <button
            type="submit"
            className="bg-blue-800 text-white px-4 mt-3 py-2 rounded hover:bg-blue-900 w-full mb-2"
          >
            Continue
          </button>
        </form>
        <p className="text-white text-sm text-center mt-5">
          Want to Explore different Genre? <Link to={'/'} >Click Here</Link>
        </p>       
      </div>
    </div>
    </>

  );
};

export default RequestBookModal;
