import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
export default function Star({ className, value, width, height, spacing }) {
  const decimals = Number(value) % 1;

  const star = [];
  let leftPos = 0;
  for (let i = 0; i < 5 && i < value - decimals; i++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className='star'
        key={i}
        style={{
          left: i * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}></div>
    );
  }
  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className='star'
        key={`starWithDecimals`}
        style={{
          left: leftPos,
          height: height,
          width: decimals * width - spacing,
        }}></div>
    );
  }
  const starPlaceHolder = [];
  for (let i = 0; i < 5; i++) {
    starPlaceHolder.push(
      <div
        key={`starPlaceHolder-${i}`}
        className='star placeholder'
        style={{
          left: i * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}></div>
    );
  }
  return (
    <div
      className={['stars', className].join(' ')}
      style={{ height: height }}>
      {starPlaceHolder}
      {star}
    </div>
  );
}
Star.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  spacing: PropTypes.number,
};
