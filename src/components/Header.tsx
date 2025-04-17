import React, { FC } from 'react';

export interface HeaderProps {
  name: string;
  avatarUrl: string;
  onNotificationClick?: () => void;
}

export const Header: FC<HeaderProps> = ({
  name,
  avatarUrl,
  onNotificationClick,
}) => {
  return (
    <header className="flex items-center justify-between px-4 pt-5 pb-4 bg-white">
      {/* Greeting */}
      <div className="flex flex-col">
        <span className="text-[16px] leading-5 font-normal text-[#4B5563] font-primary">
          Assalomu alaykum,
        </span>
        <span className="mt-1 text-[20px] leading-6 font-semibold text-[#111827] font-primary">
          {name}
        </span>
      </div>

      {/* Bell & Avatar */}
      <div className="flex items-center space-x-2">
        <button
          onClick={onNotificationClick}
          aria-label="Bildirishnomalar"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {/* Bootstrap bell-fill SVG */}
          <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24">
	<defs>
		<clipPath id="clipPath7452375944">
			<path transform="matrix(1 0 0 1 0 0)" d="M0 0L24 0L24 24L0 24L0 0Z" fill-rule="nonzero"/>
		</clipPath>
	</defs>
	<g clip-path="url(#clipPath7452375944)">
		<defs>
			<clipPath id="clipPath8079870620">
				<path transform="matrix(1 0 0 1 -0 -0)" d="M0 0L24 0L24 24L0 24L0 0Z" fill-rule="nonzero"/>
			</clipPath>
		</defs>
		<g clip-path="url(#clipPath8079870620)">
			<path transform="matrix(1 0 0 1 3.74244 2.25)" d="M16.886 13.749Q17.212 14.1483 17.2574 14.6507Q17.3001 15.1242 17.0825 15.5535Q16.8655 15.9816 16.455 16.2351Q16.0258 16.5 15.4993 16.5L12.0076 16.5Q12.0076 18.0533 10.9092 19.1516Q9.81086 20.25 8.25756 20.25Q6.70426 20.25 5.6059 19.1516Q4.50756 18.0533 4.50756 16.5L1.02052 16.5Q0.49365 16.5 0.0640018 16.2368Q-0.348518 15.9842 -0.566847 15.5565Q-0.786339 15.1266 -0.743336 14.6517Q-0.697824 14.149 -0.370733 13.7487Q-0.292383 13.6529 -0.141621 13.4707Q0.355709 12.8698 0.557678 12.5718Q0.86878 12.1128 1.05346 11.6171Q1.51458 10.3794 1.51599 7.93828Q1.51599 5.18206 2.81464 3.48399Q3.75809 2.25037 5.44364 1.55626Q5.45781 1.55044 5.47616 1.53141Q5.47896 1.52851 5.48101 1.52614Q5.75712 0.595387 6.43986 -0.0264425Q7.2343 -0.75 8.25756 -0.75Q9.28029 -0.75 10.075 -0.0270393Q10.7581 0.59432 11.0361 1.5241Q11.0388 1.52751 11.0429 1.53172Q11.0616 1.55124 11.0743 1.55647Q12.7574 2.24939 13.7022 3.48514Q15.0015 5.18458 15.0015 7.93828Q15.0015 10.3799 15.4621 11.6174Q15.6466 12.113 15.9576 12.572Q16.1595 12.87 16.6569 13.4709Q16.8076 13.6529 16.8858 13.7487L16.886 13.749ZM6.00756 16.5Q6.00756 17.432 6.66656 18.091Q7.32558 18.75 8.25756 18.75Q9.18954 18.75 9.84855 18.091Q10.5076 17.432 10.5076 16.5L6.00756 16.5ZM11.2576 15L1.02052 15Q0.833197 15 0.769107 14.8745Q0.721955 14.7821 0.790845 14.6978Q0.866173 14.6056 1.01393 14.4271Q1.55708 13.7708 1.79938 13.4133Q2.21151 12.8052 2.45907 12.1408Q3.01443 10.6502 3.01599 7.93828Q3.01599 5.6899 4.00613 4.39523Q4.70363 3.48321 6.01366 2.94374Q6.31897 2.8183 6.55582 2.57273Q6.81641 2.30255 6.91525 1.96574Q7.0719 1.42681 7.4499 1.08254Q7.81501 0.75 8.25756 0.75Q8.7001 0.75 9.06567 1.08255Q9.44413 1.42683 9.60338 1.96881Q9.70172 2.30025 9.96004 2.56972Q10.1982 2.8182 10.5033 2.94353Q11.8118 3.48223 12.5105 4.39619Q13.5015 5.69229 13.5015 7.93828Q13.5015 10.65 14.0564 12.1407Q14.3037 12.8052 14.7158 13.4134Q14.9581 13.7709 15.5013 14.4273Q15.6488 14.6054 15.7241 14.6976L15.7243 14.6978Q15.7922 14.7813 15.7445 14.8754Q15.6814 15 15.4993 15L11.2576 15Z" fill-rule="evenodd" fill="rgb(75, 85, 99)"/>
		</g>
	</g>
</svg>
        </button>

        <img
          src={avatarUrl}
          alt={`${name} avatar`}
          className="w-10 h-10 rounded-full object-cover border border-[#F3F4F6]"
        />
      </div>
    </header>
  );
};
