  import React from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { PromoBanner } from './components/PromoBanner';
import { ServicesCarousel } from './components/ServicesCarousel';
import { ClinicsList } from './components/ClinicsList';
import { Specialists } from './components/Specialists';
import { BottomNav } from './components/BottomNav';

export default function App() {
  return (
    <div className="pb-16 bg-[#F9FAFB] min-h-screen">
      {/* 1. Header */}
      <Header name="Jasur" avatarUrl="../public/images/jasur.png" />

      {/* 2. Search */}
      <SearchBar />

      {/* 3. Promo banner */}
      <PromoBanner />

      {/* 4. Services carousel */}
      <ServicesCarousel />

      {/* 5. Clinics list */}
      <ClinicsList />

      {/* 6. Specialists */}
      <Specialists />

      {/* 7. Bottom navigation */}
      <BottomNav />
    </div>
  );
}
