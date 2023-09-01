import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import BrowseBooks from './components/BrowseBooks/BrowseBooks';
import BookUpload from './pages/BookUpload';
import BookDetails from './components/BookDetails/BookDetails';

import { useCookies } from 'react-cookie';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
 const [cookies,] = useCookies(["access_token"])

  const ProtectedRoute = ({ element }) => {
    if (!cookies.access_token) {
      toast.error("You need to Login!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return <Navigate to="/" />;
      
    }
    return element;
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse-books" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/upload" element={<ProtectedRoute element={<BookUpload />} />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
