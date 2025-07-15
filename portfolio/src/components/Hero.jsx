import React from "react";
import picture from "../assets/mypic.png";

function Hero() {
  return (
    <div className="top-0 left-0 flex bg-black justify-center grid-background w-full min-h-[90vh]">
      <div className="w-[90%] flex py-8 flex-col-reverse md:grid grid-cols-2 grid-rows-1">
        <div className="flex flex-col items-center min-h-[50vh] md:h-full justify-center md:items-start w-full ">
          <p className="text-white text-5xl my-8 ">
            Hi i'm{" "}
            <button className="p-4 text-4xl border-1 border-red-800 rounded-full cursor-pointer hover:scale-110 centered-shadow ">
              Jedidiah
            </button>{" "}
          </p>
          <p className="text-white text-4xl mb-4 ">a web developer</p>
          <p className="text-white px-12 md:px-0 text-center md:text-left ">
            I specialize in transforming complex designs into visually
            captivating, user-friendly websites that engage and inspire
            audiences.
          </p>
          <button
            className="my-4 p-3 cursor-pointer text-white hover:scale-105 bg-red-500 rounded-full font-semibold"
          >
            Download CV
          </button>
        </div>

        <div className="h-full w-full flex items-center justify-center ">
          <div className="w-[25rem] md:w-[30rem] md:h-[30rem] lg:w-[35rem] lg:h-[35rem] h-[25rem] border-1 centered-shadow overflow-hidden border-red-600 rounded-full ">
            <img src={picture} alt="" className="object-contain w-full h-full " />
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Hero;
