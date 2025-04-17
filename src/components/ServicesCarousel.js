import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const services = [
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
export const ServicesCarousel = () => (_jsxs("section", { className: " px-5 py-6", children: [_jsx("h4", { className: "mb-4 text-[20px] leading-7 font-semibold text-[#111827] font-primary", children: "Xizmatlar" }), _jsx("div", { className: "\r\n        flex\r\n        gap-4\r\n        overflow-x-auto\r\n        snap-x snap-mandatory\r\n        scrollbar-none\r\n      ", children: services.map(({ name, iconUrl, gradientFrom, gradientTo }) => (_jsxs("div", { className: `
            snap-start
            flex-shrink-0
            w-[112px] h-[112px]
            rounded-[20px]
            bg-gradient-to-br from-[${gradientFrom}] to-[${gradientTo}]
            p-3
            flex flex-col items-center justify-center
            transition-transform hover:scale-105
          `, children: [_jsx("img", { src: iconUrl, alt: name, className: "w-8 h-8 mb-2" }), _jsx("span", { className: "text-[14px] leading-5 font-medium text-white font-primary text-center", children: name })] }, name))) })] }));
