"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Category from "../homePage/category";
import CarListingPreview from "./auto";
import MarketplaceListingPreview from "./marketplace";
import HouseListingPreview from "./house";

// Компонент с useSearchParams обернут в отдельный компонент
function PreviewContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="w-[1300px] mx-auto pt-[50px] pb-[60px]">
      {category === "Car" && <CarListingPreview />}
      {category === "Marketplace" && <MarketplaceListingPreview />}
      {category === "Real Estate" && <HouseListingPreview />}
   
      <div className="flex justify-end mt-6">
        {/* Кнопка "Назад" */}
        <button
          className="px-4 py-2 border h-[58px] rounded-md text-[20px] text-gray-600 hover:bg-[#507001] transition-colors duration-500 ease-in-out"
        >
          ←
        </button>

        {/* Условие для кнопки */}
        <button
          className="px-4 py-2 bg-[#507001] h-[58px] w-[219px] text-white text-[20px] hover:bg-[#2d4e30] rounded-md ml-[20px] transition-colors duration-500 ease-in-out"
        >
          Post an Ad
        </button>
      </div>
    </div>
  );
}

// Главный компонент с Suspense boundary
export default function PreviewPage() {
  return (
    <div>
      <Header />
      <Category />
      
      <Suspense fallback={
        <div className="w-[1300px] mx-auto pt-[50px] pb-[60px]">
          <div className="flex items-center justify-center h-[200px]">
            <div className="text-lg text-gray-600">Loading...</div>
          </div>
        </div>
      }>
        <PreviewContent />
      </Suspense>
      
      <Footer />
    </div>
  );
}