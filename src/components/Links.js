import React from 'react'

const Links = ({ href, text, itemClass }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {' '}
        {text}{' '}
      </a>
    </li>
  )
}

export default Links
