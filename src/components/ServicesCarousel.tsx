// src/components/ServicesCarousel.tsx
import React, { FC } from 'react';

export interface ServiceItem {
  name: string;
  iconUrl: string;
  gradientFrom: string;
  gradientTo: string;
}

const services: ServiceItem[] = [
  {
    name: 'Tez yordam',
    iconUrl: '/icons/ambulance-white.svg',
    gradientFrom: '#56CCF2',
    gradientTo: '#2F80ED',
  },
  {
    name: 'Tibbiy tekshiruv',
    iconUrl: '/icons/stethoscope-white.svg',
    gradientFrom: '#A1FFCE',
    gradientTo: '#E7FFE0',
  },
  {
    name: 'Laboratoriya',
    iconUrl: '/icons/lab-white.svg',
    gradientFrom: '#FFF1D6',
    gradientTo: '#FACC15',
  },
  {
    name: 'Jarrohlik',
    iconUrl: '/icons/scalpel-white.svg',
    gradientFrom: '#FFD8B8',
    gradientTo: '#FF9C74',
  },
  {
    name: 'Uyda xizmat',
    iconUrl: '/icons/home-care-white.svg',
    gradientFrom: '#D0E8FF',
    gradientTo: '#A1CFFF',
  },
];

export const ServicesCarousel: FC = () => (
  <section className=" px-5 py-6">
    {/* Sarlavha */}
    <h4 className="mb-4 text-[20px] leading-7 font-semibold text-[#111827] font-primary">
      Xizmatlar
    </h4>

    {/* Karusel konteyneri */}
    <div
      className="
        flex
        gap-4
        overflow-x-auto
        snap-x snap-mandatory
        scrollbar-none
      "
    >
      {services.map(({ name, iconUrl, gradientFrom, gradientTo }) => (
        <div
          key={name}
          className={`
            snap-start
            flex-shrink-0
            w-[112px] h-[112px]
            rounded-[20px]
            bg-gradient-to-br from-[${gradientFrom}] to-[${gradientTo}]
            p-3
            flex flex-col items-center justify-center
            transition-transform hover:scale-105
          `}
        >
          <img src={iconUrl} alt={name} className="w-8 h-8 mb-2" />
          <span className="text-[14px] leading-5 font-medium text-white font-primary text-center">
            {name}
          </span>
        </div>
      ))}
    </div>
  </section>
);
