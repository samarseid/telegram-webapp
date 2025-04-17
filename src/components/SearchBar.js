import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const SearchBar = ({ value = '', onChange, placeholder = 'Klinika, xizmat yoki shifokor qidiring...', }) => {
    const handleChange = (e) => {
        onChange?.(e.target.value);
    };
    return (_jsxs("div", { className: "px-4 pb-4 bg-white", children: [_jsx("label", { htmlFor: "home-search", className: "sr-only", children: "Qidiruv" }), _jsxs("div", { className: "relative", children: [_jsx("input", { id: "home-search", type: "text", role: "searchbox", value: value, onChange: handleChange, placeholder: placeholder, className: "\r\n            w-full\r\n            pl-12 pr-4 py-3\r\n            rounded-[12px]\r\n            border border-[#F3F4F6]\r\n            bg-[#FFFFFF]\r\n            placeholder-[#9CA3AF]\r\n            text-[16px] leading-6\r\n            font-normal font-primary text-[#111827]\r\n            focus:outline-none focus:ring-2 focus:ring-[#56CCF2]\r\n            transition\r\n          " }), _jsx("span", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "#9CA3AF", strokeWidth: 2, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" }) }) })] })] }));
};
