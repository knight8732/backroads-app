import React from 'react'
import Title from '../components/Title'
import Service from '../components/Service'
import { services } from '../data'
function Services() {
  return (
    <section className='section services' id='services'>
      <Title title1='our' title2='services' />
      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service key={service.id} {...service} />
        })}
      </div>
    </section>
  )
}

export default Services
