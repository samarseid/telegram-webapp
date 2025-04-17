import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const clinics = [
    {
        name: 'Gippokrat Med Center',
        imgUrl: '/images/gippo.jpg',
        rating: 4.8,
        hours: '08:00 – 20:00',
        address: 'Toshkent sh., Chilonzor t., 15-mavze',
    },
    {
        name: 'Shox Med Clinic',
        imgUrl: '/images/shox.jpg',
        rating: 4.6,
        hours: '09:00 – 18:00',
        address: 'Toshkent sh., Yunusobod t., 19-mavze',
    },
];
export const ClinicsList = () => (_jsxs("section", { className: "bg-[#F9FAFB] px-4 py-6", children: [_jsx("h4", { className: "mb-4 text-[20px] leading-7 font-semibold text-[#111827] font-primary", children: "Yaqin atrofdagi klinikalar" }), _jsx("div", { className: "space-y-4", children: clinics.map((c) => (_jsxs("div", { className: "bg-white rounded-2xl shadow-md overflow-hidden", children: [_jsx("img", { src: c.imgUrl, alt: c.name, className: "w-full h-48 object-cover" }), _jsxs("div", { className: "px-4 py-3 space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h5", { className: "text-[18px] font-semibold text-[#111827] font-primary", children: c.name }), _jsxs("div", { className: "flex items-center text-[#FACC15]", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 16 16", children: _jsx("path", { d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.63.282.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" }) }), _jsx("span", { className: "ml-1 text-[16px] font-medium", children: c.rating })] })] }), _jsxs("div", { className: "flex items-center text-[#4B5563] text-[14px]", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4 text-[#4B5563]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 8v4l2 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), _jsx("span", { className: "ml-1", children: c.hours })] }), _jsxs("div", { className: "flex items-center text-[#4B5563] text-[14px]", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4 text-[#4B5563]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 0v6m0-6c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" }) }), _jsx("span", { className: "ml-1", children: c.address })] })] })] }, c.name))) })] }));
