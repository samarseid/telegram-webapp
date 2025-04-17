import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FiHome, FiSearch, FiCalendar, FiUser } from 'react-icons/fi';
const navItems = [
    { label: 'Bosh sahifa', icon: _jsx(FiHome, { size: 24 }), active: true },
    { label: 'Qidiruv', icon: _jsx(FiSearch, { size: 24 }), active: false },
    { label: 'Qabulim', icon: _jsx(FiCalendar, { size: 24 }), active: false },
    { label: 'Profil', icon: _jsx(FiUser, { size: 24 }), active: false },
];
export const BottomNav = () => (_jsx("nav", { className: "fixed bottom-0 left-0 w-full bg-white border-t border-[#E5E7EB] px-4 py-2 flex", children: navItems.map(({ label, icon, active }) => (_jsxs("button", { "aria-label": label, className: "flex-1 flex flex-col items-center justify-center", children: [_jsx("div", { className: active ? 'text-[#2F80ED]' : 'text-[#9CA3AF]', children: icon }), _jsx("span", { className: [
                    'mt-1 text-[10px] font-medium font-primary',
                    active ? 'text-[#2F80ED]' : 'text-[#9CA3AF]',
                ].join(' '), children: label })] }, label))) }));
