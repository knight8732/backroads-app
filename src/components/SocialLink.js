import React from 'react'
const SocialLinks = ({ href, icon }) => {
  return (
    <li>
      <a href={href} target='_blank' rel='noreferrer' className='nav-icon'>
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLinks
