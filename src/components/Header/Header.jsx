import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import AuthModal from "./AuthModal";
import RequestModal from "./RequestModal";
import DropdownMenu from "./DropdownMenu";
import { toast } from 'react-toastify';

import axios from 'axios';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cookies, setCookies] = useCookies(["access_token"]);

  const [userData, setUserData] = useState({});
  const userID = window.localStorage.getItem('userID');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user?userID=${userID}`);
        const data = response.data;
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (userID) {
      fetchUserData();
    }
  }, [userID]);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    toast.success("Logout Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigate("/");
  };

  const options = [
    { label: `Hey ${userData.username}! 🥳`, href: '/profile' },
    // { label: 'My Profile', href: '' },
    { label: 'My Book Requests', href: '/book-requests' },
    { label: 'LogOut', href: '/' },
  ];

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <div>
          <Link
            to="/"
            className="text-xl font-bold sm:text-2xl"
            style={{ fontFamily: "'Courgette', cursive" }}
          >
            BookMates
          </Link>
        </div>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav
          className={`${
            isMenuOpen ? "flex mt-3" : "hidden"
          } lg:flex lg:items-center w-full lg:w-auto flex-col lg:flex-row lg:space-x-4`}
        >
          <Link to="/browse-books"
            onClick={closeMenu}
            className="lg:px-4 py-2 block text-sm lg:text-base hover:text-gray-300"
          >
            Browse Books
          </Link>

          <Link to="/explore" 
            onClick={closeMenu}
            className="lg:px-4 py-2 block text-sm lg:text-base hover:text-gray-300"
          >
            Explore
          </Link>

          <Link to="/community" 
            onClick={closeMenu}
            className="lg:px-4 py-2 block text-sm lg:text-base hover:text-gray-300"
          >
            Community
          </Link>

          <Link to="/feeds" 
            onClick={closeMenu}
            className="lg:px-4 py-2 block text-sm lg:text-base hover:text-gray-300"
          >
            Feeds
          </Link>

          <Link to="/upload" 
            onClick={closeMenu} 
            className="lg:px-4 py-2 block text-sm lg:text-base hover:text-gray-300"
          >
            Upload a Book
          </Link>

          <div className="lg:hidden flex flex-col gap-2">
          {!cookies.access_token ? (
            ""
          ) : (
            <div className="flex gap-4 my-3">
            <RequestModal />
            <button
            className="bg-blue-800 hover:bg-blue-600 w-max lg:flex py-2 px-4 rounded text-sm"
            onClick={logout}
          >
            LogOut
          </button>
            </div>
            
          )}

          {!cookies.access_token ? (
            <div className="mt-3">
              <AuthModal />
            </div>
          ) : (
            ""
          )}
        </div>
        </nav>

        <div className="hidden lg:flex lg:gap-4 gap-2">
          {!cookies.access_token ? (
            ""
          ) : (
            <RequestModal />
          )}
          {!cookies.access_token ? (
            <AuthModal />
          ) : (
            <>
            {/* <button
              className="bg-blue-800 hover:bg-blue-600 hidden lg:flex py-2 px-4 rounded text-sm"
              onClick={logout}
            >
              LogOut
            </button> */}
            <DropdownMenu options={options} logout={logout} />

            {/* <DropdownMenu  logout={logout} /> */}
            </>
          )}
        </div>

        {/* <div className="hidden lg:flex lg:gap-4">
          
          <button className="bg-blue-800 hover:bg-blue-600 py-2 px-4 rounded text-sm">
            Become a Member  
          </button>

          <button className="text-white hover:text-gray-300">
            Log In
          </button>

        </div> */}
      </div>
    </header>
  );
};

export default Header;
