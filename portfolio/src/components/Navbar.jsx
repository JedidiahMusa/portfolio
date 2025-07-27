import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const year = Date.now;
  return (
    <>
      <div className="w-full pt-8 bg-black ">
        <nav className="h-16 w-[90%] mx-auto flex justify-between items-center rounded-3xl px-4 bg-white ">
          <p className="font-bold text-black text-2xl ">JED</p>
          <ul className="md:flex gap-4 hidden">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>

            <button className="hidden md:flex cursor-pointer shadow-md shadow-red-400 text-white hover:scale-105 bg-red-500 p-2 rounded-full font-semibold">Hire Me</button>
          
          <div className="md:hidden z-10 ">
            {isOpen ? (
              <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
            ) : (
              <Hamburger color="black" toggled={isOpen} toggle={setOpen} />
            )}
          </div>
        </nav>
      </div>

      {isOpen ? (
        <div className="w-full h-screen absolute top-0 bg-[#000000ec]">
          <ul className="text-white px-4 pt-24 ">
            <li className="py-6 w-full flex items-center justify-center border rounded-4xl my-4 border-gray-500 font-semibold text-2xl ">
              About Me
            </li>
            <li className="py-6 w-full flex items-center justify-center border rounded-4xl my-4 border-gray-500 font-semibold text-2xl ">
              Projects
            </li>
            <li className="py-6 w-full flex items-center justify-center border rounded-4xl my-4 border-gray-500 font-semibold text-2xl ">
              Contact
            </li>
             <li className="py-6 w-full flex items-center justify-center border rounded-4xl my-4 border-gray-500 font-semibold text-2xl ">
              Hire Me
            </li>
            <div className="py-6 w-full flex items-center justify-between px-20 my-4 border-gray-500 font-semibold text-2xl">
              <FaInstagram
                size={30}
                className="hover:scale-105 hover:text-gray-400 "
              />
              <FaXTwitter
                size={30}
                className="hover:scale-105 hover:text-gray-400 "
              />
              <FaLinkedin
                size={30}
                className="hover:scale-105 hover:text-gray-400 "
              />
              <IoIosMail
                size={30}
                className="hover:scale-105 hover:text-gray-400 "
              />
            </div>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
