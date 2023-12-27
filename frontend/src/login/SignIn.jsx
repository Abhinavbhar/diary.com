import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Signup() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend
      const response = await axios.post('http://localhost:3000/login', {
        username: username,
        password: password,
      });
      localStorage.setItem('username', response.data.user.username);
      const storedValue = localStorage.getItem('username');


      alert("login successfull")
      navigate('/dashboard')
    }


    catch (error) {
      console.error('Error:', error.data);
    }
  };


  const handleOnclickSignIn = () => {
    navigate('/signin')
  }

  return (
    <>
      <Navbar></Navbar>
      <span>use these in Sign In if you dont want to signUp <br />
        username-"u",
        password-"p"  <br />{`(please dont delete any default entries)`}
      </span>
      <div className='h-full w-full absolute flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full md:w-3/5 h-full md:h-4/5 bg-[#21BF73] flex flex-col justify-center items-center text-white'>
          <span className='text-3xl md:text-4xl mt-8 self-center'>
            Hello Friend
          </span>
          <span className='mt-4 text-center md:text-left'>
            Sign up to create your personal diary on Diary.com
          </span>
          <button className='border-2 w-32 md:w-40 p-2 text-sm md:text-base mt-8 md:mt-16 rounded-full h-12 md:h-16' onClick={handleOnclickSignIn}>
            Sign Up
          </button>
        </div>
        <div className='w-full md:w-2/5 h-full md:h-4/5 bg-[#FFE5E5] flex flex-col justify-center items-center mt-4 md:mt-0'>
          <span className='text-3xl md:text-4xl self-center mt-8 text-[#21BF73] mb-6'>
            Sign In
          </span>
          <div className="flex flex-col items-center">
            <div className="input-group mb-4">
              <span className="icon absolute">
                <MdEmail />
              </span>
              <input
                type="username"
                placeholder="Username"
                value={username}
                onChange={handleEmailChange}
                className="pl-10 border rounded-md py-2 px-3 w-full md:w-80 max-w-xs"
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
                className="pl-10 border rounded-md py-2 px-3 w-full md:w-80 max-w-xs"
              />
            </div>
            <button onClick={handleSignIn} className="sign-in-btn bg-green-500 text-white rounded-full p-3 md:p-4 w-28 md:w-40 mt-8 md:mt-12">
              Sign In
            </button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Signup