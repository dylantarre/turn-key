import React from 'react';
import { SortOption } from '../types';

interface FilterBarProps {
  onSortChange: (option: SortOption) => void;
  activeSort: SortOption;
}

export function FilterBar({ onSortChange, activeSort }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <select
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        value={activeSort}
      >
        <option value="price">Sort by Price</option>
        <option value="complexity">Sort by Complexity</option>
        <option value="category">Sort by Category</option>
      </select>
    </div>
  );
}