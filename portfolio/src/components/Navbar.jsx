import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="w-full flex items-center justify-center h-20">
        <nav className="h-[80%] w-[90%] flex justify-between items-center rounded-3xl px-4 bg-gray-400 ">
          <p className="font-bold text-white text-2xl ">JED</p>

          <ul className="md:flex gap-4 hidden">
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>

          <div className="md:hidden z-10 ">
            <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          </div>
        </nav>
      </div>

      {isOpen ? (
        <div className="w-full h-screen absolute top-0 bg-[#000000ec]">
          <ul className="text-white px-4 pt-24 ">
            <li className="py-6 w-full flex items-center justify-center border rounded-4xl my-4 border-gray-500 font-semibold text-2xl ">About Me</li>
            <li className="py-6 w-full flex items-center justify-center border rounded-4xl my-4 border-gray-500 font-semibold text-2xl ">Projects</li>
            <li className="py-6 w-full flex items-center justify-center border rounded-4xl my-4 border-gray-500 font-semibold text-2xl ">Contact</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
