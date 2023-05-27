import * as React from 'react';

export default function Education() {
  const timelineData = [
    {
      year: '2015-2017',
      head: 'SMK',
      title: 'Diponegoro Banyuputih Batang',
      degree: null,
      description: 'Computer and Network Engineering',
      logo: 'education/dipo.svg'
    },
    {
      year: '2015-2017',
      head: 'UAD',
      title: 'Universitas Ahmad Dahlan',
      degree: 'S.Kom',
      description: 'Informatics Engineering',
      logo: 'education/uad.svg'
    },
    {
      year: '2017-2019',
      head: 'GXUN',
      title: 'Guangxi University For Nationalities',
      degree: 'B.Eng',
      description: 'Computer Science and Technology - 15 International Students Class 2+2',
      logo: 'education/gxun.svg'
    },
  ];
  return (
    <div className="mt-5">
      {timelineData.map((item, index) => (
        <div className="flex py-3" key={index}>
          <div className="w-16">
            <div className="rounded-full flex items-center justify-center">
              <picture>
                <img src={item.logo} alt={item.title} />
              </picture>
            </div>
          </div>
          <div className="w-4/5">
            <h2 className="text-md mb-1"><b className='font-bold text-green-600'>{item.head}</b> {item.title}</h2>
            <p className="text-gray-400 text-sm">{item.year} | {item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
