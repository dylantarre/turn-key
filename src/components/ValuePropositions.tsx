import React from 'react';
import { Zap, Globe, HeartHandshake, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ValuePropositions() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3 max-w-7xl mx-auto">
      {/* Step 1: Quick Start */}
      <Link 
        to="/ready-in-48h"
        className="flex items-center gap-3 bg-white/50 dark:bg-white/5 px-6 py-3 transform skew-x-[-8deg] hover:scale-105 transition-transform"
      >
        <div className="bg-blue-50 dark:bg-blue-900/20 p-2">
          <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <span className="font-medium italic text-gray-900 dark:text-white transform skew-x-[8deg]">
          Ready in 48h
        </span>
      </Link>
      
      {/* Step 2: Premium Domains */}
      <Link 
        to="/proven-brand"
        className="flex items-center gap-3 bg-white/50 dark:bg-white/5 px-6 py-3 transform skew-x-[-8deg] hover:scale-105 transition-transform"
      >
        <div className="bg-blue-50 dark:bg-blue-900/20 p-2">
          <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <span className="font-medium italic text-gray-900 dark:text-white transform skew-x-[8deg]">
          Proven Brand
        </span>
      </Link>
      
      {/* Step 3: Technical Support */}
      <Link 
        to="/24-7-help"
        className="flex items-center gap-3 bg-white/50 dark:bg-white/5 px-6 py-3 transform skew-x-[-8deg] hover:scale-105 transition-transform"
      >
        <div className="bg-blue-50 dark:bg-blue-900/20 p-2">
          <HeartHandshake className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <span className="font-medium italic text-gray-900 dark:text-white transform skew-x-[8deg]">
          24/7 Help
        </span>
      </Link>
      
      {/* Step 4: Growth Ready */}
      <Link 
        to="/future-proof"
        className="flex items-center gap-3 bg-white/50 dark:bg-white/5 px-6 py-3 transform skew-x-[-8deg] hover:scale-105 transition-transform"
      >
        <div className="bg-blue-50 dark:bg-blue-900/20 p-2">
          <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <span className="font-medium italic text-gray-900 dark:text-white transform skew-x-[8deg]">
          Future-Proof
        </span>
      </Link>
      
      <button className="flex-shrink-0 flex items-center gap-2 bg-orange-600 text-white px-6 py-3 transform skew-x-[-8deg] hover:scale-105 transition-transform clip-path-arrow">
        <span className="transform skew-x-[8deg]">Start Earning</span>
      </button>
    </div>
  );
}