
import { AnimatedTitle } from '@/components';
import GuaranteeContainer from '@/components/guarantee/GuaranteeContainer';
import GuaranteeText from '@/components/guarantee/GuaranteeText';
import Image from 'next/image';
import React from 'react'

const GuaranteePage = () => {
  return (
    <section className="relative max-w-6xl md:mx-auto mt-40 mb-40 md:mt-56 md:mb-56 mx-6">
        <AnimatedTitle title="Garantía" />    
        <div className='flex flex-col md:flex-row justify-evenly mb-16  mx-6 md:mx-0 items-center'>
          <GuaranteeText title="En Globitme, Te brindamos seguridad a traves de nuestra garantia" color="black" />
          <Image
          src="/guarantee/panel_seguridad.svg"
          alt="Guarantee"
          width={500}
          height={500}
          
        />
        </div>
        <GuaranteeText title="Te protegemos contra: "  /> 
        <GuaranteeContainer />
    </section>
  )
}

export default GuaranteePage;