import React from 'react';

const SlideSkeleton = () => {
  return (
    <div className='w-full flex items-center px-6 md:px-[104px]'>
        <div className='w-full flex items-center gap-x-[10px] md:gap-x-6 overflow-hidden'>
            <div className='w-40 h-20 md:w-[320px] md:h-[120px] flex-shrink-0 bg-slate-300 bg-skeleton bg-no-repeat bg-offsetShine animate-skeleton-loading rounded-md'></div>
            <div className='w-40 h-20 md:w-[320px] md:h-[120px] flex-shrink-0 bg-slate-300 bg-skeleton bg-no-repeat bg-offsetShine animate-skeleton-loading rounded-md'></div>
            <div className='w-40 h-20 md:w-[320px] md:h-[120px] flex-shrink-0 bg-slate-300 bg-skeleton bg-no-repeat bg-offsetShine animate-skeleton-loading rounded-md'></div>
            <div className='w-40 h-20 md:w-[320px] md:h-[120px] flex-shrink-0 bg-slate-300 bg-skeleton bg-no-repeat bg-offsetShine animate-skeleton-loading rounded-md'></div>
        </div>
    </div>
  )
}

export default SlideSkeleton