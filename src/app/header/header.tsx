import React from "react";
import { Search, LogIn } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';


const Header = () => {
  return (
    <header className="bg-[#FFFFFD] px-6 py-3 border-b border-gray-200">
      <div className="w-[1270px] mx-auto flex items-center justify-between">
        
        {/* -------- ЛОГОТИП -------- */}
        <div className="flex items-start">
          <Link href="/">
  <Image
    src="/logo2.png"
    alt="ChangeIt4Me"
    width={193}
    height={64}
    className="cursor-pointer"
  />
</Link>
        </div>

        {/* -------- ПРАВАЯ ЧАСТЬ: поиск + кнопки -------- */}
        <div className="flex items-center space-x-4">
          
          {/* --- ПОИСК --- */}
          <div className="relative w-[300px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#C0C0C0]" />
            <input
              type="text"
              placeholder="Search"
              className="h-[41px] w-full shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-3 py-2  
                         rounded-[6px] bg-gray-50 text-[17px]
                          outline-none focus:outline-none focus:ring-0"
            />
          </div>

          {/* --- Кнопка "Подать объявление" --- */}
          <Link href="/add-post">
  
    <button className="bg-[#507001] h-[41px] w-[161px] hover:bg-[#2d4e30] 
                       text-white rounded-lg  cursor-pointer text-[17px] font-medium transition-colors duration-500 ease-in-out">
      Post an Ad
    </button>
  
</Link>

          {/* --- Кнопка "Войти/Регистрация" --- */}
         <div className="flex items-center text-[17px] font-medium text-[#181818]">
  <LogIn className="h-[20px] w-[20px] mr-2" />
  <Link href="/login" className="mr-2 hover:underline">
    Login
  </Link>
  /
  <Link href="/register" className="ml-2 hover:underline">
    Register
  </Link>
</div>

        </div>
      </div>
    </header>
  );
};

export default Header;
