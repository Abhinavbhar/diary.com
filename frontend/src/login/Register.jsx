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
      <span>use these in Sign In if you dont want to signUp <br />
        username-"u",
        password-"p"  <br />{`(please dont delete any default entries)`}
      </span>
      <div className='h-full w-full absolute flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full md:w-3/5 h-3/4 md:h-4/5 bg-[#21BF73] flex flex-col justify-center items-center text-white'>
          <span className='text-3xl md:text-4xl mt-16 self-center'>
            Welcome Back
          </span>
          <span className='mt-4 text-center md:text-left w-2/3 md:w-[60%]'>
            Sign in to start writing your diary
          </span>
          <button className='border-2 w-32 md:w-40 p-2 text-sm md:text-base mt-16 md:mt-36 self-center rounded-full h-12 md:h-16' onClick={handleOnclickSignup}>
            Sign In
          </button>
        </div>
        <div className='w-full md:w-2/5 h-3/4 md:h-4/5 bg-[#FFE5E5] flex flex-col justify-center items-center mt-4 md:mt-0'>
          <span className='text-3xl md:text-4xl self-center mt-8 text-[#21BF73] mb-12'>
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
                className="pl-10 border rounded-md py-2 px-3 w-60 md:w-80"
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
                className="pl-10 border rounded-md py-2 px-3 w-60 md:w-80"
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
                className="pl-10 border rounded-md py-2 px-3 w-60 md:w-80"
              />
            </div>
            <button onClick={handleSignUp} className="sign-in-btn bg-green-500 text-white rounded-full p-3 md:p-4 w-28 md:w-40 mt-8 md:mt-12">
              Sign Up
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Sign