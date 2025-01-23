import React from 'react';
import { Sparkles, Timer } from 'lucide-react';

export function ComingSoon() {
  return (
    <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg shadow-lg overflow-hidden w-[380px] h-[400px] group mx-auto">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="relative h-full flex flex-col items-center justify-center p-8 pt-12 text-center">
        <div className="mb-6">
          <div className="relative">
            <Sparkles className="w-12 h-12 text-blue-500 dark:text-blue-400 animate-pulse" />
            <div className="absolute -inset-1 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur animate-pulse" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Next Wave of Opportunities
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Exceptional businesses launching soon. Join the waitlist to get early access.
        </p>
        
        <div className="flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400 mb-8 shine-effect px-4 py-1 rounded-full">
          <Timer className="w-4 h-4" />
          <span>Coming Q2 2025</span>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-lg text-lg font-medium">
          Join Waitlist
        </button>
      </div>
      
      <div className="absolute inset-0 border-2 border-dashed border-blue-500/20 dark:border-blue-400/20 rounded-lg" />
    </div>
  );
}