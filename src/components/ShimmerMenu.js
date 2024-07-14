import React from 'react';

const ShimmerMenu = () => {
  return (
    <div>
        <div className='ml-80 mr-80 rounded-lg  p-2 h-28 bg-gray-200 mt-20 animate-pulse'>

        </div>
    <div className="bg-white overflow-hidden sm:rounded-md mt-246">
      {/* Shimmer effect for each menu item */}
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="p-4 sm:px-6 sm:py-4 flex justify-between items-cente">
          <div className="flex ml-[296px]">
            <div className="h-9 rounded-md bg-gray-200 w-[640px] animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ShimmerMenu;
