import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaUser, FaLock } from 'react-icons/fa'; // Icons for username and password
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Sign() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // Added state for email
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => { // Added handler for email change
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend
      const response = await axios.post('http://localhost:3000/signup', {
        username: username,
        email: email, // Included email in the request payload
        password: password,
      });
      alert("registered successfully");
      console.log(response.data)
    } catch (error) {
      alert(error.response.data.message)
    }
  };

  const navigate = useNavigate();
  const handleOnclickSignup = () => {
    navigate('/signup');
  };

  return (
    <>
      <Navbar></Navbar>
      <div className='h-full w-full absolute flex' >
        <div className='w-[30%] h-[70%] bg-[#21BF73] flex flex-col  mt-28 ml-40 text-white'>
          <span className='text-4xl mt-24 self-center'>
            Welcome Back
          </span>
          <span className='mt-4 ml-16 self-center w-[60%]'>

            sign in to start writing your diary
          </span>
          <button className='border-2 w-40 p-2
          text-sm mt-36 self-center rounded-full h-16' onClick={handleOnclickSignup}>
            Sign In
          </button>

        </div>
        <div className='w-[40%] h-[70%] bg-[#FFE5E5] flex flex-col  mt-28 mr-40'>
          <span className='text-4xl self-center mt-8 text-[#21BF73] mb-12'>
            Sign Up
          </span>
          <div className="flex flex-col items-center">
            <div className="input-group mb-4">
              <span className="icon absolute">
                <FaUser />
              </span>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                className="pl-10 border rounded-md py-2 px-3 w-80"
              />
            </div>
            <div className="input-group mb-4">
              <span className="icon absolute">
                <MdEmail />
              </span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="pl-10 border rounded-md py-2 px-3 w-80"
              />
            </div>
            <div className="input-group mb-4">
              <span className="icon absolute">
                <FaLock />
              </span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="pl-10 border rounded-md py-2 px-3 w-80"
              />
            </div>
            <button onClick={handleSignUp} className="sign-in-btn bg-green-500 text-white rounded-full p-4 w-40 mt-12">
              Sign Up
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Sign