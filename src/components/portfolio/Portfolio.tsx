import * as React from 'react';
import { format, parse } from 'date-fns';

export default function Portfolio() {
  const portfolio = [
    {
      name: 'Website Landing Page (Pixel Planet)',
      description: 'Fullstack',
      images: 'portfolio/pixelplanet.png',
      date: '28-05-2023',
      link: 'https://pixelplanet.design/',
    },
    {
      name: 'Dynamic Medical System (RSUD Nunukan)',
      description: 'Backend & Implementator',
      images: 'portfolio/medical_nunukan.png',
      date: '28-05-2020',
      link: 'https://profile.ekopras.engineer/portfolio',
    },
    {
      name: 'Omedi (RSI Nashrul Ummah)',
      description: 'Backend',
      images: 'portfolio/omedi_rsi_nashrulummah.png',
      date: '28-04-2023',
      link: 'https://profile.ekopras.engineer/portfolio',
    },
    {
      name: 'Erp Detjolomadoe (Enterprise Resource Planning)',
      description: 'Lead & Fullstack',
      images: 'portfolio/erp_detjolomadoe.png',
      date: '28-05-2022',
      link: 'https://profile.ekopras.engineer/portfolio',
    },
    {
      name: 'Integrasi API PP Financial Dashboard (PP Properti)',
      description: 'Lead & Fullstack',
      images: 'portfolio/erp_detjolomadoe_api.png',
      date: '28-05-2022',
      link: 'https://profile.ekopras.engineer/portfolio',
    },
    {
      name: 'Jatengreport (Portal Berita Jawa Tengah)',
      description: 'Fullstack',
      images: 'portfolio/jatengreport.png',
      date: '28-05-2022',
      link: 'https://jatengreport.com/',
    },
    {
      name: 'Smartkada Tukd (Keuangan Daerah)',
      description: 'Fullstack',
      images: 'portfolio/smartkada_tukd.png',
      date: '28-05-2023',
      link: 'https://smartkada-tukd.optimasolution.co.id/',
    },
    {
      name: 'Rebuild Omedi (Aplikasi Manajemen Rumah Sakit)',
      description: 'Lead & Fullstack',
      images: 'portfolio/noimage.png',
      date: '28-05-2023',
      link: '#',
    },
    {
      name: 'Rebuild Opnicare (Aplikasi Manajemen Klinik)',
      description: 'Lead & Fullstack',
      images: 'portfolio/noimage.png',
      date: '28-05-2023',
      link: '#',
    },
    {
      name: 'Restful API Absensi (Absensi Digital Mamberamo)',
      description: 'Lead & Fullstack',
      images: 'portfolio/noimage.png',
      date: '28-05-2023',
      link: '#',
    },
    {
      name: 'Restful API Pendaftaran Omedi Rawat jalan',
      description: 'Lead & Fullstack',
      images: 'portfolio/noimage.png',
      date: '28-05-2023',
      link: '#',
    },
    {
      name: 'Restful API Lisensi Aplikasi Internal',
      description: 'Lead & Fullstack',
      images: 'portfolio/noimage.png',
      date: '28-05-2023',
      link: '#',
    },
    {
      name: 'Integrasi API Ipaymu (Payment Gateway)',
      description: 'Lead & Backend',
      images: 'portfolio/noimage.png',
      date: '22-06-2023',
      link: '#',
    },
  ];
  
  return (
    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {portfolio.map((item, i) => (
        <li key={i}>
          <article className="flex border border-gray-200 dark:border-gray-500 transition hover:shadow-xl">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time dateTime="2022-10-10"
                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-500"
              >
                <span>{parse(item.date, 'dd-MM-yyyy', new Date()).getFullYear()}</span>
                <span className="w-px flex-1 bg-gray-200 dark:bg-gray-500"></span>
                <span>{format(parse(item.date, 'dd-MM-yyyy', new Date()), 'MMMM dd')}</span>
              </time>
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <picture>
                <img
                  alt={item.name}
                  src={item.images}
                  className="aspect-square h-56 w-full object-cover"
                />
              </picture>
              <div className="border-s border-gray-900/10 p-2 sm:border-l-transparent sm:p-2">
                <a href={item.link}>
                  <h3 className="font-bold text-xs uppercase text-gray-600 dark:text-gray-50">
                    {item.name}
                  </h3>
                </a>

                <p className="mt-1 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-green-50/40">
                  {item.description}
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <a
                  href={item.link}
                  className="block bg-green-400/95 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-green-500/95"
                >
                  More Info
                </a>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};
