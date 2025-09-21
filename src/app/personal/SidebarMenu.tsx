"use client";

interface SidebarMenuProps {
  active?: string;
}

export default function SidebarMenu({ active = "Personal Information" }: SidebarMenuProps) {
  const menuItems = [
    "Personal Information",
    "Messages",
    "Notifications",
    "My Listings",
    "Add New Listing",
    "Swap Offers",
    "Profile Settings",
    "Help Center",
  ];

  return (
    <div className="w-[250px] bg-[#F8FAF7] rounded-lg p-4 flex flex-col gap-4 text-[18px]">
      {menuItems.map((item) => (
        <button
          key={item}
          className={`text-left px-3 py-2 rounded-md transition ${
            active === item ? "bg-[#EDEEE6] font-medium" : "hover:bg-[#f0f0f0]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
