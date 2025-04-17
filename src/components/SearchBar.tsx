import React, { FC, ChangeEvent } from 'react';

export interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: FC<SearchBarProps> = ({
  value = '',
  onChange,
  placeholder = 'Klinika, xizmat yoki shifokor qidiring...',
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="px-4 pb-4 bg-white">
      <label htmlFor="home-search" className="sr-only">
        Qidiruv
      </label>
      <div className="relative">
        <input
          id="home-search"
          type="text"
          role="searchbox"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="
            w-full
            pl-12 pr-4 py-3
            rounded-[12px]
            border border-[#F3F4F6]
            bg-[#FFFFFF]
            placeholder-[#9CA3AF]
            text-[16px] leading-6
            font-normal font-primary text-[#111827]
            focus:outline-none focus:ring-2 focus:ring-[#56CCF2]
            transition
          "
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#9CA3AF"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
