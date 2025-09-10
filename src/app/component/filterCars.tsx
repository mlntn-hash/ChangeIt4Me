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
    setGlobalSearch("");
  };

  const removeFilter = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].filter((v) => v !== value)
    }));
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

  // Получаем все активные фильтры
  const getActiveFilters = () => {
    const active: { category: string; value: string; key: keyof typeof filters }[] = [];
    
    Object.entries(filters).forEach(([key, values]) => {
      if (Array.isArray(values) && values.length > 0) {
        values.forEach((value) => {
          active.push({
            category: key.charAt(0).toUpperCase() + key.slice(1),
            value,
            key: key as keyof typeof filters
          });
        });
      }
    });

    return active;
  };

  const activeFilters = getActiveFilters();

  return (
    <div className="max-w-[1300px] mx-auto p-6">
      <div className="flex gap-6">
        {/* Сайдбар фильтров - фиксированная ширина */}
        <aside className="w-[280px] flex-shrink-0 bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-4 h-fit">
          {/* Верхняя панель */}
          <div className="flex items-center gap-2">
            <p>Home</p>
            <span>›</span>
            <p className="font-bold">Cars</p>
          </div>
          
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium">Filter</p>
            <button
              onClick={clearAllFilters}
              className="text-sm text-blue-600 hover:underline"
            >
              Clear All
            </button>
          </div>
          
          <input
            type="text"
            placeholder="Search..."
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Секции фильтров */}
          {(
            ["location", "make", "year", "transmission", "condition", "exchangeType", "checkbox"] as const
          ).map((section) => (
            <div key={section} className="border-b border-gray-200 pb-3">
              <button
                type="button"
                onClick={() => toggleSection(section)}
                className="w-full flex justify-between items-center font-medium py-2 text-left hover:text-green-600"
              >
                {section === "checkbox" ? "Options" : section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="text-lg">{openSections[section] ? "−" : "+"}</span>
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
                    className="w-full border rounded px-2 py-1 mb-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {filterOptions[section]
                      .filter((opt) =>
                        opt.toLowerCase().includes(searchTerms[section].toLowerCase())
                      )
                      .map((opt) => (
                        <label key={opt} className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters[section].includes(opt)}
                            onChange={() => handleFilterChange(section, opt)}
                            className="w-4 h-4 accent-green-700"
                          />
                          <span className="flex-1">{opt}</span>
                        </label>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Кнопка поиска */}
          <button className="mt-4 bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors font-medium">
            Search ({filteredOffers.length})
          </button>
        </aside>

        {/* Основной контент - занимает оставшееся место */}
        <main className="flex-1 min-w-0">
          {/* Блок активных фильтров */}
          {activeFilters.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-700 mb-3">Selected Filters:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {Object.entries(filters).map(([filterKey, filterValues]) => {
                  if (!Array.isArray(filterValues) || filterValues.length === 0) return null;
                  
                  const categoryName = filterKey === "checkbox" ? "Options" : 
                    filterKey.charAt(0).toUpperCase() + filterKey.slice(1);
                  
                  return (
                    <div key={filterKey} className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
                      <h4 className="font-semibold text-gray-800 text-sm mb-2 border-b border-gray-100 pb-1">
                        {categoryName}:
                      </h4>
                      <div className="space-y-1">
                        {filterValues.map((value) => (
                          <div
                            key={value}
                            className="flex items-center justify-between group"
                          >
                            <span className="text-sm text-gray-600 truncate flex-1 mr-2">
                              {value}
                            </span>
                            <button
                              onClick={() => removeFilter(filterKey as keyof typeof filters, value)}
                              className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all duration-200 text-sm font-bold w-4 h-4 flex items-center justify-center"
                              title="Remove filter"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Строка с количеством результатов */}
          <div className="mb-6">
            <p className="text-gray-600 font-medium">
              {activeFilters.length > 0 
                ? `Results found: ${filteredOffers.length}` 
                : `All items: ${filteredOffers.length}`
              }
            </p>
          </div>

          {loading ? (
            <div className="text-center text-gray-500 py-20">Loading...</div>
          ) : (
            <>
              {/* Сетка карточек */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredOffers.map((offer) => (
                  <div
                    key={offer.id}
                    className="relative w-full h-[411px] rounded-[18px] overflow-hidden shadow-md flex items-end bg-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${offer.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                    <div className="relative p-4 text-white z-10 pb-[30px] pl-[20px]">
                      <p className="text-[16px] font-thin opacity-90">{offer.category}</p>
                      <h3 className="text-[22px] font-medium mb-1">{offer.title}</h3>
                      <p className="text-[16px] mb-3 opacity-90">
                        {offer.year} · {offer.transmission}
                      </p>
                      {offer.verified && (
                        <span className="inline-flex items-center gap-1 text-xs bg-green-500 text-white px-2 py-1 rounded-full mb-2">
                          ✓ Verified
                        </span>
                      )}
                      <a
                        href="#"
                        className="flex text-[16px] items-center gap-2 text-sm font-thin transform hover:scale-105 duration-300 ease-in-out"
                      >
                        More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Сообщение о пустых результатах */}
              {filteredOffers.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No results found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
                  <button
                    onClick={clearAllFilters}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}