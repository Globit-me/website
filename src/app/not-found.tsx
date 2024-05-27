import Image from 'next/image'
import React from 'react'

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold mb-8'>Page Not Found</h1>
      <Image src="/not-found.gif" alt="404" width={500} height={500} />
    </div>
  )
}

export default Error
