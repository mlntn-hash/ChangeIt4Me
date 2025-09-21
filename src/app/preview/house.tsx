"use client";
import Image from "next/image";

export default function HouseListingPreview() {
  return (
    <div className="w-full">
        <h2 className="text-[45px] border-b mb-[30px] border-gray-300">Preview</h2>
      {/* Верхний блок */}
      <div className="flex gap-8 ">
        
        {/* Фото авто */}
        <div className="w-[500px]">
          <Image
            src="/room.png"
            alt="Car preview"
            width={500}
            height={300}
            className="rounded-lg"
          />
          {/* Маленькие превью */}
          <div className="flex gap-3 mt-4">
            <Image src="/room1.png" alt="thumb" width={50} height={50} className="rounded-md" />
            <Image src="/room2.png" alt="thumb" width={50} height={50} className="rounded-md" />
            <Image src="/room3.png" alt="thumb" width={50} height={50} className="rounded-md" />

          </div>
        </div>

        {/* Описание */}
        <div className="flex-1 pt-[80px]">
           <p className="text-[26px]">Real Estate</p>
          <h2 className="text-[59px] font-regular mb-2">Modern House</h2>
          <p className="text-[#181818] text-[20px] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <div className="flex gap-4 mb-6">
            <span className="px-4 py-1 text-[20px] border border-gray-300 rounded">Location: </span>
            <span className="px-4 py-1 text-[20px] border border-gray-300 rounded">Year: </span>
          </div>

          <div className="flex gap-4 mb-6">
            <button className="px-6 py-2 text-[20px] w-[290px] h-[52px] bg-[#507001] text-white rounded-md">Propose an Exchange</button>
            <button className="px-6 py-2 text-[20px] rounded-md">Send a Message →</button>
          </div>

          {/* Владелец */}
          <div className="flex items-center gap-3">
            <Image
              src="/owner.png" // аватар
              alt="Owner"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Alexandr</p>
              <p className="text-sm text-gray-500">1 year of registering</p>
            </div>
          </div>
        </div>
      </div>

      {/* Таблицы */}
      <div className="grid grid-cols-3 gap-6 mt-12">
        {/* General */}
        <div className="bg-white p-6 rounded-lg ">
            <div className="flex justify-center">
          <h3 className=" mb-4 text-[20px] w-[193px] flex justify-center rounded-[8px] pt-[5px] mb-[30px] h-[42px] bg-[#EDEEE6]">General</h3>
            </div>
          <ul className="space-y-7 text-[20px]">
            <li className="border-b border-gray-300"><b>Type</b></li>
            <li className="border-b border-gray-300"><b>Size</b></li>
          </ul>
        </div>

        {/* Technical Specs */}
        <div className="bg-white p-6 rounded-lg ">
             <div className="flex justify-center">
          <h3 className=" mb-4 text-[20px] w-[193px] flex justify-center rounded-[8px] pt-[5px] mb-[30px] h-[42px] bg-[#EDEEE6]">Rooms</h3>
            </div>
          <ul className="space-y-7 text-[20px]">
            <li className="border-b border-gray-300"><b>Bedrooms</b> </li>
            <li className="border-b border-gray-300"><b>Bathrooms</b> </li>
          </ul>
        </div>

        {/* Additional Info */}
        <div className="bg-white p-6 rounded-lg ">
             <div className="flex justify-center">
          <h3 className=" mb-4 text-[20px] w-[193px] flex justify-center rounded-[8px] mb-[30px] pt-[5px] h-[42px] bg-[#EDEEE6]">Additional Info</h3>
            </div>
          <ul className="space-y-7 text-[20px]">
            <li className="border-b border-gray-300"><b>Condition</b></li>
          </ul>
        </div>
      </div>
    </div>
  );
}