"use client";

interface SidebarMenuProps {
  active?: string;
  onSelect: (item: string) => void;
}

export default function SidebarMenu({ active = "Personal Information", onSelect }: SidebarMenuProps) {
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
    <div className="w-[400px] rounded-lg p-4 flex flex-col gap-4 text-[26px]">
      {menuItems.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className={`flex justify-center text-left px-3 py-2 rounded-md transition ${
            active === item ? "bg-[#EDEEE6] font-medium" : "hover:bg-[#f0f0f0]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

