
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-t-primaryGradient-light border-gray-300 rounded-full animate-spin"></div>
      {/* Loading Text */}
      <p className="mt-4 text-lg font-medium text-primaryText ">Loading...</p>
    </div>
  );
}