import Image from 'next/image';
import React from 'react';
import Star from '../Star';
import CustomButton from '../Button';

export default function Trending() {
  const trendingData = [
    {
      name: 'pizza paperoni',
      colors: '#E6F3F5',
      category: 'pizza',
      rating: 4,
      imageUrl: '/images/pizza_paperoni.jpg',
    },
    {
      name: 'pizza meat',
      colors: '#E6F3F5',
      category: 'pizza',
      rating: 3,
      imageUrl: '/images/pizza_meat.jpg',
    },
    {
      name: 'doner kebab',
      colors: '#EAEEFA',
      category: 'kebab',
      rating: 5,
      imageUrl: '/images/doner_kebab.jpg',
    },
    {
      name: 'salmon roll',
      colors: '#F9EEF3',
      category: 'salmon',
      rating: 4,
      imageUrl: '/images/salmon_roll.jpg',
    },
    {
      name: 'cupcake choco',
      colors: '#F0FEEB',
      category: 'cupcake',
      rating: 4,
      imageUrl: '/images/cupcake_choco.jpg',
    },
    {
      name: 'doughnut milk',
      colors: '#F3F7D9',
      category: 'doughnut',
      rating: 5,
      imageUrl: '/images/donat_milk.jpg',
    },
    {
      name: 'doughnut unicorn',
      colors: '#F3F7D9',
      category: 'doughnut',
      rating: 4,
      imageUrl: '/images/donat_unicorn.jpg',
    },
    {
      name: 'kathi kebab',
      colors: '#EAEEFA',
      category: 'kebab',
      rating: 4,
      imageUrl: '/images/kathi_kebab.jpg',
    },
  ];
  return (
    <div className='container w-full px-7 md:py-12 mx-auto trending'>
      <div className='trending_heading'>
        <h2 className='font-medium text-2xl leading-8 xl:text-[38px] xl:leading-[50px] text-dark'>
          Browser Our Category{' '}
          <span className='block text-primary'>Trending</span>
        </h2>
      </div>
      <div className='trending_container_card py-8 grid grid-cols-1 xl:grid-cols-4 gap-5'>
        {trendingData.map((items, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: items.colors }}
              className={`transition-all hover:bg-[url("/images/opacity_bg.png")] trending_container_card_wrapper rounded-2xl px-5 py-6 shadow-md`}>
              <div className='trending_container_card_wrapper_image'>
                <Image
                  src={items.imageUrl}
                  alt={items.name}
                  width={120}
                  height={120}
                />
              </div>
              <div className='trending_container_card_wrapper_content'>
                <h3 className='trending_container_card_wrapper_content_name text-textDark font-medium text-[26px] leading-[50px] capitalize'>
                  {items.name}
                </h3>
                <p className='trending_container_card_wrapper_content_name font-medium text-primary text-lg capitalize'>
                  {items.category}
                </p>
                <div className='trending_container_card_wrapper_content_rating'>
                  <Star
                    value={items.rating}
                    width={16}
                    height={16}
                    spacing={1}></Star>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex justify-center'>
        <CustomButton
          href={'/'}
          type='link'
          isPrimary
          isRoundedFull
          isHover
          className='hidden md:flex items-center justify-center text-white font-medium text-lg text-center max-w-[160px] max-h-[50px] px-5 py-3'>
          ALL Receipt
        </CustomButton>
      </div>
    </div>
  );
}
