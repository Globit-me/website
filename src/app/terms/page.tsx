import React from 'react'
import Intro from './_components/Intro';
import Paragraph from './_components/Paragraph';
import termsData from './termData';

const TermsPage = () => {
  return (
    <>
        <Intro />
        {termsData.map((term, index) => (
            <Paragraph key={index} title={term.title} text={term.text} />
        ))}
    </>
  )
}

export default TermsPage;