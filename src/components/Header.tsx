import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='header'>
      <div className='header1'>
        RADIYA KHAN</div>
      
      <nav className='header2'>
        <Link href={'/'}>Home</Link>
        <Link href={'#about'}>About</Link>
        <Link href={'#'}>Contact</Link>
      </nav>
      </div>
    </div>

    
  )
}

export default Header
