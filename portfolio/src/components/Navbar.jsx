import {Spiral as Hamburger} from 'hamburger-react'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='w-full bg-amber-500 h-12'>
      <nav className='w-full bg-gray-200 h-full '>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </nav>
    </div>
  )
}

export default Navbar