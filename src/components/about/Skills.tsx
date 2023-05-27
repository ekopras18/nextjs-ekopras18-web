import * as React from 'react';

export default function Skills() {
  const skills = [
    {
      name: 'Frontend',
      data: [
        { name: 'Tailwind Css', logo: 'Vercel.svg' },
        { name: 'Bootstrap', logo: 'Vercel.svg' },
        { name: 'Javascript', logo: 'Vercel.svg' },
        { name: 'Templating', logo: 'Vercel.svg' },
      ]
    },
    {
      name: 'Backend',
      data: [
        { name: 'Laravel', logo: 'Vercel.svg' },
        { name: 'Python', logo: 'Vercel.svg' },
        { name: 'Flask', logo: 'Vercel.svg' },
        { name: 'Next.js', logo: 'Vercel.svg' },
        { name: 'Go', logo: 'Vercel.svg' },
      ]
    },
    {
      name: 'DevOps',
      data: [
        { name: 'Setup Server', logo: 'Vercel.svg' },
        { name: 'Pemeliharaan Server', logo: 'Vercel.svg' },
        { name: 'Docker', logo: 'Vercel.svg' },
        { name: 'Integrasi API', logo: 'Vercel.svg' },
      ]
    },
  ];

  return (
    <div className="mt-5">
      {skills.map((skill, index) => (
        <div className="text-md" key={index}>
          <h3 className="text-md font-semibold">{skill.name}</h3>

          <div className='flex py-2 pl-2'>
            <div className='px-1'>
              <ul>
                <li className="mb-2 flex flex-wrap">
                  {skill.data.map((item, index2) => (
                    <span key={index2} className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium border-gray-200 dark:border-green-100 shadow-md shadow-black/5 dark:shadow-green-900 transition-shadow duration-300 hover:shadow-lg space-y-2">{item.name}</span>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};
