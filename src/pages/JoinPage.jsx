import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RoomList from '../components/RoomList/RoomList';
import FooterUn from '../components/Footer/FooterUn';
import { useCookies } from 'react-cookie';


const JoinRoom = () => {
  const [cookies,] = useCookies(["access_token"])
  
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    try {
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
        return;
      }

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/rooms`, {
        name: name, 
      });

      if (response.status === 201) {
        const data = response.data;
        toast.success("Room Created Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate(`/room/${data._id}`);
      } else {
        console.error('Failed to create room');
      }
    } catch (error) {
      console.error('Error creating room:', error.response?.data || error.message);
      toast.error("Room Already Exist", {
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

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
  <div className="bg-transparent p-4 md:p-8 rounded shadow-lg w-full max-w-md">
    <h1 className="text-2xl font-semibold mb-4 text-center">Create a New Room</h1>
    <form onSubmit={handleCreateRoom}>
      <div className="mb-4">
        <label htmlFor="roomName" className="block text-gray-300">Room Name:</label>
        <input
          type="text"
          id="roomName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Create Room
        </button>
      </div>
    </form>
  </div>
  
  {/* List of Rooms */}
  <RoomList />
  <FooterUn />
</div>
  );
};

export default JoinRoom;
