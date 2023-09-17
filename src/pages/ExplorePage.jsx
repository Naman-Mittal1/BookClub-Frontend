import React from 'react';
import { Link } from 'react-router-dom';
import { Tilt } from "react-tilt";
import FooterUn from '../components/Footer/FooterUn';

const ExplorePage = () => {
  const genres = [
    'Romance',
    'Finance',
    'Business',
    'Coding',
    'Data Science',
    'Notes',
    'Self-Help',
    'Thriller',
    'Crime',
    'Science-Fiction',
    'Biography',
    'Psychology',
    'Personal-Development',
    'Fantasy',
    'Poetry',
    'Spirituality',
  ];

  return (
    <>
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mt-5 text-center opacity-80 mb-10 text-white">Explore Genres</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {genres.map((genreItem, index) => (
          <Link key={index} to={`/explore/${genreItem}`} className="text-white">
            <Tilt
              className="Tilt bg-gray-900 rounded-lg overflow-hidden shadow-md"
              options={{ max: 25, scale: 1.05 }}
              style={{ height: '100%' }} // Added height style
            >
              <div className="Tilt-inner p-4 h-16 flex justify-center my-20"> {/* Added h-full to make it occupy full height */}
                <h3 className="text-xl font-semibold">{genreItem}</h3>
              </div>
            </Tilt>
          </Link>
        ))}
      </div>
    </div>
    <FooterUn />
    </>
  );
};

export default ExplorePage;