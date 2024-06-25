
import { AnimatedTitle } from '@/components';
import GuaranteeContainer from '@/components/guarantee/GuaranteeContainer';
import GuaranteeText from '@/components/guarantee/GuaranteeText';
import React from 'react'

const GuaranteePage = () => {
  return (
    <section className="relative max-w-6xl md:mx-auto mt-40 mb-40 md:mt-56 md:mb-56 mx-6">
        <AnimatedTitle title="Garantía" />    
        <GuaranteeText /> 
        <GuaranteeContainer />
    </section>
  )
}

export default GuaranteePage;