"use client";
import Header from "../header/header";
import Footer from "../footer/footer";
import Image from "next/image";
import Link from "next/link";
import PopularOffers from "./twoBlock";
import HowItWorks from "./sectionOne";
import Newsletter from "./email";
import Category from "./category";

export default function homePage() {
  return (
    <div>
      {/* Контейнер с фиксированной шириной */}
    
      <div className="relative  flex flex-col  ">
           <Header />
           <Category />
             

    </div>

{/* Основной блок */}
<div className="w-full bg-[#F8FAF7]">
  <div className="flex w-[1300px] mx-auto pt-[50px] pb-[60px] gap-10">
    
    {/* Левая колонка */}
<div className="flex flex-col gap-6 w-[604px]">
  {/* Don’t buy it */}
  <div>
    <div className="relative pl-[30px] rounded-[15px] flex flex-col justify-center h-[353px] w-full overflow-hidden bg-[#EDEEE6]">
      
      {/* Фоновая картинка */}
      <img
        src="/fonfirst.webp"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Контент */}
      <div className="relative z-10">
        <h1 className="text-3xl font-regular mb-4 text-[50px] text-[#181818]" >Don’t buy it — Swap it!</h1>
        <p className="font-regular text-[24px] text-[#181818] mb-6">
          Cars, real estate & goods key-for-key.
        </p>
        <button className="bg-[#507001] text-[17px] font-regular text-white px-6 py-3 rounded-[8px] w-[196px] h-[50px] hover:bg-[#2d4e30] transition-colors duration-500 ease-in-out">
          Post Your Offer
        </button>
      </div>
    </div>
  </div>


      {/* Real Estate */}
      <div className="bg-white rounded-[15px] shadow p-6 mt-[15px] flex flex-col relative h-[320px] w-[943px] shadow-[0_0_10px_rgba(0,0,0,0.15)]">
        <Image
          src="/home.webp"
          alt="Real Estate"
          width={350}
          height={350}
          className="absolute top-0 right-0"
        />
        <h2 className="text-[32px] font-regular text-[#181818] mt-[150px] ml-[10px]">Real Estate</h2>
        <p className="text-[17px] font-regular text-[#181818] mb-4 ml-[10px]">
          Exchange your home, apartment, or land directly and easily.
        </p>
        <Link href="/real-estate" className="text-[16px] font-regular text-[#181818] ml-[10px] transform hover:scale-101 duration-300 ease-in-out">
          See items →
        </Link>
        <div className="absolute bottom-[-30px] right-[-30px]">
         <img
            src="/house1.png"
            alt="Marketplace Icon"
            className="w-[132px] h-[132px]"
          />
        </div>
      </div>
    </div>

    {/* Правая колонка (Cars + Marketplace в стопку) */}
    <div className="flex flex-col gap-6 w-[654px]">
      <div className="flex gap-6">
        {/* Cars */}
        <div className="bg-white rounded-[15px] shadow p-6 mr-[15px] flex flex-col relative h-[353px] w-[327px] shadow-[0_0_10px_rgba(0,0,0,0.15)]">
          <Image
          src="/car.webp"
          alt="Real Estate"
          width={260}
          height={260}
          className="absolute top-0 right-0"
        />
          <h2 className="text-[32px] font-regular text-[#181818] mt-[160px] ml-[10px]">Cars</h2>
          <p className="text-[17px] font-regular text-[#181818] mb-4 ml-[10px]">
            Swap your vehicle for another — no cash needed.
          </p>
          <Link href="/cars" className="text-[16px] font-regular text-[#181818] ml-[10px] transform hover:scale-101 duration-300 ease-in-out">
            See items →
          </Link>
         <div className="absolute bottom-[-30px] right-[-30px]">
         <img
            src="/carr.png"
            alt="Marketplace Icon"
            className="w-[132px] h-[132px]"
          />
        </div>
        </div>

        {/* Marketplace */}
        <div className="bg-white rounded-[15px] shadow p-6 flex flex-col relative h-[712px] w-[327px] shadow-[0_0_10px_rgba(0,0,0,0.15)]">
           <Image
          src="/shops.webp"
          alt="Real Estate"
          width={260}
          height={260}
          className="absolute top-0 right-0"
        />
          <h2 className="text-[32px] font-regular text-[#181818] mt-[480px] ml-[10px]">Marketplace</h2>
          <p className="text-[17px] font-regular text-[#181818] mb-4 ml-[10px]">
            Trade electronics, furniture, clothes, and more — item for item.
          </p>
          <Link href="/marketplace" className="text-[16px] font-regular text-[#181818] ml-[10px] transform hover:scale-101 duration-300 ease-in-out">
            See items →
          </Link>
          <div className="absolute bottom-[-30px] right-[-30px]">
         <img
            src="/shop1.png"
            alt="Marketplace Icon"
            className="w-[132px] h-[132px]"
          />
        </div>
        </div>
      </div>
    </div>
  </div>


        
</div>
       <PopularOffers/>
        <HowItWorks/>
        <Newsletter/>
          <Footer />
         </div>
       
      
  )
}