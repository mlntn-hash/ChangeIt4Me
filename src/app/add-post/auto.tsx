import Image from "next/image";


export default function CarForm() {
  return (
    <div>
      {/* Заголовок */}
      <div className="flex items-center gap-3 mb-6">
        <Image src="/add4.svg" alt="Step 1" width={41} height={41} />
        <p className="font-medium text-[38px]">Item Details</p>
      </div>

      {/* Форма у 2 колонки */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
       <div className="flex flex-col">
  <label className="mb-2 text-[#181818] text-[20px] font-medium">
    Make
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
      className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
    />
  </div>
</div>



        <div className="flex flex-col ml-[40px]">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Fuel Type</label>
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
      className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
    />
  </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Model</label>
          <input
            type="text"
            placeholder="Enter"
            className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] px-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
          />
        </div>

        <div className="flex flex-col ml-[40px]">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Engine Size</label>
          <input
            type="text"
            placeholder="Enter"
            className="w-[540px] h-[45px] px-4 py-3 text-[20px] bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg focus:outline-none focus:border-[#507001]"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Year</label>
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
      className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
    />
  </div>
        </div>

        <div className="flex flex-col ml-[40px]">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Engine Type</label>
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
      className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
    />
  </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Body Type</label>
          <input
            type="text"
            placeholder="Enter"
            className="w-[540px] h-[45px] px-4 py-3 text-[20px] bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg focus:outline-none focus:border-[#507001]"
          />
        </div>

        <div className="flex flex-col ml-[40px]">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Drive Type</label>
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
      className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
    />
  </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Color</label>
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
      className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
    />
  </div>
        </div>

        <div className="flex flex-col ml-[40px]">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Horsepower</label>
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
      className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
    />
  </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Condition</label>
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
      className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
    />
  </div>
        </div>

        <div className="flex flex-col ml-[40px]">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">VIN</label>
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
      className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
    />
  </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Doors</label>
          <input
            type="text"
            placeholder="Enter"
            className="w-[540px] h-[45px] px-4 py-3 text-[20px] bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg focus:outline-none focus:border-[#507001]"
          />
        </div>

        <div className="flex flex-col ml-[40px]">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Ownership History</label>
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
      className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
    />
  </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Mileage</label>
          <input
            type="text"
            placeholder="Enter"
            className="w-[540px] h-[45px] px-4 py-3 text-[20px] bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg focus:outline-none focus:border-[#507001]"
          />
        </div>

        <div className="flex flex-col ml-[40px]">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Accident History</label>
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
      className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
    />
  </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Transmission</label>
          <input
            type="text"
            placeholder="Select"
            className="w-[540px] h-[45px] px-4 py-3 text-[20px] bg-[#FFFFFF] shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg focus:outline-none focus:border-[#507001]"
          />
        </div>

        <div className="flex flex-col ml-[40px]">
          <label className="mb-2 text-[#181818] text-[20px] font-medium">Service History</label>
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
      className="w-[540px] h-[45px] bg-[#FFFFFF] text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-[#507001]"
    />
  </div>
        </div>
      </div>
    </div>
  );
}
