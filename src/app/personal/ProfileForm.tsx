"use client";
import Image from "next/image";

export default function ProfileForm() {
  return (
    <div className="flex-1 bg-white  rounded-lg p-4">
      <h1 className="text-[45px] font-medium mb-2 border-b border-gray-300">Personal Information</h1>
      <p className="text-[#181818] text-[20px] font-thin italic pt-[30px] mb-8">Manage your profile details:</p>

      <form className="space-y-6">
        {/* Profile photo */}
        <div>
          <label className="block mb-2 text-[20px] font-medium">1. Profile Photo</label>  
            <Image src="/avatar.png" alt="User" width={150} height={150} />  
        </div>

        {/* Full name */}
        <div>
          <label className="block mb-2 text-[20px] font-medium pb-[10px]">2. Full Name</label>
          <input
            type="text"
            placeholder="Enter"
            className="w-full border-none rounded-md px-4 py-2 text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-[20px] font-medium pb-[10px]">3. Email Address</label>
          <input
            type="email"
            placeholder="Enter"
            className="w-full border-none rounded-md px-4 py-2 text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-[20px] font-medium pb-[10px]">4. Phone Number</label>
          <input
            type="tel"
            placeholder="Enter"
            className="w-full border-none rounded-md px-4 py-2 text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] focus:outline-none"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 font-medium text-[20px] pb-[10px]">5. Location</label>
          <input
            type="text"
            placeholder="Enter"
            className="w-full border-none rounded-md px-4 py-2 text-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] focus:outline-none"
          />
        </div>

        {/* Short bio */}
        <div>
          <label className="block mb-2 font-medium text-[20px] pb-[10px]">6. Short Bio</label>
          <textarea
            placeholder="Enter"
            rows={4}
            className="w-full border-none rounded-md px-4 py-2 text-[20px] focus:outline-none shadow-[0_0_10px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* Save button */}
        <button
          type="submit"
          className="px-6 py-2 bg-[#507001] w-[166px] text-[20px] text-white rounded-md hover:bg-[#2d4e30] transition-colors duration-500 ease-in-out"
        >
          Save
        </button>
      </form>
    </div>
  );
}
