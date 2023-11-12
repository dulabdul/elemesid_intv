import Image from 'next/image';
import Link from 'next/link';
import CustomButton from '../Button';

export default function Header() {
  return (
    <header className='container mx-auto p-7 w-full '>
      <nav className='flex items-center flex-row justify-between navbar'>
        <div className='navbar_logo'>
          <Link href={'/'}>
            <Image
              priority
              src={'/images/logo_elemes.png'}
              alt='Logo Elemes ID'
              width={150}
              height={40}
            />
          </Link>
        </div>
        <div className='navbar_button_sign_up'>
          <CustomButton
            type='link'
            isExternal
            target='_blank'
            isRoundedFull
            href='/'
            className='hidden xl:inline w-full px-4 py-3 font-medium text-sm leading-6  text-textDark'>
            Masuk
          </CustomButton>
          <CustomButton
            href='/'
            type='link'
            isExternal
            isPrimary
            isRoundedFull
            isHover
            className='w-full px-4 py-3 text-white'>
            Daftar Sekarang
          </CustomButton>
        </div>
      </nav>
    </header>
  );
}
