import React, { useState } from 'react';
import { addBook } from '../api/books';
import { toast } from 'react-toastify';

const BookUpload = () => {

  const availableGenres = [
    'Romance',
    'Mystery',
    'Thriller',
    'Crime',
    'Science Fiction',
    'Horror',
    'Adventure',
    'History',
    'Non-fiction',
    'Biography/Autobiography',
    'Self-Help',
    'Psychology',
    'Personal Development',
    'Fantasy',
    'Poetry',
    'Spirituality',
  ];

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genres: [],
    description: '',
    image: '',
    year: '',
    downloadLink: ''
  });
  // const [searchInput, setSearchInput] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);


  
 
  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'genre') {
      // Toggle the selected genre in the list
      setSelectedGenres((prevSelectedGenres) => {
        if (prevSelectedGenres.includes(value)) {
          // Genre is already selected, remove it
          return prevSelectedGenres.filter((genre) => genre !== value);
        } else {
          // Genre is not selected, add it
          return [...prevSelectedGenres, value];
        }
      });
    } else {
      // Handle other form field changes as before
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  

  const handleSubmit = async event => {
    event.preventDefault();

    try {
        await addBook(formData);  
        toast.success("Book added successfully.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setFormData({
          title: '',
          author: '',
          genre: '',
          description: '',
          image: '',
          year: '',
          downloadLink: ''
        });
      } catch (error) {
        console.error('Error:', error);
        toast.error("Error adding book", {
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
    <div className="bg-dark h-auto mt-8 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl mb-4">Add New Book</h2>
        <form className=' mb-20 sm:mb-2' onSubmit={handleSubmit}>
          <label className="text-white">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-2 text-white"
            required
          />

          <label className="text-white">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-2 text-white"
            required
          />

          {/* <label className="text-white">Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-2 text-white"
            required
          /> */}

<div className="mb-2">
  {selectedGenres.map((genre) => (
    <span
      key={genre}
      className="inline-block bg-blue-800 text-white rounded-full px-3 py-2 my-1 text-sm mr-2"
    >
      {genre}{' '}
      <button
        onClick={() => handleChange({ target: { name: 'genre', value: genre } })}
        className="ml-2 text-red-500 hover:underline"
      >
        X
      </button>
    </span>
  ))}
</div>

<label className="text-white">Genre</label>
<select
  name="genre"
  value=""
  onChange={handleChange}
  className="w-full bg-gray-700 rounded-md p-2 mb-2 text-white"
  
>
  <option value="" disabled>
    Select a genre
  </option>
  {availableGenres
    .filter((genre) => !selectedGenres.includes(genre)) 
    .map((genre) => (
      <option key={genre} value={genre}>
        {genre}
      </option>
    ))}
</select>
          <label className="text-white">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-2 text-white"
            required
          ></textarea>

          <label className="text-white">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-2 text-white"
            required
          />

          <label className="text-white">Year</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-4 text-white"
            required
          />

          <label className="text-white">Enter Download Link: </label>
          <input
            type="text"
            name="downloadLink"
            value={formData.downloadLink}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-4 text-white"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookUpload;


