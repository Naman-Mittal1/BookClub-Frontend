import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Import the library's default styles
import './AudioBook.css'; 

const AudioBook = ({ bookId }) => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/books/${bookId}/audioChapters`);
        const data = response.data; 
        setChapters(data);
      } catch (error) {
        console.error('Error fetching chapters:', error);
      }
    };

    fetchChapters();
  }, [bookId]);

  return (
    <div className="bg-transparent mt-20 text-gray-400 sm:p-6 rounded shadow-md">
      <ul className="list-none p-0">
        {chapters.map((chapter, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{chapter.title}</h3>
            <div className="premium-audio-player-container">
              <ReactPlayer
                className="premium-audio-player"
                src={chapter.audioUrl}
                controls
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioBook;
