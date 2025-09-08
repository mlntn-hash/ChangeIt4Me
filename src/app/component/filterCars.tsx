"use client";

import { useState, useEffect } from "react";
import { fetchOffers, Offer } from "./offersData";


export default function OffersWithFilters() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    location: [] as string[],
    make: [] as string[],
    year: [] as string[],
    transmission: [] as string[],
    condition: [] as string[],
    exchangeType: [] as string[],
    checkbox: [] as string[],
    verified: [] as string[],
  });

  const [openSections, setOpenSections] = useState({
    location: true,
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

  const [globalSearch, setGlobalSearch] = useState("");

  useEffect(() => {
    fetchOffers().then((data) => {
      setOffers(data);
      setLoading(false);
    });
  }, []);

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

  const clearAllFilters = () => {
    setFilters({
      location: [],
      make: [],
      year: [],
      transmission: [],
      condition: [],
      exchangeType: [],
      checkbox: [],
      verified: [],
    });
    setSearchTerms({
      location: "",
      make: "",
      year: "",
      transmission: "",
      condition: "",
      exchangeType: "",
      checkbox: "",
    });
  };

  const filteredOffers = offers.filter((offer) => {
    const matchesLocation =
      filters.location.length === 0 || filters.location.includes(offer.location);
    const matchesMake =
      filters.make.length === 0 || filters.make.includes(offer.make);
    const matchesYear =
      filters.year.length === 0 || filters.year.includes(offer.year);
    const matchesTransmission =
      filters.transmission.length === 0 ||
      filters.transmission.includes(offer.transmission);
    const matchesVerified =
      filters.verified.length === 0 ||
      (filters.verified.includes("verified") && offer.verified);

    const matchesGlobalSearch =
      globalSearch.trim() === "" ||
      offer.title.toLowerCase().includes(globalSearch.toLowerCase());

    return (
      matchesLocation &&
      matchesMake &&
      matchesYear &&
      matchesTransmission &&
      matchesVerified &&
      matchesGlobalSearch
    );
  });

  const filterOptions = {
    location: [
      "California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania",
      "Ohio", "Georgia", "North Carolina", "Michigan", "Arizona", "Washington",
      "New Jersey", "Virginia", "Colorado", "Massachusetts", "Indiana",
      "Tennessee", "Missouri", "Nevada",
    ],
    make: ["Mazda", "Volkswagen", "Lexus", "Linkoln", "Ford", "Chevrolet", "Dodge", "Tesla"],
    year: ["2020", "2019", "2018"],
    transmission: ["Automatic", "Manual"],
    condition: ["New", "Used"],
    exchangeType: ["Trade-in", "Cash"],
    checkbox: ["Verified Listings Only"],
  };

  return (
    <div className="flex gap-6 max-w-[1300px] mx-auto p-6">
      {/* Сайдбар фильтров */}
     
      
      <aside className="w-[280px] bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-4">
        {/* Верхняя панель */}
        <p>Home  </p> <p className="font-bold">Cars</p>
        <div className="flex justify-between items-center mb-2">
          <p>Filter</p>
          <button
            onClick={clearAllFilters}
            className="text-sm  hover:underline"
          >
            Clear All
          </button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={globalSearch}
          onChange={(e) => setGlobalSearch(e.target.value)}
          className="w-full border rounded px-2 py-1 text-sm mb-2"
        />

        {/* Секции фильтров */}
        {(
          ["location", "make", "year", "transmission", "condition", "exchangeType", "checkbox"] as const
        ).map((section) => (
          <div key={section} className="border-b pb-2">
            <button
              type="button"
              onClick={() => toggleSection(section)}
              className="w-full flex justify-between items-center font-medium mt-3"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span>{openSections[section] ? "−" : "+"}</span>
            </button>

            {openSections[section] && (
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerms[section]}
                  onChange={(e) =>
                    setSearchTerms((prev) => ({
                      ...prev,
                      [section]: e.target.value,
                    }))
                  }
                  className="w-full border rounded px-2 py-1 mb-2 text-sm"
                />
                {filterOptions[section]
                  .filter((opt) =>
                    opt.toLowerCase().includes(searchTerms[section].toLowerCase())
                  )
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

        {/* Кнопка поиска */}
        <button className="mt-4 bg-green-700 text-white py-2 rounded hover:bg-green-800">
          Search
        </button>
      </aside>

      {/* Сетка карточек */}
      <main className="flex-1">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {filteredOffers.map((offer) => (
              <div
                key={offer.id}
                className="relative w-[300px] h-[411px] rounded-[18px] overflow-hidden shadow-md flex items-end bg-gray-200"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${offer.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                <div className="relative p-4 text-white z-10 pb-[30px] pl-[20px]">
                  <p className="text-[16px] font-thin">{offer.category}</p>
                  <h3 className="text-[22px]">{offer.title}</h3>
                  <p className="text-[16px] mb-2">
                    {offer.year} · {offer.transmission}
                  </p>
                  <a
                    href="#"
                    className="flex text-[16px] items-center gap-2 text-sm font-thin transform hover:scale-105 duration-300 ease-in-out"
                  >
                    More →
                  </a>
                </div>
              </div>
            ))}
            {filteredOffers.length === 0 && (
              <p className="w-full text-gray-500 text-center">No results found</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
