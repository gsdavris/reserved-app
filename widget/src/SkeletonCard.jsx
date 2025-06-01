export default function SkeletonCard() {
  return (
    <div className='animate-pulse bg-white rounded-lg shadow border p-4 space-y-2'>
      <div className='bg-gray-300 h-40 w-full rounded'></div>
      <div className='h-4 bg-gray-300 rounded w-3/4'></div>
      <div className='h-3 bg-gray-200 rounded w-1/2'></div>
      <div className='h-3 bg-gray-200 rounded w-1/3'></div>
    </div>
  );
}
