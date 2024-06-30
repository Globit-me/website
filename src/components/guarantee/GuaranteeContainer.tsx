import React from 'react'
import GuaranteeList from './GuaranteeList'
import AnimatedTitle from '../form/AnimatedTitle'
import GuaranteeText from './GuaranteeText'
import Image from 'next/image'
import Link from 'next/link'

const GuaranteeContainer = () => {
  return (
    <section className="relative max-w-6xl md:mx-auto mt-40 mb-40 md:mt-56 md:mb-56 mx-6">
      <div>
        <AnimatedTitle title="Garantía" /> 
        <div className='flex flex-col md:flex-row justify-evenly mb-16  mx-6 md:mx-0 items-center'>
            <GuaranteeText title="En Globitme, Te brindamos seguridad a traves de nuestra garantia" color="black" />
            <Image
            src="/guarantee/panel_seguridad.avif"
            alt="Guarantee"
            width={500}
            height={500}
          
          />
        </div>
        <GuaranteeText title="Te protegemos contra: "  /> 
      </div>
      <GuaranteeList  />
      <div className='my-16 text-2xl text-pretty font-semibold'>
        <h2>La garantía se aplica solo al intercambio de saldos si sigues todos los pasos y cumples nuestros <Link className='text-blue-700 hover:border-b-2 hover:border-blue-700' href="/terms">terminos y condiciones</Link> del sitio.</h2>
      </div>
    </section>
  )
}

export default GuaranteeContainer