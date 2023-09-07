import React, {useState} from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
import FeedContent from './FeedContent';
// import { useCookies } from "react-cookie";

const Feeds = () => {

  const[feedText, setFeedText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = window.localStorage.getItem('userID')
    console.log(user)
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/feeds`, {
        text: feedText,
        user
      });
      toast.success("Posted Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setFeedText('')
    } catch (error) {
      toast.error("Error! Unable to post", {
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
  
  
  return (
<div className="flex justify-center mb-10">
  <div className="w-full max-w-5xl p-5  rounded-lg shadow-md">
    <form onSubmit={handleSubmit} className="w-full" method="POST">
      <div className="flex flex-col">
        <textarea
          className="w-full h-36 p-6 border border-gray-800 outline-none rounded-lg bg-gray-900 bg-opacity-50 text-white"
          value={feedText}
          onChange={(e) => setFeedText(e.target.value)}
          placeholder="Write your post here..."
        />
        <button
          type="submit"
          className="w-28 px-4 py-2 self-end bg-blue-700 text-white rounded-lg hover:bg-blue-800  mt-4"
        >
          Post
        </button>
      </div>
    </form>

    <FeedContent />
  </div>
</div>


  );
};
  export default Feeds