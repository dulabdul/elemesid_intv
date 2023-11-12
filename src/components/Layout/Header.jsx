import Image from 'next/image';
import Link from 'next/link';

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
          <a
            href='/'
            className='w-full px-4 py-3 rounded-full bg-primary text-white'>
            Daftar Sekarang
          </a>
        </div>
      </nav>
    </header>
  );
}
