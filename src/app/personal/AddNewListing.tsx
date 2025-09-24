import React from 'react';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function AddNewListing() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[45px] font-medium mb-4 border-b border-gray-300 pb-2 pt-[10px]">
            Add New Listing
          </h1>
      </div>
      <div className="w-full max-w-[1000px]">
        <div className="bg-[#EDEEE6] rounded-[18px] h-[350px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#DADADA] transition-colors duration-300 ease-in-out">
          {/* Plus Icon Circle */}
          <p className="text-[38px] font-regular text-[#181818] pb-[30px]">Add a New Ad</p>
          <div className="w-[159px] h-[159px] bg-[#D9D9D9] rounded-full flex items-center justify-center mb-4">
            <Link href="/add-post">
            <Plus className="w-[40px] h-[40px] text-[#888888] scale-y-150 scale-x-150" strokeWidth={1} />
            </Link>
          </div>
          
      
        </div>
      </div>
    </div>
  );
}