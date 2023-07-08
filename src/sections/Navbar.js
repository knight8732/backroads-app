import React from 'react'
import logo from '../images/logo.svg'
import PageLinks from '../components/PageLinks'
import { socialLinks } from '../data'
import SocialLink from '../components/SocialLink'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <PageLinks parentClass='nav-links' itemClass='nav-link' />
        <ul className='nav-icons'>
          {socialLinks.map((social) => {
            const { id, href, icon } = social
            return <SocialLink key={id} href={href} icon={icon} />
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
