import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta items-center mx-auto max-w-screen-xl md:grid xl:gap-16 md:grid-cols-2 flex flex-col content-between w-full">
        <p className='text-white font-bold text-xl'>Have a project in mind? <br className='sm:block hidden' />
        Let's build something together! </p>
        <Link to='/contact' className='btn'>Contact</Link>
    </section>
  )
}

export default CTA