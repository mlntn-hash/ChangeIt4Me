"use client";
import Header from "../header/header";
import Footer from "../footer/footer";
import Image from "next/image";
import Link from "next/link";
import Category from "../homePage/category";


export default function homePage() {
  return (
    <div>
      {/* Контейнер с фиксированной шириной */}
    
      <div className="relative  flex flex-col  ">
           <Header />
           <Category />
      <div className="w-[1300px] mx-auto pt-[50px] pb-[60px] gap-10px]">
        <div className="flex items-center gap-2 pb-[20px] text-[20px]">
          <Link href="/" className="hover:text-[#2d4e30] transition-colors duration-500 ease-in-out">
            Home
          </Link>
          <span className="text-[40px] font-light pb-[7px]">›</span>
          <Link href="/add-post" className="font-bold text-[20px] hover:text-[#2d4e30] transition-colors duration-500 ease-in-out">
            Post a New Ad
          </Link>
        </div>
        </div>
    </div>

{/* Основной блок */}
<div className="w-full bg-[#F8FAF7]">
  <div className="flex w-[1300px] mx-auto pt-[50px] pb-[60px] gap-10">
    
   
        </div>
        </div>

       
       
          <Footer />
         </div>
       
      
  )
}