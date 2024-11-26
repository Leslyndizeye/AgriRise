import React from 'react';

const ProductDescription = () => {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description </button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide </button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>
                At AgriRise, we provide products designed to improve farming efficiency and sustainability. Our offerings include premium quality seeds, fertilizers, irrigation systems, and tools for modern agriculture. Each product is crafted to help farmers optimize their yield while protecting the environment and ensuring long-term soil health.
            </p>
            <p className='text-sm'>
                From high-yielding seed varieties to organic fertilizers and efficient irrigation systems, our products are created with the goal of enhancing food security and supporting sustainable agricultural practices. AgriRise products are specifically chosen to help farmers adapt to changing climate conditions and maximize their productivity.
            </p>
        </div>
    </div>
  )
}

export default ProductDescription;
