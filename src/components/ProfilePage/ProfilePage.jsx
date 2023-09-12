import { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
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

  return (
    <div className="text-white flex justify-center items-center h-screen m-auto">
    <div className="container mx-auto p-6 rounded-lg shadow-md sm:w-full md:w-2/3 lg:w-1/2">
      {userID ? (
        <div>
          <h2 className="text-3xl font-semibold mb-4">Profile</h2>
          <div className="mb-4">
            <p className="text-lg">
              <span className="font-semibold">Name:</span> {userData.name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Username:</span> {userData.username}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {userData.email}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-lg">Please log in to view your profile.</p>
      )}
    </div>
  </div>
  );
};

export default ProfilePage;
