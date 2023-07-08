import React from 'react'
import PageLinks from '../components/PageLinks'
import SocialLinks from '../components/SocialLink'
import { socialLinks } from '../data'
function Footer() {
  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link' />
      <ul className='footer-icons'>
        {socialLinks.map((social) => {
          const { id, href, icon } = social
          return <SocialLinks key={id} href={href} icon={icon} />
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
