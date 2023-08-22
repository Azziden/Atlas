import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';

export default function Header() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='p-8 m-32 custom-font border-r border-gray-300 flex-grow flex-shrink'>
        <div>
          <h1 className='mb-20'>Atlas</h1>
          <nav className='flex flex-col gap-10'>
            <Link to='/' className='hover:font-bold'>Home</Link>
            <Link className='hover:font-bold'>Search</Link>
            <Link to='/discover' className='hover:font-bold'>Discover</Link>
            <Link className='hover:font-bold'>Notification</Link>
          </nav>
        </div>
        <div className='text-center mt-28'>
          <span className='text-gray-500'>Username</span>
        </div>
      </div>
    </div>

  );
}