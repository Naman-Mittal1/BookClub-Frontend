import React, { useState} from 'react'
import axios from 'axios';

const AddComment = () => {

    const[comment, setComment] = useState("")
    const comments = [
        {
          username: 'User123',
          comment: 'This book was amazing! Highly recommended.',
          timestamp: '8 months ago',
        },
        {
          username: 'BookLover22',
          comment: "I couldn't put it down. A must-read.",
          timestamp: '7 months ago',
        },
        {
          username: 'MysteryFanatic',
          comment: 'The plot twists kept me on the edge of my seat.',
          timestamp: '6 months ago',
        },
      ];


        const addComment = async (event) => {
            console.log(window.localStorage.userID)
            event.preventDefault();
          try {
           await axios.post("http://localhost:5000/api/books/comments",{
            comment,
            userID: window.localStorage.userID
           })

           return 

          } catch (error) {
            console.error('Error Adding Comment!', error);
          }
        };

  return (
    <div>
      <div className="mt-10 pt-4">
            <h3 className="text-2xl font-semibold border-b border-gray-700 pb-4  mb-5">Comments</h3>
            <ul className="">
              {comments.map((comment, index) => (
                <li key={index} className="py-5">
                  <p className="text-gray-400">
                    <span className="font-semibold">{comment.username} - </span>
                    <span className="text-gray-600">{comment.timestamp}</span>
                  </p>
                  <p className="text-gray-100">{comment.comment}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
    
        <form onSubmit={addComment} method="POST">
            <textarea
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      placeholder="Add a comment..."
      className="form-input py-4 focus:outline-none px-4 block w-full sm:text-base text-lg bg-gray-800 text-gray-200 border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
      rows="3" 
    ></textarea>

            <button type='submit' className="mt-4 bg-blue-900 text-white py-2 px-4 my-5 rounded hover:bg-blue-800">
              Comment
            </button>
        </form>
          </div>
      </div>
  )
}

export default AddComment