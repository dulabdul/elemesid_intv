import Image from 'next/image';
import React from 'react';
import CustomButton from '../Button';

export default function Hero() {
  return (
    <div className='container bg-cover bg-no-repeat bg-center w-full h-[100vh] xl:h-full mx-auto px-6 py-12 bg-[url("/images/bg_hero.png")]'>
      <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-[200px_minmax(400px)] md:grid-rows-3  items-start justify-between md:items-center hero'>
        <div className='hero_heading row-start-1 row-end-1 '>
          <h1 className='text-primary font-medium text-5xl xl:text-[64px] leading-[64px]'>
            Good Food Us Good Mood
          </h1>
        </div>
        <div className='hero_description row-start-3 row-end-3 md:row-start-2 md:row-end-2'>
          <p className='text-textGray font-normal text-lg leading-7'>
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div className='hero_description_button flex items-start py-7 gap-4'>
            <div classNafme='hero_description_button_sign_up '>
              <CustomButton
                type='link'
                href='/'
                isExternal
                isPrimary
                isRoundedFull
                isWidthAuto
                isHover
                className='px-[18px] py-[10px] text-white flex items-center justify-center shadow-[0_8px_32px_0_rgba(102,107,226,0.3)]'
                target='_blank'>
                Daftar Sekarang
              </CustomButton>
            </div>
            <div className='hero_description_button_about_us bg-light rounded-full w-auto px-[18px] py-[10px] text-textDark flex items-center justify-center'>
              <CustomButton
                type='link'
                href={'/about'}>
                About Us
              </CustomButton>
            </div>
          </div>
        </div>
        <div className='hero_image w-full h-full row-start-2 row-end-2 md:row-start-1 md:row-end-3'>
          <Image
            src={'/images/food_hero.png'}
            alt='Food Transparent'
            className='md:w-[650px]'
            width={412}
            height={320}
          />
        </div>
      </div>
    </div>
  );
}
