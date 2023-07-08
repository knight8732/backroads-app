import React from 'react'
import Title from '../components/Title'
import { tours } from '../data'
import Tour from '../components/Tour'
function Tours() {
  return (
    <section className='section' id='tours'>
      <Title title1='featured' title2='tours' />
      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />
        })}
      </div>
    </section>
  )
}

export default Tours
