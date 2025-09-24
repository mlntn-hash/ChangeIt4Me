import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MyListings() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  interface Listing {
    category: string;
    title: string;
    description: string;
    image: string;
    action: string;
    status: string;
    statusColor: 'orange' | 'red' | 'green';
  }
  
  const listings: Listing[] = [
    {
      category: "Cars",
      title: "Volkswagen 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/blue-car1.webp",
      action: "Change",
      status: "Not Viewed",
      statusColor: "orange"
    },
    {
      category: "Real estate", 
      title: "Modern House",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/house1.webp",
      action: "Change",
      status: "Cancelled",
      statusColor: "red"
    },
    {
      category: "Real estate",
      title: "Apartment", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/room.png",
      action: "Change",
      status: "Complete",
      statusColor: "green"
    },
    {
      category: "Cars",
      title: "BMW 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/dark-car.webp",
      action: "Change",
      status: "Cancelled",
      statusColor: "red"
    },
    {
      category: "Marketplace",
      title: "Laptop",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/laptop.webp",
      action: "Change",
      status: "Not Viewed",
      statusColor: "orange"
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, listings.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  const visibleListings = listings.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="bg-white">
      {/* Header */}
      <h1 className="text-[45px] font-medium mb-4 border-b border-gray-300 pb-2 pt-[10px]">
        My Listings
      </h1>
      
      <div className="flex justify-between items-center mb-6">
        <div></div>
        {/* Navigation arrows */}
        <div className="flex gap-2">
          <button 
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
              currentIndex === 0 
                ? 'bg-gray-200 cursor-not-allowed' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <ChevronLeft className={`w-5 h-5 ${currentIndex === 0 ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
              currentIndex >= maxIndex 
                ? 'bg-gray-200 cursor-not-allowed' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <ChevronRight className={`w-5 h-5 ${currentIndex >= maxIndex ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleListings.map((listing, i) => (
          <div
            key={currentIndex + i}
            className="relative rounded-[18px] overflow-hidden shadow-md h-[411px] flex items-end bg-gray-200"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${listing.image})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

            {/* Status Badge */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-[10px] text-sm font-medium z-20 ${
              listing.statusColor === 'orange' ? 'bg-orange-500 text-white' :
              listing.statusColor === 'red' ? 'bg-red-500 text-white' :
              listing.statusColor === 'green' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
            }`}>
              Status: {listing.status}
            </div>


            {/* Content */}
            <div className="relative p-4 text-white z-10 pb-[30px] pl-[20px]">
              <p className="text-[16px] font-thin">{listing.category}</p>
              <h3 className="text-[22px] font-regular">{listing.title}</h3>
              <p className="text-[16px] mb-2">
                {listing.description}
              </p>
              <a 
                href="#" 
                className="flex text-[16px] items-center gap-2 text-sm font-thin transform hover:scale-101 duration-300 ease-in-out"
              >
                {listing.action} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}