import React from 'react';
import { useNavigate } from 'react-router-dom';


const EntryComponent = () => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/dashboard')
    alert("submit button")
  }
  return (
    <div className="h-screen flex flex-col justify-between ">
      {/* Title Box */}
      <div className="h-1/6 p-4 border border-gray-300 rounded ">
        <input
          type="text"
          className="w-full  px-2 py-1 mb-2 h-full text-3xl"
          placeholder="Title"
        />
      </div>
      {/* Description Box */}
      <div className="flex-1 border p-4">
        <textarea
          className="w-full h-full border border-gray-300 rounded px-2 py-1 mb-2 resize-none"
          placeholder="Description"
        ></textarea>
      </div>
      {/* Submit Button */}
      <div className="flex justify-center mb-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default EntryComponent;
