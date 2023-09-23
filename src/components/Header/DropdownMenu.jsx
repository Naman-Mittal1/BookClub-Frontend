import React, { useState, useRef, useEffect } from 'react';
import {BiSolidUser} from 'react-icons/bi'
import { Link } from 'react-router-dom';
const DropdownMenu = ({ options, logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative z-50 inline-block text-left">
      <div>
          <BiSolidUser onClick={toggleMenu}
          type="button"
          className="inline-flex justify-center border-none text-xl w-full rounded-md shadow-md px-4 py-2 h-full bg-gray-800 text-md font-medium text-white  hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"/>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800  ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <Link
                key={index}
                to={option.href}
                className=" px-4 py-3 text-sm text-white hover:bg-gray-900 hover:text-gray-200 flex items-center" // Use 'flex items-center' to align icon and label horizontally
                role="menuitem"
                onClick={() => {
                  if (option.label === 'Logout') {
                    logout(); 
                  }
                  closeMenu(); 
                }}
              >
                {option.icon}
                <span className='ml-2'>{option.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
