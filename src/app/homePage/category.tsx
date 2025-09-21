"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Category() {
  const pathname = usePathname();

  const links = [
    {
      href: "/cars",
      label: "Cars (998 items)",
      icon: "/cat1.svg",
    },
    {
      href: "/real-estate",
      label: "Real Estate (990 items)",
      icon: "/cat2.svg",
    },
    {
      href: "/marketplace",
      label: "Marketplace (1220 items)",
      icon: "/cat3.svg",
    },
  ];

  return (
    <div className="w-full bg-[#EDEEE6]">
      <div className="flex justify-end items-center gap-6 h-[76px] max-w-[1300px] mx-auto">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-[10px] text-[20px] h-[50px] font-regular transition-colors duration-500 ease-in-out
                ${isActive 
                  ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-[#181818]" 
                  : "text-[#181818] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]"}
              `}
            >
              <img
                src={link.icon}
                alt={link.label}
                className="w-[40px] h-[40px]"
              />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
