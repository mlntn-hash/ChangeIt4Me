"use client";

import { useState } from "react";

type Offer = {
  id: number;
  title: string;
  category: string;
  location: string;
  make: string;
  year: string;
  transmission: string;
  verified: boolean;
  image: string;
};

const offers: Offer[] = [
  { id: 1, title: "Volkswagen 2019", category: "Cars", location: "Texas", make: "Volkswagen", year: "2019", transmission: "Automatic", verified: true, image: "/cars/vw.jpg" },
  { id: 2, title: "Mazda 2020", category: "Cars", location: "California", make: "Mazda", year: "2020", transmission: "Manual", verified: false, image: "/cars/mazda2.jpg" },
  { id: 3, title: "Mazda 2019", category: "Cars", location: "Florida", make: "Mazda", year: "2019", transmission: "Automatic", verified: true, image: "/cars/mazda1.jpg" },
  
];

export default function OffersWithFilters() {
  const [filters, setFilters] = useState({
    location: [] as string[],
    make: [] as string[],
    year: [] as string[],
    transmission: [] as string[],
    verified: [] as string[],
    condition: [] as string[],
    exchangeType: [] as string[],
    checkbox: [] as string[],
  });

  const [openSections, setOpenSections] = useState({
    location: false,
    make: false,
    year: false,
    transmission: false,
    condition: false,
    exchangeType: false,
    checkbox: false,

  });

  const [searchTerms, setSearchTerms] = useState({
    location: "",
    make: "",
    year: "",
    transmission: "",
    condition: "",
    exchangeType: "",
    checkbox: "",
  });

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => {
      const current = prev[key];
      return current.includes(value)
        ? { ...prev, [key]: current.filter((v) => v !== value) }
        : { ...prev, [key]: [...current, value] };
    });
  };

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const filteredOffers = offers.filter((offer) => {
    const matchesLocation = filters.location.length === 0 || filters.location.includes(offer.location);
    const matchesMake = filters.make.length === 0 || filters.make.includes(offer.make);
    const matchesYear = filters.year.length === 0 || filters.year.includes(offer.year);
    const matchesTransmission = filters.transmission.length === 0 || filters.transmission.includes(offer.transmission);
    const matchesVerified = filters.verified.length === 0 || (filters.verified.includes("verified") && offer.verified);
    return matchesLocation && matchesMake && matchesYear && matchesTransmission && matchesVerified;
  });

  const filterOptions = {
    location: ["California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan", "Arizona", "Washington", "New Jersey", "Virginia", "Colorado", "Massachusetts", "Indiana", "Tennessee", "Missouri", "Nevada"],
    make: ["Mazda", "Volkswagen", "Lexus", "Linkoln", "Ford", "Chevrolet", "Dodge", "Tesla"],
    year: ["2020", "2019", "2018"],
    transmission: ["Automatic", "Manual"],
    condition: [""],
    exchangeType: [""],
    checkbox: ["Verified Listings Only"],

  };

  return (
    <div className="flex gap-6 max-w-[1400px] mx-auto p-6">
      {/* Фильтры */}
      <aside className="w-[280px] bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-4">
        <h2 className="text-xl font-medium mb-2">Filter</h2>

        {(["location", "make", "year", "transmission", "condition", "exchangeType" , "checkbox"] as const).map((section) => (
          <div key={section}>
            <button
              type="button"
              onClick={() => toggleSection(section)}
              className="w-full flex justify-between items-center font-medium mt-3"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span>{openSections[section] ? "^" : "+"}</span>
            </button>

            {openSections[section] && (
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerms[section]}
                  onChange={(e) => setSearchTerms((prev) => ({ ...prev, [section]: e.target.value }))}
                  className="w-full border rounded px-2 py-1 mb-2 text-sm"
                />
                {filterOptions[section]
                  .filter((opt) => opt.toLowerCase().includes(searchTerms[section].toLowerCase()))
                  .map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={filters[section].includes(opt)}
                        onChange={() => handleFilterChange(section, opt)}
                        className="w-4 h-4 accent-green-700"
                      />
                      {opt}
                    </label>
                  ))}
              </div>
            )}
          </div>
        ))}

        {/* Verified */}
        <p className="font-medium mt-3">Verified</p>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={filters.verified.includes("verified")}
            onChange={() => handleFilterChange("verified", "verified")}
            className="w-4 h-4 accent-green-700"
          />
          Verified Listings Only
        </label>
      </aside>

      {/* Сетка карточек */}
      <main className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredOffers.map((offer) => (
            <div key={offer.id} className="relative rounded-[18px] overflow-hidden shadow-md h-[411px] flex items-end bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${offer.image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="relative p-4 text-white z-10 pb-[30px] pl-[20px]">
                <p className="text-[16px] font-thin">{offer.category}</p>
                <h3 className="text-[22px]">{offer.title}</h3>
                <p className="text-[16px] mb-2">{offer.year} · {offer.transmission}</p>
                <a href="#" className="flex text-[16px] items-center gap-2 text-sm font-thin transform hover:scale-105 duration-300 ease-in-out">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
          {filteredOffers.length === 0 && (
            <p className="col-span-full text-gray-500 text-center">No results found</p>
          )}
        </div>
      </main>
    </div>
  );
}
