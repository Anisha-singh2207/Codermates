// import React from 'react'
// import {Link} from 'react-router-dom'
// import logo from '../../assets/logo.jpg';
// import './Header.css'


 
import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.jpeg'
import './Header.css'
const Header = () => {
  return (
    <div className='main-container'>
    {/* logo */}
    <div className='logo-container'>
      <img src={logo} alt="" className='logo' />
    </div>

   {/* nav links */}
   <div className="menus">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/branches">Branches</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/faq">FAQ</Link>
      </div> 
    
    </div>
     
     
  )
}

export default Header