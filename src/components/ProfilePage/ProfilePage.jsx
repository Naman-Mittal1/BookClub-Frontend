import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';

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
    <>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-gray-400 p-6 rounded-lg shadow-lg">
          {userID ? (
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 underline" style={{ fontFamily: "Courgette" }}>Profile Info</h2>
              <div className="mb-4">
                <p className="text-lg text-gray-900">
                  <span className="font-semibold">Name:</span> {userData.name}
                </p>
                <p className="text-lg text-gray-900">
                  <span className="font-semibold">Username:</span> {userData.username}
                </p>
                <p className="text-lg text-gray-900">
                  <span className="font-semibold">Email:</span> {userData.email}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-lg text-gray-700">Please log in to view your profile.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
