import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8 font-sans">
      <div className="text-center">
        {/* Animated Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-green-50 rounded-full p-4">
              <AlertCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>
        </div>

        {/* Big 404 Text */}
        <h1 className="text-9xl font-extrabold text-slate-100 tracking-widest select-none">
          404
        </h1>
        
        {/* Main Message (Overlapping the big 404 slightly for style) */}
        <div className="relative -mt-12">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            Page not found
          </h2>
          <p className="mt-4 text-base text-slate-500 max-w-md mx-auto">
            Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or you might have typed the URL incorrectly.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Go Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200 w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          {/* Go Home Button */}
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 border border-transparent rounded-full text-white font-medium hover:bg-green-700 shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;