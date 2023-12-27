import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const EntryComponent = () => {
  const [titles, setTitles] = useState('');
  const [descriptions, setDescriptions] = useState('');
  const dates = new Date().toISOString(); // Convert date to string for sending

  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/addentry', {
        username: username,
        date: dates,
        title: titles,
        description: descriptions
      });
      console.log(response.data); // Log the response data if needed
      navigate('/dashboard');
      alert('Submitted successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      {/* Title Box */}
      <div className="h-1/6 p-4 border border-gray-300 rounded">
        <input
          type="text"
          className="w-full px-2 py-1 mb-2 h-full text-3xl"
          placeholder="Title"
          value={titles}
          onChange={(e) => setTitles(e.target.value)} // Handle title change
        />
      </div>
      {/* Description Box */}
      <div className="flex-1 border p-4">
        <textarea
          className="w-full h-full border border-gray-300 rounded px-2 py-1 mb-2 resize-none"
          placeholder="Description"
          value={descriptions}
          onChange={(e) => setDescriptions(e.target.value)} // Handle description change
        ></textarea>
      </div>
      {/* Submit Button */}
      <div className="flex justify-center mb-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EntryComponent;
