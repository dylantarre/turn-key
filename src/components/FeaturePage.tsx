import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Globe, HeartHandshake, Sparkles } from 'lucide-react';

const featureContent = {
  'ready-in-48h': {
    title: 'Your Business, Ready in 48 Hours',
    icon: Zap,
    description: 'Skip the complex setup - we handle everything. Just log in and start running your business.',
    benefits: [
      'Zero technical setup required',
      'All systems pre-configured and tested',
      'Start making money immediately',
      'Simple dashboard to manage everything'
    ],
    timeline: '24-48 hours to full operation'
  },
  'proven-brand': {
    title: 'Established, Profitable Brands',
    icon: Globe,
    description: 'Take over a business that\'s already making money - no guesswork involved.',
    benefits: [
      'Proven revenue history',
      'Existing customer base',
      'Established market position',
      'Ready-to-use brand assets'
    ],
    timeline: 'Immediate transfer upon purchase'
  },
  '24-7-help': {
    title: 'Round-the-Clock Expert Support',
    icon: HeartHandshake,
    description: 'Never worry about technical issues - our team handles everything for you.',
    benefits: [
      'Always available support team',
      'We handle all technical problems',
      'Step-by-step guidance',
      'Business coaching included'
    ],
    timeline: 'Ongoing support'
  },
  'future-proof': {
    title: 'Built to Grow With You',
    icon: Sparkles,
    description: 'Focus on growing your business while we handle all the technical details.',
    benefits: [
      'Automatic system upgrades',
      'Easy-to-read performance reports',
      'Built-in marketing tools',
      'Room to scale without headaches'
    ],
    timeline: 'Built-in scalability'
  }
};

interface FeaturePageProps {
  feature: keyof typeof featureContent;
}

export function FeaturePage({ feature }: FeaturePageProps) {
  const content = featureContent[feature];
  const Icon = content.icon;

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Link 
        to="/"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Overview
      </Link>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
            <Icon className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {content.title}
          </h2>
        </div>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {content.description}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Key Benefits
            </h3>
            <ul className="space-y-3">
              {content.benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Timeline
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {content.timeline}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}