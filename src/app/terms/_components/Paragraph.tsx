import React from 'react'

type ParagraphProps = {
  title: string;
  text: string;
}

const Paragraph = ({ title, text }: ParagraphProps ) => {
  return (
    <section className='max-w-6xl md:mx-auto mt-32 mb-32 mx-6 text-xl text-justify text-pretty leading-normal'>
        <h2 className='md:text-3xl text-xl font-semibold text-left mb-12'>{title}</h2>
        <p>{text}</p>
    </section>
  )
}

export default Paragraph