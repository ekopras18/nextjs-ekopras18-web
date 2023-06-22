import * as React from 'react';

export default function BuildWith() {
  const buildData = [
    {
      title: 'React',
      icon: 'build/react.svg',
      link: 'https://react.dev/',
    },
    {
      title: 'Next.js',
      icon: 'build/nextjs.svg',
      link: 'https://nextjs.org/',
    },
    {
      title: 'Vercel',
      icon: 'build/vercel.svg',
      link: 'https://vercel.com/',
    }
  ];
  return (
    <div className='text-gray-400'>
      <p className='py-5 text-center text-sm text-gray-500'>Build With</p>
      <div className='flex justify-center text-gray-600' >
        {buildData.map((item, index) => (
          <div className='text-center m-2' key={index}>
            <img src={item.icon} alt={item.title} className='h-5' />
          </div>
        ))}
      </div>
    </div>
  );
};
