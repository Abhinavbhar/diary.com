import React from 'react'
import diary from '../../public/diary.png'
import { useNavigate } from "react-router-dom"




function Diary() {
  const navigate = useNavigate();
  const handleOnclickGetStarted = () => {

    navigate('/')
  }
  return (
    <div className='flex flex-col bg-gradient-to-r from-[#F1EAFF] via-[#DCBFFF] to-[#D0A2F7]'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <img src={diary} alt="" className='w-full' />
        </div>
        <div className='w-full md:w-1/2 text-center mt-8'>
          <span className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>This is your web diary</span>
          <span className='text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4'>Login from anywhere and write anything, leave the managing thing to us ...</span>
          <button
            type="button"
            className="bg-[#EC8F5E] w-32 h-12 md:h-16 text-lg md:text-xl lg:text-2xl xl:text-3xl mt-6 rounded" onClick={handleOnclickGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>

  )
}

export default Diary