import localFont from 'next/font/local';

export const utoFont = localFont({
  src: [
    {
      path: './../../public/assets/UTOIMAGE_Gothic_B.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './../../public/assets/UTOIMAGE_Gothic_R.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../public/assets/UTOIMAGE_Gothic_L.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-uto',
});
