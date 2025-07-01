import React from 'react'
import picture from "../assets/mypic.png"

function Hero() {
  return (
    <div className="top-0 left-0 flex bg-black justify-center grid-background w-full min-h-[90vh]">
      <div className='w-[90%] flex-col-reverse md:grid grid-cols-2 grid-rows-1'>

        <div className='w-[90%] md:w-full flex items-center justify-center md:h-full rounded-full '>
          <img src={picture} alt="" />
        </div>

        <div className='flex flex-col items-center min-h-[50vh] md:h-full justify-center md:items-start w-full '>
          <p className='text-white text-5xl my-8 '>Hi i'm <b className='p-3 rounded-full shadow-md shadow-red-400 bg-red-500'>Jedidiah</b> </p>
          <p className='text-white text-4xl mb-4 '>a web developer</p>
          <p className='text-white px-12 md:px-0 text-center md:text-left '>I specialize in transforming complex designs into visually captivating, user-friendly websites that engage and inspire audiences.</p>
          <button className=".
          cursor-pointer shadow-md shadow-red-400 text-white hover:scale-105 bg-red-500 p-2 rounded-full font-semibold">Download CV</button>
        </div>


        <div className=' w-full h-fit '></div>
      </div>
    </div>
    
  )
}

export default Hero
