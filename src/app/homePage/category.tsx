import Link from "next/link";


export default function category() {
  return (
<div className="w-full bg-[#EDEEE6]">
      <div className="flex justify-end items-center gap-6 h-[76px] max-w-[1300px] mx-auto">

        {/* Cars */}
        <Link 
          href="/cars" 
          className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-[#181818] text-[20px] 
                     hover:bg-white transition-colors duration-500 ease-in-out h-[50px] hover:shadow-[0_0_10px_rgba(0,0,0,0.15)]"
        >
          <img
            src="/Group 12 (2).svg"
            alt="Cars Icon"
            className="w-[40px] h-[40px]"
          />
          <span>Cars (998 items)</span>
        </Link>

        {/* Real Estate */}
        <Link 
          href="/real-estate" 
          className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-[#181818] text-[20px] 
                     hover:bg-white h-[50px] transition-colors duration-500 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.15)]"
        >
          <img
            src="/Group 12 (1).svg"
            alt="Real Estate Icon"
            className="w-[40px] h-[40px]"
          />
          <span>Real Estate (990 items)</span>
        </Link>

        {/* Marketplace */}
        <Link 
          href="/marketplace" 
          className="flex items-center gap-2 px-4 py-2 rounded-[10px] text-[#181818] text-[20px] 
                     hover:bg-white h-[50px] transition-colors duration-500 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.15)]"
        >
          <img
            src="/Group 12.svg"
            alt="Marketplace Icon"
            className="w-[40px] h-[40px]"
          />
          <span>Marketplace (1220 items)</span>
        </Link>

      </div>
    </div>
   
  )}