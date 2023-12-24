import React from 'react'
import diary from '../../public/diary.png'
import { useNavigate } from "react-router-dom"




function Diary() {
  const navigate = useNavigate();
  const handleOnclickGetStarted = () => {

    navigate('/Signin')
  }
  return (
    <>
      <div className='flex  bg-gradient-to-r from-[#F1EAFF] via-[#DCBFFF] to-[#D0A2F7]'>
        <div className='z-10'>
          <img src={diary} alt="" srcSet="" />
        </div>
        <div className='w-[50%] flex flex-col mt-32'>
          <span className='text-4xl '>this is your web diary</span>
          <span className='text-3xl mt-16'>Login from anywhere and write anything, leave the managing thing to us ...</span>
          <button
            type="button"
            className="bg-[#EC8F5E] w-32 h-16 text-2xl mt-8 rounded" onClick={handleOnclickGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}

export default Diary