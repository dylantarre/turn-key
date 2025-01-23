import { Business } from './types';

export const businesses: Business[] = [
  {
    id: '1',
    title: 'Vegas SEO Guru',
    description: 'Premier Las Vegas SEO agency helping businesses dominate local search rankings with proven strategies and measurable results.',
    url: 'vegasseo.guru',
    imageUrl: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80',
    category: 'Tech',
    metrics: {
      monthlyTraffic: '75K+',
      revenue: '$12K/mo',
      growthRate: '15%',
    },
    changelog: [
      {
        date: '2025-01-15',
        changes: [
          'Launched advanced local SEO tracking dashboard',
          'Implemented AI-powered keyword research tool',
          'Enhanced client reporting system'
        ]
      },
      {
        date: '2025-01-08',
        changes: [
          'Added automated rank tracking for local businesses',
          'Improved competitor analysis features'
        ]
      }
    ],
    price: 25000,
    complexity: 'Intermediate',
  },
  {
    id: '2',
    title: 'Encyclopedian',
    description: 'Modern knowledge platform with AI-powered search and expert-curated content across diverse topics.',
    url: 'encyclopedian.com',
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80',
    category: 'EdTech',
    metrics: {
      monthlyTraffic: '35K+',
      revenue: '$15K/mo',
      growthRate: '20%',
    },
    changelog: [
      {
        date: '2025-01-18',
        changes: [
          'Launched AI-powered semantic search',
          'Added expert verification system',
          'Introduced interactive knowledge graphs'
        ]
      },
      {
        date: '2025-01-12',
        changes: [
          'Implemented content rating algorithm',
          'Enhanced multimedia integration'
        ]
      }
    ],
    price: 15000,
    complexity: 'Advanced',
  },
  {
    id: '3',
    title: 'Music Chart Feeds',
    description: 'Real-time music chart analytics and trending tracks platform with comprehensive data across multiple streaming services.',
    url: 'musicchartfeeds.com',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80',
    category: 'Tech',
    metrics: {
      monthlyTraffic: '40K+',
      revenue: '$6K/mo',
      growthRate: '20%',
    },
    changelog: [
      {
        date: '2025-01-21',
        changes: [
          'Added support for new streaming platforms',
          'Launched real-time chart movement alerts',
          'Enhanced data visualization dashboard'
        ]
      },
      {
        date: '2025-01-14',
        changes: [
          'Implemented trend prediction algorithm',
          'Added artist performance analytics'
        ]
      }
    ],
    price: 18000,
    complexity: 'Intermediate',
  },
];