import type React from 'react';

import { SpinnerContainer } from './index';

export type SpinnerProps = {
  type?: 'circle' | 'dots';
  size?: string;
  color?: string;
  radius?: string;
  style?: React.CSSProperties;
};
export const Spinner: React.FC<SpinnerProps> = ({
  type,
  color = '#0295F6',
  style,
  size,
  radius,
}) => {
  const circularSpinner = (
    <div className='sk-chase' style={style}>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
    </div>
  );

  const dots = (
    <div className='spinner' style={style}>
      <div className='bounce1'></div>
      <div className='bounce2'></div>
      <div className='bounce3'></div>
    </div>
  );

  let spinner: JSX.Element;

  switch (type) {
    case 'circle': {
      spinner = circularSpinner;
      break;
    }
    case 'dots': {
      spinner = dots;
      break;
    }
    default:
      spinner = dots;
  }

  return (
    <SpinnerContainer size={size} color={color} radius={radius}>
      {spinner}
    </SpinnerContainer>
  );
};

export default Spinner;