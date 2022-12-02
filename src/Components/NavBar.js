import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="bg-[#061148] h-[70px] w-full fixed z-10 shadow-cardShadow flex justify-between items-center px-8">
      <Link to="/" className="w-[70%]">
        <h1 className='text-white text-4xl first-letter:text-[#ffb400] first-letter:font-["Courgette"] w-full'>
          Book App
        </h1>
      </Link>

      <Link to="/favourites">
        <p className='text-white font-["Courgette"] text-2xl'>Favorites</p>
      </Link>
    </div>
  );
}

export default NavBar