import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const RegisterModal = ({ isOpen, onRequestClose, onLoginClick, onVerifyClick }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate()

  const handleLoginClick = () => {
    onRequestClose()
    onLoginClick()
    // isOpen();
  }

  const handleContinueClick = () => {
    onRequestClose()
    onVerifyClick()
    // isOpen();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
        name,
        username,
        email,
        password,
      });
      onRequestClose()
      navigate("/")
      toast.success("Registration Completed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      handleContinueClick();
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error(error);
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
        {isOpen && <div className=" fixed inset-0 bg-opacity-25 backdrop-blur"></div>}
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } inset-0 flex items-center justify-center z-50`}  style={{margin: "auto"}}
    >
      <div className="bg-gray-900 p-8 rounded-lg relative lg:w-2/4 xl:1/3 max-w-lg">
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-white text-lg cursor-pointer"
        >
          X
        </button>
        <h2 className="text-white text-xl mb-2 text-center pb-3">Register</h2>
        <p className="text-white text-md mb-6">Welcome to Book Club!</p>
        <form onSubmit={handleSubmit}>

         <label htmlFor="name" className="text-white block mb-1">
            
            </label>
            <input
              type="text" 
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 outline-none bg-gray-800 text-white rounded mb-3"
            />

          <label htmlFor="username" className="text-white block mb-1">
            
          </label>
          <input
            type="text" 
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 outline-none bg-gray-800 text-white rounded mb-3"
          />

          <label htmlFor="email" className="text-white block mb-1">
            
          </label>
          <input
            type="email" 
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 outline-none bg-gray-800 text-white rounded mb-3"
          />

          <label htmlFor="password" className="text-white block mb-1">
            
          </label>
          <div className="flex">
  <div className="relative w-full">
    <input
      type={passwordVisible ? "text" : "password"}
      id="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full p-3 outline-none bg-gray-800 text-white rounded mb-4 pr-12 outline-none" // Add 'pr-10' for right padding
    />
    <span
      onClick={togglePasswordVisibility}
      className="absolute top-4 right-4 text-white text-lg cursor-pointer"
    >
      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>
</div>
          <button
            type="submit"
            className="bg-blue-800 text-white px-4 mt-3 py-2 rounded hover:bg-blue-900 w-full mb-2"
          >
            Continue
          </button>
        </form>
        <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-2 font-large text-sky-500 -translate-x-1/2 bg-gray-900 left-1/2 ">
              OR
            </span>
          </div>
        <button className="flex gap-2 justify-center bg-transparent border-2 border-white text-white px-4 py-2 rounded hover:bg-gray-800 w-full mb-4">
        <svg className="h-5 align-middle w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
          Continue with Google
        </button>
        <p className="text-white text-sm text-center mt-2">
          Already Have an account? <Link to='/' className="text-blue-600 font-bold" onClick={handleLoginClick}>Sign in</Link>
        </p>
      </div>
    </div>
    </>

  );
};

export default RegisterModal;
