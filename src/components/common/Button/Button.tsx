'use client';

import { useState } from 'react';

export interface Button {
  width: number;
  height: number;
  className?: string;
  style?: object;
  children: React.ReactNode;
  [key: string]: unknown;
}

export const Button = ({
  width,
  height,
  className,
  style = {},
  children,
  ...restProps
}: Button) => {
  const [isClicked, setIsClicked] = useState(false);

  const mergedStyle = {
    ...style,
    width: width + 'px',
    height: height + 'px',
    backgroundColor: isClicked ? 'tomato' : 'initial',
  };

  return (
    <button
      name="click"
      style={mergedStyle}
      className={`${className}`}
      onClick={() => {
        setIsClicked(true);
      }}
      {...restProps}
    >
      {isClicked ? 'Clicked!' : children}
    </button>
  );
};
