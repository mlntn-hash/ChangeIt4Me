// components/Newsletter.tsx
import React from "react";

export default function Newsletter() {
  return (
    <section className="w-[1300px] mx-auto rounded-[14px] bg-white overflow-hidden mb-[50px] shadow-[0_0_10px_rgba(0,0,0,0.15)] relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-12 lg:[grid-template-columns:2fr_2.5fr]">
        
        {/* Левая часть */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[38px] font-regular text-[#181818] mb-4">
            Be the First to Know!
          </h2>
          <p className="text-[17px] text-[#181818]">
            Stay updated on new listings, hot swaps, and platform news.
            <br /> Subscribe to our newsletter!
          </p>
        </div>

        {/* Правая часть — форма */}
        <div className="flex flex-col justify-center items-start relative">
          <div className="flex flex-col  gap-3 w-full max-w-md z-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-[8px] w-[355px] h-[41px] focus:outline-none shadow-[0_0_10px_rgba(0,0,0,0.15)]"
            />
            <button className="bg-[#507001] w-[355px] h-[41px] text-white rounded-[8px] hover:bg-[#2e5030] transition-colors duration-500 ease-in-out">
              Subscribe
            </button>
          </div>

          {/* Картинка внизу справа */}
          <img
            src="/sky.webp"
            alt="Newsletter building"
            className="absolute bottom-[-60px] right-[-40px] w-[250px] h-[200px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
