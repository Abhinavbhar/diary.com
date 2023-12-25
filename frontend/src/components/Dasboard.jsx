import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/dashboard');
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    // Fetch dashboard data when component mounts (on initial load)
    fetchDashboardData();
  }, []);
  return (
    <div className="mt-8">
      <div className="flex justify-end items-center mb-4 pr-4">
        <p className="mr-2">Click to Add</p>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-20"
          onClick={() => console.log('Add new diary entry')}
        >
          +
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {articles.map((entry, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <p className="text-gray-600 mb-2">{entry.date}</p>
              <h3 className="text-lg font-semibold mb-2">{entry.title}</h3>
              <p className="text-gray-600">
                {articles.description.substring(0, 90)}
                {articles.description.length > 90 && '...'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
