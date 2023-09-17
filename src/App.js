import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import BrowseBooks from './components/BrowseBooks/BrowseBooks';
import BookUpload from './pages/BookUpload';
import BookDetails from './components/BookDetails/BookDetails';

import { useCookies } from 'react-cookie';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Feeds from './components/Feeds/Feeds';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ExplorePage from './pages/ExplorePage';
import GenrePage from './pages/GenrePage';
import ChatPage from './pages/ChatPage.jsx';
import JoinPage from './pages/JoinPage';


const App = () => {
 const [cookies,] = useCookies(["access_token"])

  const ProtectedRoute = ({ element }) => {
  if (!cookies.access_token) {
    toast.error("You need to Login!", {
      position: "top-right",
      autoClose: 4000,
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
        <Route path="/feeds" element={<Feeds />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path="/explore/:genre" element={<GenrePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/community" element={<JoinPage />} />
        <Route path="/room/:id" element={<ProtectedRoute element={<ChatPage />} />} />
      </Routes>
      <ToastContainer />
      {/* <Footer /> */}
    </>
  );
}

export default App;
