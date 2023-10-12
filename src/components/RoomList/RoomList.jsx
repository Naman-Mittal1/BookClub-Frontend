import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const RoomList = () => {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/rooms`);
        setRooms(response.data);
        setLoading(false);
      } catch (e) {
        console.error("Unable to fetch rooms", e);
      }
    }

    fetchRooms();

  }, []);


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mt-5 text-center opacity-80 mb-10 text-white">Room List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          <p>Loading rooms...</p>
        ) : (
          rooms.map((room, index) => (
            <Link key={room.id} to={`/room/${room._id}`}> 
              <div className="text-white">
                <div
                  className="bg-gray-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                  style={{ height: '100%' }}
                >
                  <div className="p-4 h-16 flex justify-center my-20">
                    <h3 className="text-xl font-semibold">{room.name}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default RoomList;
