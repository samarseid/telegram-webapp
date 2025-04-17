import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { PromoBanner } from './components/PromoBanner';
import { ServicesCarousel } from './components/ServicesCarousel';
import { ClinicsList } from './components/ClinicsList';
import { Specialists } from './components/Specialists';
import { BottomNav } from './components/BottomNav';
export default function App() {
    return (_jsxs("div", { className: "pb-16 bg-[#F9FAFB] min-h-screen", children: [_jsx(Header, { name: "Jasur", avatarUrl: "/avatars/jasur.png" }), _jsx(SearchBar, {}), _jsx(PromoBanner, {}), _jsx(ServicesCarousel, {}), _jsx(ClinicsList, {}), _jsx(Specialists, {}), _jsx(BottomNav, {})] }));
}
