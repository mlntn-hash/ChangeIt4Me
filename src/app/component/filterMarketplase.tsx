"use client";

import { useState, useEffect } from "react";
import { fetchOffers, Offer } from "./offerMarketplace";
import Link from "next/link";
import Image from "next/image";


export default function OffersWithFilters() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    categoryProd: [] as string[],
    location: [] as string[],
    brand: [] as string[],
    exchangeType: [] as string[],
    checkbox: [] as string[],
    verified: [] as string[],
  });

  const [openSections, setOpenSections] = useState({
    categoryProd: true,
    location: true,
    brand: false,
    exchangeType: false,
    checkbox: false,
  });

  const [searchTerms, setSearchTerms] = useState({
    categoryProd: "",
    location: "",
    brand: "",
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
      categoryProd: [],
      location: [],
      brand: [],
      exchangeType: [],
      checkbox: [],
      verified: [],
    });
    setSearchTerms({
      categoryProd: "",
      location: "",
      brand: "",
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
    const matchesCategoryProd =
      filters.categoryProd.length === 0 || filters.categoryProd.includes(offer.categoryProd);
    const matchesLocation =
      filters.location.length === 0 || filters.location.includes(offer.location);
    const matchesBrand =
      filters.brand.length === 0 || filters.brand.includes(offer.brand);
    const matchesExchangeType =
      filters.exchangeType.length === 0 ||
      filters.exchangeType.includes(offer.exchangeType);
    const matchesVerified =
      filters.verified.length === 0 ||
      (filters.verified.includes("verified") && offer.verified);

    const matchesGlobalSearch =
      globalSearch.trim() === "" ||
      offer.title.toLowerCase().includes(globalSearch.toLowerCase());

    return (
      matchesCategoryProd &&
      matchesLocation &&
      matchesBrand &&
      matchesExchangeType &&
      matchesVerified &&
      matchesGlobalSearch
    );
  });

  const filterOptions = {
    categoryProd: ["Electronics", "Clothing", "Furniture", "Sports", "Other"],
    location: [
      "California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania",
      "Ohio", "Georgia", "North Carolina", "Michigan", "Arizona", "Washington",
      "New Jersey", "Virginia", "Colorado", "Massachusetts", "Indiana",
      "Tennessee", "Missouri", "Nevada",
    ],
    brand: ["Apple", "Samsung", "Sony", "HP", "Dell"],
    exchangeType: ["Trade-in", "Cash"],
    checkbox: ["Verified Listings Only"],
  };

  // Получаем все активные фильтры
  const getActiveFilters = () => {
    const active: { categoryProd: string; value: string; key: keyof typeof filters }[] = [];
    
    Object.entries(filters).forEach(([key, values]) => {
      if (Array.isArray(values) && values.length > 0) {
        values.forEach((value) => {
          active.push({
            categoryProd: key.charAt(0).toUpperCase() + key.slice(1),
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
    <div className="min-w-[1300px] mx-auto p-6">
      <div className="flex gap-6">
        {/* Сайдбар фильтров - фиксированная ширина */}
        <aside className="w-[350px] flex-shrink-0 bg-white rounded-2xl p-5 flex flex-col gap-4 pt-[20px]">
          {/* Верхняя панель */}
          <div className="flex items-center gap-2 pb-[20px] text-[20px]">
  <Link href="/" className="hover:text-[#2d4e30] transition-colors duration-500 ease-in-out">
    Home
  </Link>
  <span className="text-[40px] font-light pb-[7px]">›</span>
  <Link href="/cars" className="font-bold text-[20px] hover:text-[#2d4e30] transition-colors duration-500 ease-in-out">
    Cars
  </Link>
</div>
          
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium text-[45px]">Filter</p>
            <button
  onClick={clearAllFilters}
  className="flex items-center text-[19px] font-light py-[2px] px-[15px] rounded-[6px] shadow-[0_0_10px_rgba(0,0,0,0.15)] transform hover:scale-101 duration-300 ease-in-out"
>
  <span>Clear All</span>
  <span className="text-[30px] pl-[10px] leading-none pb-[10px]">×</span>
</button>

          </div>
          
          <div className="relative w-full mb-2">
  {/* Иконка из public */}
  <Image
    src="/search.svg"   // путь из папки public
    alt="search"
    width={20}
    height={20}
    className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-70"
  />

  {/* Инпут */}
  <input
  type="text"
  placeholder="Search"
  value={globalSearch}
  onChange={(e) => setGlobalSearch(e.target.value)}
  className="w-full rounded-[7px] px-3 py-2 pl-10 text-[20px] text-[#C0C0C0] focus:outline-none shadow-[0_0_10px_rgba(0,0,0,0.15)]"
/>

</div>


          {/* Секции фильтров */}
          {(
            ["categoryProd", "location", "brand", "exchangeType", "checkbox"] as const
          ).map((section) => (
            <div key={section} className="text-[20px] pb-3">
              <button
                type="button"
                onClick={() => toggleSection(section)}
                className="w-full flex justify-between items-center font-medium py-2 cursor-pointer text-left"
              >
                {section === "checkbox" ? "Options" : section.charAt(0).toUpperCase() + section.slice(1)}
               <span className="text-[20px] pb-[10px]">
  <Image
    src="/arrow.svg"  // один файл со стрелкой вниз
    alt={openSections[section] ? "collapse" : "expand"}
    width={20}
    height={20}
    className={`inline-block transition-transform duration-300 ease-in-out ${
      openSections[section] ? "rotate-180" : ""
    }`}
  />
</span>
              </button>

              {openSections[section] && (
               <div className="relative w-full mb-2">
  {/* Иконка поиска */}
  <Image
    src="/search.svg"  // путь к SVG в папке public
    alt="search"
    width={20}
    height={20}
    className="absolute left-2 top-[18px] transform -translate-y-1/2 opacity-70"
  />

  {/* Инпут */}
  <input
    type="text"
    placeholder="Enter"
    value={searchTerms[section]}
    onChange={(e) =>
      setSearchTerms((prev) => ({
        ...prev,
        [section]: e.target.value,
      }))
    }
    className="w-full rounded px-2 py-1 pl-8 mb-2 text-[#C0C0C0] text-[20px] focus:outline-none shadow-[0_0_10px_rgba(0,0,0,0.15)]"
  />

                  <div className="space-y-1 text-[20px]">
                    {filterOptions[section]
                      .filter((opt) =>
                        opt.toLowerCase().includes(searchTerms[section].toLowerCase())
                      )
                      .map((opt) => (
                        <label key={opt} className="flex items-center gap-2 text-sm p-1 rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters[section].includes(opt)}
                            onChange={() => handleFilterChange(section, opt)}
                            className="w-[23px] h-[23px] accent-[#376039]"
                          />
                          <span className="flex-1 pl-[5px] text-[20px]">{opt}</span>
                        </label>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Кнопка поиска */}
          <button className="py-[5px] px-[10px] w-[186px] text-[20px] h-[50px] bg-[#376039] text-white rounded-lg hover:bg-[#2e5030] transition-colors duration-500 ease-in-out font-medium">
            Search 
          </button>
        </aside>

        {/* Основной контент - занимает оставшееся место */}
        <main className="flex-1 min-w-0 pt-[120px]">
         {/* Блок активных фильтров */}
{activeFilters.length > 0 && (
  <div className="rounded-lg mb-6">
    <div className="flex items-start gap-10">
      {/* Заголовок */}
      <h3 className="font-medium text-[20px] text-[#181818] whitespace-nowrap pr-6">
        Selected Filters:
      </h3>

      {/* Категории + их значения */}
      <div className="flex gap-10">
        {Object.entries(filters).map(([filterKey, filterValues]) => {
          if (!Array.isArray(filterValues) || filterValues.length === 0)
            return null;

          const categoryProdName =
            filterKey === "checkbox"
              ? "Options"
              : filterKey.charAt(0).toUpperCase() + filterKey.slice(1);

          return (
            <div key={filterKey} className="flex flex-col min-w-[150px]">
              {/* Название категории */}
              <span className="font-medium text-[18px] text-[#181818] mb-2">
                {categoryProdName}:
              </span>

              {/* Список значений */}
              <div className="flex flex-col gap-2">
                {filterValues.map((value) => (
                  <div
                    key={`${filterKey}-${value}`}
                    className="bg-white rounded-lg  py-[1px] flex items-center gap-2 "
                  >
                    <span className="text-[18px] text-[#181818] font-light">
                      {value}
                    </span>
                    <button
                      onClick={() =>
                        removeFilter(filterKey as keyof typeof filters, value)
                      }
                      className="text-[#181818] hover:text-red-500 transition-all duration-200 text-[20px] font-light flex items-center justify-center"
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
  </div>
)}

          {/* Строка с количеством результатов */}
          <div className="mb-6  mt-[15px]">
            <p className="text-[#181818] text-[20px] pt-[7px] pl-[15px] font-medium shadow-[0_0_10px_rgba(0,0,0,0.15)] w-[242px] h-[42px] rounded-[6px]">
              {activeFilters.length > 0 
                ? `Results found: ${filteredOffers.length} items` 
                : `All items: ${filteredOffers.length} items`
              }
            </p>
          </div>

          {loading ? (
            <div className="text-center text-gray-500 py-20">Loading...</div>
          ) : (
            <>
              {/* Сетка карточек */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pb-[50px]">
                {filteredOffers.map((offer) => (
                  <div
                    key={offer.id}
                    className="relative w-[290px] h-[431px] rounded-[18px] overflow-hidden shadow-md flex items-end bg-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${offer.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                    <div className="relative p-4 text-white z-10 pb-[30px] pl-[20px]">
                      <p className="text-[16px] font-thin opacity-90">{offer.categoryProd}</p>
                      <h3 className="text-[26px] font-medium mb-1">{offer.title}</h3>
                      <p className="text-[16px] mb-3 opacity-90">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                     
                      <a
                        href="#"
                        className="flex text-[16px] items-center gap-2 text-sm font-thin transform hover:scale-105 duration-300 ease-in-out"
                      >
                        Learn more →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Сообщение о пустых результатах */}
              {filteredOffers.length === 0 && (
                <div className="text-center py-20">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No results found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
                  
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}