'use client';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
export default function Category() {
  const dataCarousel = [
    {
      name: 'cupcake',
      amount: 22,
      colors: '#F0FEEB',
      icons: '/images/icons/cake.svg',
    },
    {
      name: 'pizza',
      amount: 25,
      colors: '#E4F2F4',
      icons: '/images/icons/pizza.svg',
    },
    {
      name: 'kebab',
      amount: 12,
      colors: '#EAEEFA',
      icons: '/images/icons/kebab.svg',
    },
    {
      name: 'salmon',
      amount: 22,
      colors: '#F9EEF3',
      icons: '/images/icons/salmon.svg',
    },
    {
      name: 'doughnut',
      amount: 11,
      colors: '#F3F7D9',
      icons: '/images/icons/donat.svg',
    },
  ];
  return (
    <div className='category w-full container py-24'>
      <div className='category_heading px-7 py-10'>
        <h2 className='font-medium text-2xl leading-8 xl:text-[38px] xl:leading-[50px] text-dark'>
          Browser Our Category{' '}
          <span className='block text-primary'>Receipt</span>
        </h2>
      </div>

      <Carousel
        autoPlay={false}
        centerMode={true}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}>
        {dataCarousel.map((items, index) => {
          return (
            <div
              key={index}
              style={{ background: items.colors }}
              className={` w-[96%] rounded-md px-[81px] py-[30px]`}>
              <Image
                src={items.icons}
                alt={items.name}
                width={47}
                height={47}
              />
              <p className='font-medium leading-6 text-base'>{items.name}</p>
              <small className='font-normal text-sm leading-4'>
                {items.amount} Items
              </small>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
