import React, { useState } from 'react';

export default function ProfileSettings() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[45px] font-medium mb-4 border-b border-gray-300 pb-2 pt-[10px]">
            Profile Seettings
          </h1>
        <p className="text-[20px] text-[#666666] font-light italic">Adjust how your account works.</p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-8">
        {/* 1. Change Password Section */}
        <div className="space-y-4">
          <h3 className="text-[20px] font-regular text-[#181818]">
            <span className="mr-2">1.</span>
            Change Password
          </h3>
          
          <div className="space-y-5">
            <input
              type="password"
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full min-w-[200px] px-4 py-3  rounded-[6px] text-[20px] h-[47px] placeholder-[#999999] focus:outline-none  transition-colors duration-300 shadow-[0_0_10px_rgba(0,0,0,0.15)]"
            />
            <br/>
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full min-w-[200px] px-4 py-3  rounded-[6px] h-[47px] text-[20px] placeholder-[#999999] focus:outline-none  transition-colors duration-300  shadow-[0_0_10px_rgba(0,0,0,0.15)]"
            />
            
            <div className="flex items-center gap-6">
              <button className="bg-[#507001] hover:bg-[#2d4e30] text-white px-6 py-2 w-[166px] rounded-[6px] text-[20px] font-regular transition-colors duration-300">
                Change
              </button>
              <a href="#" className="text-[20px] text-[#181818] hover:text-[#507001] transition-colors duration-300">
                I forgot my password
              </a>
            </div>
          </div>
        </div>

        {/* 2. Notification Preferences Section */}
        <div className="space-y-4">
          <h3 className="text-[20px] font-regular text-[#181818]">
            <span className="mr-2">2.</span>
            Notification Preferences
          </h3>
          
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 max-w-[300px] px-4 py-3 rounded-[6px] h-[47px] text-[20px] placeholder-[#999999] shadow-[0_0_10px_rgba(0,0,0,0.15)] focus:outline-none focus:border-[#507001] transition-colors duration-300"
            />
            
            <button className="bg-[#507001] hover:bg-[#2d4e30] text-white px-6 py-2 w-[166px] rounded-[6px] text-[20px] font-regular transition-colors duration-300">
              Save
            </button>
            
            <button className="bg-white hover:bg-gray-300 border border-[#E0E0E0]  text-[#666666] px-6 py-2 rounded-[6px] text-[20px] font-regular transition-colors duration-300">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}