import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900  bottom-0 fixed   text-white w-full none">
      <div className="py-6 ml-20 mx-auto px-3 bg-gray-900 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} BookClub Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
