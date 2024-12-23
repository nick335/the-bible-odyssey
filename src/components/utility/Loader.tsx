import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-t-primaryGradient-light border-gray-300 rounded-full animate-spin"></div>
      {/* Loading Text */}
      <p className="mt-4 text-lg font-medium text-primaryText ">Loading...</p>
    </div>
  );
};

export default Loader;
