"use client";
import { useSearchParams } from "next/navigation";
import Header from "../header/header";
import Footer from "../footer/footer";
import Category from "../homePage/category";
import CarListingPreview from "./auto";
import MarketplaceListingPreview from "./marketplace";
import HouseListingPreview from "./house";

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div>
      <Header />
      <Category />

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
  </div> </div>
      <Footer />
    </div>
  );
}
