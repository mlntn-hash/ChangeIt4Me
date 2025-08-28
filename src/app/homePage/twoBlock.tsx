export default function PopularOffers() {
  const offers = [
    { category: "Real estate", title: "Modern House", image: "/house1.webp", badge: "." },
    { category: "Real estate", title: "Apartment", image: "/building.webp" },
    { category: "Cars", title: "Volkswagen 2012", image: "/blue-car1.webp" },
    { category: "Marketplace", title: "Mixer", image: "/blender.webp" },
    { category: "Real estate", title: "Modern Apartment", image: "/living-room.webp" },
    { category: "Marketplace", title: "Laptop 2021", image: "/laptop.webp" },
    { category: "Marketplace", title: "Phone", image: "/mobile.webp" },
    { category: "Cars", title: "Lexus 2018", image: "/dark-car.webp" },
  ];

  return (
    <section className="max-w-[1300px] py-[50px] bg-white mx-auto ">
      {/* Заголовок + кнопка */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[38px] font-regular text-[#181818]">Popular Offers</h2>
        <button className="bg-[#376039] text-white text-[17px] font-regular rounded-[6px] hover:bg-[#2d4e30] w-[166px] h-[40px] transition-colors duration-500 ease-in-out">
          See all items →
        </button>
      </div>

      {/* Сетка карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="relative rounded-[18px] overflow-hidden shadow-md h-[300px] flex items-end bg-gray-200 h-[411px]"
          >
            {/* Фоновое изображение */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${offer.image})` }}
            />

            {/* Градиент затемнения */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

            {/* Контент */}
            <div className="relative p-4 text-white z-10 pb-[30px] pl-[20px]">
             <p className="text-[16px] font-thin">{offer.category}</p>
              <h3 className="text-[22px] font-regular">{offer.title}</h3>
              <p className="text-[16px] mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" className="flex text-[16px] items-center gap-2 text-sm font-thin transform hover:scale-101 duration-300 ease-in-out">
                Learn more →
              </a>
            </div>

            {/* Бейджик NEW */}
            {offer.badge && (
              <div className="z-10 absolute bottom-[310px] right-[0px] ">
                <img
            src="/Group10.svg"
            alt="Marketplace Icon"
            className="w-[103px] h-[103px]"
          />
              
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
