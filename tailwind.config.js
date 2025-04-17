// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'from-[#56CCF2]', 'to-[#2F80ED]',
    'from-[#A1FFCE]', 'to-[#E7FFE0]',
    'from-[#FFF1D6]', 'to-[#FACC15]',
    'from-[#FFD8B8]', 'to-[#FF9C74]',   // Jarrohlik
    'from-[#D0E8FF]', 'to-[#A1CFFF]'    // Uyda xizmat
  ],
};
