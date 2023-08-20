import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='p-8'>
    <h1 className='mb-20 mt-10 '>Atlas</h1>
    <nav className='flex flex-col gap-10'>
        
      <Link to='/'>Home</Link>
      <Link >Search</Link>
      <Link>Discover</Link>
      <Link>Notification</Link>
    </nav>
    </div>
  )
}