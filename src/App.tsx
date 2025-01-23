import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { businesses } from './data';
import { BusinessCard } from './components/BusinessCard';
import { FilterBar } from './components/FilterBar';
import { SortOption } from './types';
import { ThemeToggle } from './components/ThemeToggle';
import { ValuePropositions } from './components/ValuePropositions';
import { FeaturePage } from './components/FeaturePage';
import Waves from './components/Waves';
import { useTheme } from './contexts/ThemeContext';
import { Footer } from './components/Footer';
import { TermsOfService } from './pages/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { BusinessDetails } from './pages/BusinessDetails';
import { ComingSoon } from './components/ComingSoon';

function App() {
  const [sortOption, setSortOption] = useState<SortOption>('price');
  const { theme } = useTheme();

  const sortedBusinesses = [...businesses].sort((a, b) => {
    switch (sortOption) {
      case 'price':
        return b.price - a.price;
      case 'complexity':
        const complexityOrder = { Beginner: 1, Intermediate: 2, Advanced: 3 };
        return complexityOrder[b.complexity] - complexityOrder[a.complexity];
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Waves
        lineColor={theme === 'light' ? "rgba(0, 0, 0, 0.15)" : "rgba(255, 255, 255, 0.2)"}
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        showCursor={false}
      />
      <ThemeToggle />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
            Your Own Business, Ready to Go
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Fully set up, profitable online businesses - no technical experience needed. Just take the seed and help it grow 🌱.
          </p>
          <Routes>
            <Route path="/" element={<div className="animate-fade-in-up delay-200"><ValuePropositions /></div>} />
            <Route path="/ready-in-48h" element={<FeaturePage feature="ready-in-48h" />} />
            <Route path="/proven-brand" element={<FeaturePage feature="proven-brand" />} />
            <Route path="/24-7-help" element={<FeaturePage feature="24-7-help" />} />
            <Route path="/future-proof" element={<FeaturePage feature="future-proof" />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/business/:id" element={<BusinessDetails />} />
          </Routes>
        </div>

        {/* Filter Bar */}
        <div className="animate-fade-in-up delay-300">
          <FilterBar onSortChange={setSortOption} activeSort={sortOption} />

          {/* Business Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {sortedBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
            <ComingSoon />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;