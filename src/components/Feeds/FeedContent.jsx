import { useState, useEffect } from 'react';
import axios from "axios";


const FeedContent = () => {

  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/feeds`);
      const data = response.data;
      setFeeds(data.reverse());
    }
    fetchFeeds();
  }, [feeds]);
  
  return (
    
     <div className="space-y-4">
      {feeds.map((feed) => {
        const lines = feed.text.split('\n');
        return (
          <div key={feed._id} className="bg-gray-900 bg-opacity-70 py-6 px-8 md:py-10 md:px-10 mt-10 rounded-lg shadow-md text-white">
            <div className="flex justify-between items-center mb-2 md:mb-4">
              <h3 className="font-semibold text-blue-400">{feed.userName}</h3>
              <p className="text-xs text-gray-500">
                {new Date(feed.createdAt).toLocaleString()}
              </p>
            </div>
            <div className="mt-3 text-gray-300">
              {lines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default FeedContent;