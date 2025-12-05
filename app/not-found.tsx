'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-stone-50">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-forest-100 rounded-full mb-8">
          <span className="text-5xl">🌳</span>
        </div>
        <h1 className="font-display text-6xl font-bold text-forest-950 mb-4">404</h1>
        <h2 className="font-display text-2xl font-semibold text-forest-800 mb-4">Page Not Found</h2>
        <p className="text-stone-600 mb-8 max-w-md mx-auto">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center justify-center gap-2">
            <Home size={18} />Go Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn-outline inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
