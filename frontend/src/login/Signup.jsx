import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = () => {
    // Implement sign-up logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };
  const navigate = useNavigate();
  const handleOnclickSignIn = () => {
    navigate('/signin')
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='h-full w-full absolute flex' >
        <div className='w-[30%] h-[70%] bg-[#21BF73] flex flex-col  mt-28 ml-40 text-white'>
          <span className='text-4xl mt-24 self-center'>
            Hello Friend
          </span>
          <span className='mt-4 ml-16 self-center w-[60%]'>
            Sign in to create your personal diary on Diary.com
          </span>
          <button className='border-2 w-40 p-2
          text-sm mt-16 self-center rounded-full h-16' onClick={handleOnclickSignIn}>
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
            <button onClick={handleSignUp} className="sign-in-btn bg-green-500 text-white rounded-full p-4 w-40
            mt-12">
              Sign Up
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Signup