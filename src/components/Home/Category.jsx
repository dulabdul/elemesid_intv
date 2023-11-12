'use client';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      onClick={() => onClick()}
      type='button'
      aria-label='Go to next slide'
      className='max-w-[115px] bottom-[-68%] right-[5%] absolute rounded-full  group bg-primary max-h-[50px] px-4 py-2 flex items-center justify-center'>
      <div className='flex items-center justify-center gap-x-1'>
        <span className='text-white text-base font-medium leading-[18px]'>
          NEXT
        </span>
        <div className='rounded-full bg-white'>
          <IoIosArrowForward className='text-primary text-2xl' />
        </div>
      </div>
    </button>
  );
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      onClick={() => onClick()}
      type='button'
      aria-label='Go to next slide'
      className='max-w-[115px] rounded-full bottom-[-68%] right-[13%] absolute group bg-primary max-h-[50px] px-4 py-2 flex items-center justify-center'>
      <div className='flex items-center justify-center gap-x-1'>
        <div className='rounded-full bg-white'>
          <IoIosArrowBack className='text-primary text-2xl' />
        </div>
        <span className='text-white text-base font-medium leading-[18px]'>
          PREV
        </span>
      </div>
    </button>
  );
};
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30,
    },
  };
  return (
    <div className='category overflow-hidden w-full container mx-auto py-16 md:py-12'>
      <div className='category_heading px-7 py-10'>
        <h2 className='font-medium text-2xl leading-8 xl:text-[38px] xl:leading-[50px] text-dark'>
          Browser Our Category{' '}
          <span className='block text-primary'>Receipt</span>
        </h2>
      </div>
      <div className='w-full'>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition='all .5'
          transitionDuration={500}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          containerClass='carousel-container'
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass='custom-dot-list-style'
          itemClass='ml-[10px]'>
          {dataCarousel.map((items, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: items.colors }}
                className={`max-w-[240px] max-h-[175px] py-[30px] h-full flex items-center justify-center flex-col rounded-md transition-all duration-500 ease-in-out hover:bg-[url("/images/opacity_bg.png")]`}>
                <div>
                  <Image
                    className='max-w-[52px] max-h-[52px]'
                    src={items.icons}
                    alt={items.name}
                    width={47}
                    height={47}
                  />
                  <p className='font-medium leading-6 text-base capitalize'>
                    {items.name}
                  </p>
                  <div className='flex'>
                    <small className='font-normal text-sm leading-4'>
                      {items.amount > 1
                        ? `${items.amount} Items`
                        : `${items.amount} Item`}
                    </small>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      {/* 
      <Carousel
        autoPlay={false}
        centerMode={true}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        thumbWidth={20}>
        {dataCarousel.map((items, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: items.colors }}
              className={`w-[96%] md:w-1/4 rounded-md px-[81px] py-[30px] transition-all duration-500 ease-in-out hover:bg-[url("/images/opacity_bg.png")]`}>
              <Image
                className='max-w-[52px] max-h-[52px]'
                src={items.icons}
                alt={items.name}
                width={47}
                height={47}
              />
              <p className='font-medium leading-6 text-base capitalize'>
                {items.name}
              </p>
              <small className='font-normal text-sm leading-4'>
                {items.amount > 1
                  ? `${items.amount} Items`
                  : `${items.amount} Item`}
              </small>
            </div>
          );
        })}
      </Carousel> */}
    </div>
  );
}
