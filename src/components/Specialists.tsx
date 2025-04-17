import React, { FC } from 'react';

export interface Specialist {
  name: string;
  iconUrl: string;
  bgColor: string;  // Tailwind class yoki hex
}

const specialists: Specialist[] = [
  {
    name: 'Kardiolog',
    iconUrl: '/public/images/heart-white.svg',
    bgColor: '#D3F5FF',   // pastel-blue
  },
  {
    name: 'Stomatolog',
    iconUrl: '/public/images/tooth-white.svg',
    bgColor: '#FFE8E8',   // pastel-pink
  },
  {
    name: 'Nevrolog',
    iconUrl: '/public/images/brain-white.svg',
    bgColor: '#E7FFE0',   // pastel-green
  },
  {
    name: 'Urolog',
    iconUrl: '/public/images/kidney-white.svg',
    bgColor: '#FFF1D6',   // pastel-yellow
  },
];

export const Specialists: FC = () => (
  <section className="px-4 py-6 bg-[#F9FAFB]">
    <h4 className="mb-4 text-[20px] leading-7 font-semibold text-[#111827] font-primary">
      Mashhur mutaxassislar
    </h4>
    <div className="flex gap-4 overflow-x-auto scrollbar-none">
      {specialists.map(({ name, iconUrl, bgColor }) => (
        <div
          key={name}
          className="flex-shrink-0 flex flex-col items-center justify-center w-[80px] h-[80px] rounded-[16px] p-2"
          style={{ backgroundColor: bgColor }}
        >
          <img src={iconUrl} alt={name} className="w-6 h-6 mb-1" />
          <span className="text-[12px] leading-4 font-medium text-[#111827] font-primary text-center">
            {name}
          </span>
        </div>
      ))}
    </div>
  </section>
);
