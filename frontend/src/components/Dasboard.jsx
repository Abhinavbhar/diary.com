import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [dataEntry, setDataEntry] = useState({ articles: { titles: [], descriptions: [], dates: [] } });
  const storedUsername = localStorage.getItem('username');
  const navigate = useNavigate();

  const fetchDashboardData = async () => {
    try {
      if (storedUsername) {
        const response = await axios.get(`http://localhost:3000/dashboard?username=${storedUsername}`);
        console.log('Dashboard data:', response);
        setDataEntry(response.data.diaryEntry); // Assuming the response contains a 'diaryEntry' object
      } else {
        console.error('Username not found in storage');
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handlePlusClick = () => {
    navigate('/addnewentry');
  };

  const fetchDataAndRefresh = async () => {
    await fetchDashboardData();
  };

  const onClickDelete = async (index, event) => {
    event.preventDefault();

    try {
      const storedUsername = localStorage.getItem('username');
      const response = await axios.delete("http://localhost:3000/deleteByIndex", {
        data: {
          username: storedUsername,
          date: dataEntry.articles.dates[index]
        }
      });

      console.log(response.data); // Log the response data if needed

      // If the deletion was successful, update the UI by refreshing the articles
      if (response.status === 200) {
        // Call the function to refetch articles and update state
        await fetchDataAndRefresh();
      }

      // Perform additional actions based on the response if required
    } catch (error) {
      console.error('Error:', error.response); // Log any errors or response data
    }
  };

  return (

    <div className="mt-8">
      <div className="mt-8">
        <div className="flex justify-end items-center mb-4 pr-4">
          <p className="mr-2">Click to Add</p>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-20"
            onClick={handlePlusClick}
          >
            +
          </button>
        </div></div>

      {/* Other components and elements */}
      <div className="flex flex-wrap justify-center">
        {dataEntry.articles.titles.map((title, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <p className="text-gray-600 mb-2">{dataEntry.articles.dates[index]}</p>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">
                {dataEntry.articles.descriptions[index].length > 90
                  ? `${dataEntry.articles.descriptions[index].substring(0, 90)}...`
                  : dataEntry.articles.descriptions[index]}
              </p>
              <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-12' onClick={(event) => onClickDelete(index, event)} value={index}>
                Delete Entry
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
