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
    image: "/cars/vw.jpg",
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
    image: "/cars/mazda2.jpg",
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
    image: "/cars/mazda1.jpg",
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
    image: "/cars/vw.jpg",
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
    image: "/cars/mazda2.jpg",
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
    image: "/cars/mazda1.jpg",
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
    image: "/cars/vw.jpg",
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
    image: "/cars/mazda2.jpg",
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
    image: "/cars/mazda1.jpg",
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
    image: "/cars/vw.jpg",
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
    image: "/cars/mazda2.jpg",
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
    image: "/cars/mazda1.jpg",
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
    image: "/cars/vw.jpg",
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
    image: "/cars/mazda2.jpg",
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
    image: "/cars/mazda1.jpg",
  },
];

// Имитация API-запроса
export async function fetchOffers(): Promise<Offer[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockOffers), 500); // 0.5 сек задержки как у API
  });
}
