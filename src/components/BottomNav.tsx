// src/components/BottomNav.tsx
import React, { FC, ReactElement } from 'react';
import { FiHome, FiSearch, FiCalendar, FiUser } from 'react-icons/fi';

interface NavItem {
  label: string;
  icon: ReactElement;  // <-- ReactElement sifatida aniqladik
  active?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Bosh sahifa', icon: <FiHome size={24} />, active: true },
  { label: 'Qidiruv',     icon: <FiSearch size={24} />, active: false },
  { label: 'Qabulim',     icon: <FiCalendar size={24} />, active: false },
  { label: 'Profil',      icon: <FiUser size={24} />, active: false },
];

export const BottomNav: FC = () => (
  <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-[#E5E7EB] px-4 py-2 flex">
    {navItems.map(({ label, icon, active }) => (
      <button
        key={label}
        aria-label={label}
        className="flex-1 flex flex-col items-center justify-center"
      >
        {/* Faqat {icon} qo‘yamiz, cloneElement’ga hojat yo‘q */}
        <div className={active ? 'text-[#2F80ED]' : 'text-[#9CA3AF]'}>
          {icon}
        </div>
        <span
          className={[
            'mt-1 text-[10px] font-medium font-primary',
            active ? 'text-[#2F80ED]' : 'text-[#9CA3AF]',
          ].join(' ')}
        >
          {label}
        </span>
      </button>
    ))}
  </nav>
);
