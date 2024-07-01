import Image from 'next/image';

const Pending = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-custom-blue'>Estamos analizando tu perfil</h1>
          <p className='mt-4 text-lg md:text-xl text-custom-black'>Por favor, vuelve más tarde para verificar el estado de tu perfil.</p>
          <Image src="/gif/pending.gif" width={450} height={450} alt='Pending'/>
        </div>
  )
}

export default Pending