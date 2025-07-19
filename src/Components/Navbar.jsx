import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const {user, setShowLogin, logout, credit} = useContext(AppContext)
  const navigate = useNavigate();

  return (
    <header className="w-full border-b border-zinc-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-28 sm:w-32 lg:w-40"
          />
        </Link>
        {user ? (
          <div className='flex items-center gap-2 sm:gap-3'>
            <button className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
              <img className='w-5' src={assets.credit_star}></img>
              <p onClick={() => navigate('/buy')} className='text-xs sm:text-sm font-medium text-gray-600' > Credit Left:{credit}
              </p>
            </button>
            <p className=' text-gray-600 max:sm-hidden pl-4'>Hi, {user.name}</p>
            <div className='relative group'>
              <img src={assets.profile_icon} className='w-10 drop-shadow'></img>
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li onClick={logout} className='px-1 py-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <p  onClick={()=> navigate('/buy')} className='cursor-pointer'>
              Pricing</p>
              <button onClick={()=>setShowLogin(true)} className="bg-zinc-800 text-white px-4 py-2 sm:px-10 rounded-full hover:bg-zinc-700 transition"  >
                Login
              </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
