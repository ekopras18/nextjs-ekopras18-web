import * as React from 'react';

export default function Experience() {

  const experiences = [
    {
      id: 1,
      name: 'Work Experience',
      data: [
        { name: 'PT. Optima Multi Sinergi (Sedang bekerja)', description: 'perusahaaan yang bergerak di bidang teknologi informasi yang fokus pada pengembangan sistem informasi.' },
      ]
    },
    {
      id: 2,
      name: 'Project Experience',
      data: [
        { name: 'Dynamic Medical System (RSUD Nunukan)', description: 'Backend & Implementator' },
        { name: 'Omedi (RSI Nashrul Ummah)', description: 'Backend' },
        { name: 'Erp Detjolomadoe (Enterprise Resource Planning)', description: 'Lead & Fullstack' },
        { name: 'Integrasi API PP Financial Dashboard (PP Properti)', description: 'Lead & Backend' },
        { name: 'Jatengreport (Portal Berita Jawa Tengah)', description: 'Fullstack' },
        { name: 'Smartkada Tukd (Keuangan Daerah)', description: 'Fullstack' },
        { name: 'Rebuild Omedi (Aplikasi Manajemen Rumah Sakit)', description: 'Lead & Fullstack' },
        { name: 'Rebuild Opnicare (Aplikasi Manajemen Klinik)', description: 'Lead & Fullstack' },
        { name: 'Restful API Absensi (Absensi Digital Mamberamo)', description: 'Lead & Backend' },
        { name: 'Restful API Pendaftaran Omedi Rawat jalan', description: 'Lead & Backend' },
        { name: 'Restful API Lisensi Aplikasi Internal', description: 'Lead & Backend' },
      ]
    },
    // Tambahkan item portofolio lainnya sesuai kebutuhan
  ];

  return (
    <div className="mt-5">
      {experiences.map((item, index) => (
        <div className="" key={index}>
          <h3 className="text-md font-semibold">{item.name}</h3>

          <div className='flex py-2 pl-2'>
            <div className='px-1'>
                  {item.data.map((item2, index2) => (
                    <div className="flex items-center py-2" key={index2}>
                      <div>
                        <h3 className="text-sm font-semibold">{item2.name}</h3>
                        <p className="text-gray-500 text-sm">{item2.description}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};
