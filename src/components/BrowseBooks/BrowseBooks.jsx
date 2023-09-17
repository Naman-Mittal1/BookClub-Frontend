// BrowseBooks.jsx
import React from "react";

import SearchBar from "../shared/Searchbar/Searchbar";
import FooterUn from "../Footer/FooterUn";


const BrowseBooks = () => {

  return (
    <>
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <SearchBar />
      {/* <AllBooks /> */}
    </div>
    <FooterUn />
    </>
  );
};

export default BrowseBooks;
