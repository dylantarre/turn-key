import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Clock } from 'lucide-react';
import { Business } from '../types';

interface BusinessCardProps {
  business: Business;
}

const categoryColors: Record<string, string> = {
  Tech: 'bg-blue-500',
  'E-commerce': 'bg-green-500',
  EdTech: 'bg-purple-500',
  Directory: 'bg-orange-500',
};

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-[380px] transition-colors">
      <div className="relative">
        <img
          src={business.imageUrl}
          alt={business.title}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-4 right-4 ${categoryColors[business.category]} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
          {business.category}
        </div>
        <button
          onClick={() => document.getElementById(`changelog-${business.id}`)?.showModal()}
          className="absolute top-4 left-4 flex items-center gap-1 text-xs text-white hover:text-gray-200 cursor-pointer bg-black/50 px-2 py-1 rounded backdrop-blur-sm transition-colors"
        >
          <Clock className="w-3 h-3" />
          {new Date(business.changelog[0].date).toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: '2-digit'
          })}
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{business.title}</h3>
        
        <a
          href={`https://${business.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1 mb-1 text-sm"
        >
          {business.url} <ExternalLink size={14} />
        </a>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
          {business.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
            {business.complexity}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${business.price.toLocaleString()}
          </span>
          <Link 
            to={`/business/${business.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
          </Link>
        </div>

        <dialog
          id={`changelog-${business.id}`}
          className="backdrop:bg-gray-950/50 p-0 bg-transparent outline-none"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-[400px] max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Updates
            </h3>
            <div className="space-y-6">
              {business.changelog.map((log, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(log.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <ul className="space-y-2">
                    {log.changes.map((change, changeIndex) => (
                      <li
                        key={changeIndex}
                        className="text-gray-700 dark:text-gray-300 text-sm"
                      >
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => document.getElementById(`changelog-${business.id}`)?.close()}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}