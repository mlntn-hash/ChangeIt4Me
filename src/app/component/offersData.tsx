// data/offersData.ts

export type Offer = {
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

const mockOffers: Offer[] = [
  {
    id: 1,
    title: "Volkswagen 2019",
    category: "Cars",
    location: "Texas",
    make: "Volkswagen",
    year: "2019",
    transmission: "Automatic",
    verified: true,
    image: "./car3.webp",
  },
  {
    id: 2,
    title: "Mazda 2020",
    category: "Cars",
    location: "California",
    make: "Mazda",
    year: "2020",
    transmission: "Manual",
    verified: false,
    image: "./car2.webp",
  },
  {
    id: 3,
    title: "Mazda 2019",
    category: "Cars",
    location: "Florida",
    make: "Mazda",
    year: "2019",
    transmission: "Automatic",
    verified: true,
    image: "./car1.webp",
  },
  {
    id: 4,
    title: "Volkswagen 2019",
    category: "Cars",
    location: "Texas",
    make: "Volkswagen",
    year: "2019",
    transmission: "Automatic",
    verified: true,
    image: "./car3.webp",
  },
  {
    id: 5,
    title: "Mazda 2020",
    category: "Cars",
    location: "California",
    make: "Mazda",
    year: "2020",
    transmission: "Manual",
    verified: false,
    image: "./car2.webp",
  },
  {
    id: 6,
    title: "Mazda 2019",
    category: "Cars",
    location: "Florida",
    make: "Mazda",
    year: "2019",
    transmission: "Automatic",
    verified: true,
    image: "./car1.webp",
  },
  {
    id: 7,
    title: "Volkswagen 2019",
    category: "Cars",
    location: "Texas",
    make: "Volkswagen",
    year: "2019",
    transmission: "Automatic",
    verified: true,
    image: "./car3.webp",
  },
  {
    id: 8,
    title: "Mazda 2020",
    category: "Cars",
    location: "California",
    make: "Mazda",
    year: "2020",
    transmission: "Manual",
    verified: false,
    image: "./car2.webp",
  },
  {
    id: 9,
    title: "Mazda 2019",
    category: "Cars",
    location: "Florida",
    make: "Mazda",
    year: "2019",
    transmission: "Automatic",
    verified: true,
    image: "./car1.webp",
  },
  {
    id: 10,
    title: "Volkswagen 2019",
    category: "Cars",
    location: "Texas",
    make: "Volkswagen",
    year: "2019",
    transmission: "Automatic",
    verified: true,
    image: "./car3.webp",
  },
  {
    id: 11,
    title: "Mazda 2020",
    category: "Cars",
    location: "California",
    make: "Mazda",
    year: "2020",
    transmission: "Manual",
    verified: false,
    image: "./car2.webp",
  },
  {
    id: 12,
    title: "Mazda 2019",
    category: "Cars",
    location: "Florida",
    make: "Mazda",
    year: "2019",
    transmission: "Automatic",
    verified: true,
    image: "./car1.webp",
  },
  {
    id: 13,
    title: "Volkswagen 2019",
    category: "Cars",
    location: "Texas",
    make: "Volkswagen",
    year: "2019",
    transmission: "Automatic",
    verified: true,
    image: "./car3.webp",
  },
  {
    id: 14,
    title: "Mazda 2020",
    category: "Cars",
    location: "California",
    make: "Mazda",
    year: "2020",
    transmission: "Manual",
    verified: false,
    image: "./car2.webp",
  },
  {
    id: 15,
    title: "Mazda 2019",
    category: "Cars",
    location: "Florida",
    make: "Mazda",
    year: "2019",
    transmission: "Automatic",
    verified: true,
    image: "./car1.webp",
  },
];

// Имитация API-запроса
export async function fetchOffers(): Promise<Offer[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockOffers), 500); // 0.5 сек задержки как у API
  });
}
