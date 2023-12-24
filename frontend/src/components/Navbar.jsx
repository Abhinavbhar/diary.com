import React from 'react'
import logo from '../../public/logo.jpeg'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  const handleSignUp = () => {
    navigate('/signup')
  }
  const handleSignIn = () => {
    navigate('/signin')
  }
  const handleHome = () => {
    navigate("/")
  }
  return (
    <nav className="flex items-center justify-between bg-[#E1D7DF] p-4 w-full h-52 ">
      {/* Left side - Logo */}
      <div className="relative hover:cursor-pointer">
        <img
          src={logo} // Replace with your logo image URL
          alt="Logo"
          className="h-48 w-48 mr-2" onClick={handleHome}// Adjust the height and width as needed
        />
        <span className="text-red-900 font-semibold absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden text-2xl">Diary.com</span>
      </div>

      {/* Right side - Tabs */}
      <div className="flex items-center space-x-4 mr-8">
        <a href="#" className="text-red-900 text-2xl " >Features</a>
        <a href="#" className="text-red-900 text-2xl " onClick={handleSignIn}>Login</a>
        <a href="#" className="text-red-900 text-2xl " onClick={handleSignUp}>Signup</a>
      </div>
    </nav>
  );
}

export default Navbar