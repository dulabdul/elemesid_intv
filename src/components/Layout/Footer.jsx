'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';

export default function Footer() {
  let Links = [
    { name: 'About', link: '/' },
    { name: 'Blog', link: '/' },
    { name: 'Contact Us', link: '/' },
    { name: 'Masuk', link: '/' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <footer className='footer container mx-auto px-7 w-full md:py-16'>
      <div className='hidden md:block footer_wrapper bg-[#F9FFF6] rounded-[20px] px-11 py-8'>
        <div className='footer_wrapper grid grid-cols-12'>
          <div className='footer_wrapper_content flex flex-col gap-3 col-start-1 col-end-6'>
            <div className='footer_wrapper_content_logo'>
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
            <div className='footer_wrapper_content_address'>
              <p className='text-sm font-normal leading-5 text-textGray'>
                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
                Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                12950
              </p>
            </div>
            <div className='footer_wrapper_content_media_sosial flex flex-row gap-x-4'>
              <div className='group hover:bg-primary transition-all ease-in-out min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center'>
                <HiOutlineMail className='text-2xl text-primary group-hover:text-white transition-all ease-in' />
              </div>
              <div className='group hover:bg-primary transition-all ease-in-out min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center'>
                <BsTelephone className='text-2xl text-primary group-hover:text-white transition-all ease-in' />
              </div>
              <div className='group hover:bg-primary transition-all ease-in-out min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center'>
                <AiOutlineInstagram className='text-2xl text-primary group-hover:text-white transition-all ease-in' />
              </div>
            </div>
          </div>
          <div className='footer_wrapper_content flex flex-col gap-3 col-start-6 col-end-8'>
            <div className='footer_wrapper_content_name'>
              <p className='text-textDark font-medium leading-6 text-lg'>
                Category
              </p>
              <ul className='footer_wrapper_content_list pt-7 text-textGray font-normal text-sm flex flex-col gap-y-3'>
                <li>Cupcake</li>
                <li>Pizza</li>
                <li>Kebab</li>
                <li>Salmon</li>
                <li>Doughnut</li>
              </ul>
            </div>
          </div>
          <div className='footer_wrapper_content flex flex-col gap-3 col-start-8 col-end-10'>
            <div className='footer_wrapper_content_name'>
              <p className='text-textDark font-medium leading-6 text-lg'>
                About Us
              </p>
              <ul className='footer_wrapper_content_list pt-7 text-textGray font-normal text-sm flex flex-col gap-y-3'>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Report Problem</li>
              </ul>
            </div>
          </div>
          <div className='footer_wrapper_content flex flex-col gap-3 col-start-10 col-end-12'>
            <div className='footer_wrapper_content_name'>
              <p className='text-textDark font-medium leading-6 text-lg'>
                Newsletter
              </p>
              <p className='text-sm text-textGray leading-6 font-normal pt-7'>
                Get now free 50% discount for alll products on your first order
              </p>
              <div className='footer_wrapper_content_input flex pt-5'>
                <input
                  type='email'
                  placeholder='Your email address'
                  className='placeholder:text-black placeholder:text-sm placeholder:font-normal placeholder:leading-6 border border-black rounded-s-lg px-4 py-1 bg-transparent flex items-center max-w-[190px]'
                />
                <button
                  type='submit'
                  className='bg-primary text-white uppercase font-medium text-sm leading-6 p-2 rounded-e-lg'>
                  Send
                </button>
              </div>
              <div className='footer wrapper_content_media_sosial py-1'>
                <div className='flex items-center gap-x-1'>
                  <HiOutlineMail className='text-[20px] text-primary' />
                  <span className='text-sm font-normal leading-6'>
                    elemesid@gmail.com
                  </span>
                </div>
                <div className='flex items-center gap-x-1'>
                  <BsTelephone className='text-[20px] text-primary' />
                  <span className='text-sm font-normal leading-6'>
                    {' '}
                    0888 1111 2222{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='hidden md:block text-textGray text-[12px] font-normal leading-4 text-center uppercase pt-4'>
        © 2021 Elemes id. All rights reserved
      </p>
      <div className='xl:hidden flex justify-between'>
        <div className='footer_mobile items-center flex flex-col'>
          <Image
            src={'/images/icons/hamburger.png'}
            alt='Home Menu'
            width={40}
            height={40}
          />
          <p className='text-textGray font-normal text-sm leading-6'>Home</p>
        </div>
        <div className='footer_mobile items-center flex flex-col'>
          <Image
            src={'/images/icons/hamburger.png'}
            alt='Home Menu'
            width={40}
            height={40}
          />
          <p className='text-textGray font-normal text-sm leading-6'>
            Promotions
          </p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl flex items-center flex-col cursor-pointer md:hidden'>
          <p>
            {open ? (
              <ImCross />
            ) : (
              <Image
                src={'/images/icons/hamburger.png'}
                alt='Home Menu'
                width={40}
                height={40}
              />
            )}
          </p>
          <p className='text-textGray font-normal text-sm leading-6'>Others</p>
        </div>

        <ul
          className={`pb-6 absolute bg-primary top-0 left-0 z-10 w-full pl-9 transition-all duration-500 ease-in ${
            open ? 'top-[485%] ' : 'top-[-490px]'
          }`}>
          {Links.map((link) => (
            <li
              key={link.name}
              className='text-xl  my-7'>
              <a
                href={link.link}
                className='text-gray-800 hover:text-gray-400 duration-500'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
