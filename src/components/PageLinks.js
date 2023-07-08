import React from 'react'
import { pageLinks } from '../data'
import Links from './Links'
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        const { id, href, text } = link
        return <Links key={id} href={href} text={text} itemClass={itemClass} />
      })}
    </ul>
  )
}

export default PageLinks
