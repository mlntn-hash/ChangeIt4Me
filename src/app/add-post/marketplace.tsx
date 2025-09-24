import Image from "next/image";

export default function MarketplaceForm() {
  return (
    <div>
      {/* Заголовок */}
      <div className="flex items-center gap-3 mb-6">
        <Image src="/add4.svg" alt="Step 1" width={41} height={41} />
        <p className="font-medium text-[38px]">Item Details</p>
      </div>

      {/* Форма у 3 колонки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Type of Item */}
        <div className="flex flex-col">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">
            Type of Item
          </label>
          <div className="relative">
            <Image
              src="/search.svg"
              alt="search"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Enter"
              className="w-full h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 rounded-lg focus:outline-none focus:border-[#507001]"
            />
          </div>
        </div>

        {/* Brand */}
        <div className="flex flex-col">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">
            Brand
          </label>
          <input
            type="text"
            placeholder="Enter"
            className="w-full h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] px-4 rounded-lg focus:outline-none focus:border-[#507001]"
          />
        </div>

        {/* Condition */}
        <div className="flex flex-col">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">
            Condition
          </label>
          <div className="relative">
            <Image
              src="/search.svg"
              alt="search"
              width={20}
              height={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Enter"
              className="w-full h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 rounded-lg focus:outline-none focus:border-[#507001]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

