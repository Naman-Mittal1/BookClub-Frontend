import React from "react";

const FooterUn = () => {
  return (
    <footer className="bg-gray-900 bottom-0 w-full text-white">
      <div className="container  mx-auto px-3 py-3 sm:py-5 flex justify-between items-center flex-wrap">
        <div className="w-full text-center md:text-left text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} BookMates Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default FooterUn;
