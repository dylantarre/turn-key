import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, TrendingUp, Users, DollarSign, BarChart3, Calendar, Clock } from 'lucide-react';
import { businesses } from '../data';

export function BusinessDetails() {
  const { id } = useParams();
  const business = businesses.find(b => b.id === id);

  if (!business) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Business not found</h2>
        <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">Return home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link 
        to="/"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Opportunities
      </Link>

      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden mb-8">
        <div className="relative h-96">
          <img
            src={business.imageUrl}
            alt={business.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className={`inline-block ${categoryColors[business.category]} text-white px-3 py-1 rounded-full text-sm font-semibold mb-4`}>
              {business.category}
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">{business.title}</h1>
            <a
              href={`https://${business.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white flex items-center gap-1 text-lg"
            >
              <Globe className="w-5 h-5" />
              {business.url}
            </a>
          </div>
        </div>

        {/* Content Grid */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {business.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Metrics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <MetricCard
                  icon={Users}
                  label="Monthly Traffic"
                  value={business.metrics.monthlyTraffic || 'N/A'}
                />
                <MetricCard
                  icon={DollarSign}
                  label="Revenue"
                  value={business.metrics.revenue || 'N/A'}
                />
                <MetricCard
                  icon={TrendingUp}
                  label="Growth Rate"
                  value={business.metrics.growthRate || 'N/A'}
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recent Updates</h2>
              <div className="space-y-6">
                {business.changelog.map((log, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4" />
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
                          className="text-gray-700 dark:text-gray-300"
                        >
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                ${business.price.toLocaleString()}
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-6">
                <Clock className="w-4 h-4" />
                <span>Ready to launch in 24-48 hours</span>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4">
                Purchase Now
              </button>
              <button className="w-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                Schedule a Call
              </button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Business Details</h3>
              <div className="space-y-3">
                <DetailRow icon={BarChart3} label="Complexity" value={business.complexity} />
                <DetailRow icon={Globe} label="Industry" value={business.category} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
      <div className="text-xl font-semibold text-gray-900 dark:text-white">{value}</div>
    </div>
  );
}

function DetailRow({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      <span className="text-gray-600 dark:text-gray-300">{label}:</span>
      <span className="text-gray-900 dark:text-white font-medium">{value}</span>
    </div>
  );
}

const categoryColors: Record<string, string> = {
  Tech: 'bg-blue-500',
  'E-commerce': 'bg-green-500',
  EdTech: 'bg-purple-500',
  Directory: 'bg-orange-500',
};