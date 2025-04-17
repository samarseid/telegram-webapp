import React, { FC } from 'react';

export interface PromoBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  imageUrl?: string;
  onButtonClick?: () => void;
}

export const PromoBanner: FC<PromoBannerProps> = ({
  title = 'Bahorgi sog‘liq chegirmalari',
  subtitle = '25% gacha chegirmalar',
  buttonText = 'Batafsil',
  imageUrl = '/images/stethoscope.png',
  onButtonClick,
}) => {
  return (
    <div className="mx-4 my-3 rounded-2xl overflow-hidden relative shadow-md h-[160px] bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]">
      <div className="flex flex-col justify-center h-full px-5 py-4 w-2/3">
        <h3 className="text-xl font-semibold text-white font-primary">
          {title}
        </h3>
        <p className="mt-1 text-sm text-white font-primary">
          {subtitle}
        </p>
        <button
          onClick={onButtonClick}
          className="mt-3 w-fit px-4 py-2 bg-white text-sm font-medium text-[#2F80ED] rounded-lg hover:bg-gray-100 transition-colors"
        >
          {buttonText}
        </button>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/3">
        <img
          src={imageUrl}
          alt="Promo illustration"
          className="object-cover w-full h-full opacity-30"
        />
      </div>
    </div>
  );
};
