import { showProfile } from '@/actions/profile';
import Image from 'next/image';

const ProfilePage = async () => {
  const isApproved = await showProfile();

  return (
    <section className='relative max-w-6xl md:mx-auto mt-32 md:mt-56 mb-56 mx-6'>
      {isApproved ? (
        <div>Profile content goes here.</div>
      ) : (
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-custom-blue'>Estamos analizando tu perfil</h1>
          <p className='mt-4 text-lg md:text-xl text-custom-black'>Por favor, vuelve más tarde para verificar el estado de tu perfil.</p>
          <Image src="/gif/pending.gif" width={450} height={450} alt='Pending'/>
        </div>
      )}
    </section>
  );
}

export default ProfilePage;
