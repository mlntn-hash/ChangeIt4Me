export type Offer = {
  id: number;
  title: string;
  category: string;
  location: string;
  size: string;
  year: string;
  numberOfBedrooms: string;
  numberOfBathrooms: string;
  verified: boolean;
  image: string;
};

const mockOffers: Offer[] = [
  {
    id: 1,
    title: "Modern House",
    category: "Real estate",
    location: "California",
    size: "20-30 m2",
    year: "2000-2010",
    numberOfBedrooms: "1-2",
    numberOfBathrooms: "1-2",
    verified: true,
    image: "./house1.webp",
  },
  {
    id: 2,
    title: "Apartment",
    category: "Real estate",
    location: "Texas",
    size: "20-30 m2",
    year: "< 2000",
    numberOfBedrooms: "3-4",
    numberOfBathrooms: "1-2",
    verified: true,
    image: "./building.webp",
  },
  {
    id: 3,
    title: "Modern Apartment",
    category: "Real estate",
    location: "Texas",
    size: "20-30 m2",
    year: "2010-2020",
    numberOfBedrooms: "2-3",
    numberOfBathrooms: "2-3",
    verified: true,
    image: "./living-room.webp",
  },
  {
    id: 4,
    title: "Modern House",
    category: "Real estate",
    location: "California",
    size: "20-30 m2",
    year: "2000-2010",
    numberOfBedrooms: "1-2",
    numberOfBathrooms: "1-2",
    verified: true,
    image: "./house1.webp",
  },
  {
    id: 5,
    title: "Apartment",
    category: "Real estate",
    location: "Texas",
    size: "40-50 m2",
    year: "< 2000",
    numberOfBedrooms: "3-4",
    numberOfBathrooms: "1-2",
    verified: true,
    image: "./building.webp",
  },
  {
    id: 6,
    title: "Modern Apartment",
    category: "Real estate",
    location: "Texas",
    size: "30-40 m2",
    year: "2010-2020",
    numberOfBedrooms: "2-3",
    numberOfBathrooms: "2-3",
    verified: true,
    image: "./living-room.webp",
  },
  {
    id: 7,
    title: "Modern House",
    category: "Real estate",
    location: "California",
    size: "70-80 m2",
    year: "2000-2010",
    numberOfBedrooms: "1-2",
    numberOfBathrooms: "1-2",
    verified: true,
    image: "./house1.webp",
  },
  {
    id: 8,
    title: "Apartment",
    category: "Real estate",
    location: "Texas",
    size: "50-60 m2",
    year: "< 2000",
    numberOfBedrooms: "3-4",
    numberOfBathrooms: "1-2",
    verified: true,
    image: "./building.webp",
  },
  {
    id: 9,
    title: "Modern Apartment",
    category: "Real estate",
    location: "Texas",
    size: "30-40 m2",
    year: "2010-2020",
    numberOfBedrooms: "2-3",
    numberOfBathrooms: "2-3",
    verified: true,
    image: "./living-room.webp",
  },
  {
    id: 10,
    title: "Modern House",
    category: "Real estate",
    location: "California",
    size: "20-30 m2",
    year: "2000-2010",
    numberOfBedrooms: "1-2",
    numberOfBathrooms: "1-2",
    verified: true,
    image: "./house1.webp",
  },
  {
    id: 11,
    title: "Apartment",
    category: "Real estate",
    location: "Texas",
    size: "20-30 m2",
    year: "< 2000",
    numberOfBedrooms: "3-4",
    numberOfBathrooms: "1-2",
    verified: true,
    image: "./building.webp",
  },
  {
    id: 12,
    title: "Modern Apartment",
    category: "Real estate",
    location: "Texas",
    size: "20-30 m2",
    year: "2010-2020",
    numberOfBedrooms: "2-3",
    numberOfBathrooms: "2-3",
    verified: true,
    image: "./living-room.webp",
  },
];

// Имитация API-запроса
export async function fetchOffers(): Promise<Offer[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockOffers), 500); // 0.5 сек задержки как у API
  });
}
