import localFont from 'next/font/local';

export const cafe24Font = localFont({
  src: './../../public/assets/Cafe24Ssurround.woff2',
  variable: '--font-cafe24',
});
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
