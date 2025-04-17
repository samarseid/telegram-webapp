import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const specialists = [
    {
        name: 'Kardiolog',
        iconUrl: '/icons/heart-white.svg',
        bgColor: '#D3F5FF', // pastel-blue
    },
    {
        name: 'Stomatolog',
        iconUrl: '/icons/tooth-white.svg',
        bgColor: '#FFE8E8', // pastel-pink
    },
    {
        name: 'Nevrolog',
        iconUrl: '/icons/brain-white.svg',
        bgColor: '#E7FFE0', // pastel-green
    },
    {
        name: 'Urolog',
        iconUrl: '/icons/kidney-white.svg',
        bgColor: '#FFF1D6', // pastel-yellow
    },
];
export const Specialists = () => (_jsxs("section", { className: "px-4 py-6 bg-[#F9FAFB]", children: [_jsx("h4", { className: "mb-4 text-[20px] leading-7 font-semibold text-[#111827] font-primary", children: "Mashhur mutaxassislar" }), _jsx("div", { className: "flex gap-4 overflow-x-auto scrollbar-none", children: specialists.map(({ name, iconUrl, bgColor }) => (_jsxs("div", { className: "flex-shrink-0 flex flex-col items-center justify-center w-[80px] h-[80px] rounded-[16px] p-2", style: { backgroundColor: bgColor }, children: [_jsx("img", { src: iconUrl, alt: name, className: "w-6 h-6 mb-1" }), _jsx("span", { className: "text-[12px] leading-4 font-medium text-[#111827] font-primary text-center", children: name })] }, name))) })] }));
