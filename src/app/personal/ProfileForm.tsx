"use client";
import Image from "next/image";

export default function ProfileForm() {
  return (
    <div className="flex-1 bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-medium mb-2">Personal Information</h1>
      <p className="text-gray-500 mb-8">Manage your profile details:</p>

      <form className="space-y-6">
        {/* Profile photo */}
        <div>
          <label className="block mb-2 font-medium">1. Profile Photo</label>
          <div className="w-[100px] h-[100px] rounded-full border flex items-center justify-center bg-gray-100 text-gray-400">
            <Image src="/user.svg" alt="User" width={50} height={50} />
          </div>
        </div>

        {/* Full name */}
        <div>
          <label className="block mb-2 font-medium">2. Full Name</label>
          <input
            type="text"
            placeholder="Enter"
            className="w-full border rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#507001]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">3. Email Address</label>
          <input
            type="email"
            placeholder="Enter"
            className="w-full border rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#507001]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-medium">4. Phone Number</label>
          <input
            type="tel"
            placeholder="Enter"
            className="w-full border rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#507001]"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 font-medium">5. Location</label>
          <input
            type="text"
            placeholder="Enter"
            className="w-full border rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#507001]"
          />
        </div>

        {/* Short bio */}
        <div>
          <label className="block mb-2 font-medium">6. Short Bio</label>
          <textarea
            placeholder="Enter"
            rows={4}
            className="w-full border rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#507001]"
          />
        </div>

        {/* Save button */}
        <button
          type="submit"
          className="px-6 py-2 bg-[#507001] text-white rounded-md hover:bg-[#406200] transition"
        >
          Save
        </button>
      </form>
    </div>
  );
}
