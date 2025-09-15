// data/offersData.ts

export type Offer = {
  id: number;
  title: string;
  categoryProd: string;
  category: string;
  location: string;
  brand: string;
  exchangeType: string;
  verified: boolean;
  image: string;
};

const mockOffers: Offer[] = [
  {
    id: 1,
    title: "Mixer",
    category: "Marketplace",
    categoryProd: "Electronics" ,
    location: "California",
    brand: "KitchenAid",
    exchangeType: "1-2",
    verified: true,
    image: "./blender.webp",
  },
  {
    id: 2,
    title: "Phone",
    category: "Marketplace",
    categoryProd: "Electronics" ,
    location: "Texas",
    brand: "KitchenAid",
    exchangeType: "1-2",
    verified: true,
    image: "./mobile.webp",
  },
  {
    id: 3,
    title: "Laptop 2021",
    category: "Marketplace",
    categoryProd: "Electronics" ,
    location: "Texas",
    brand: "KitchenAid",
    exchangeType: "1-2",
    verified: true,
    image: "./laptop.webp",
  },
  {
    id: 4,
    title: "Mixer",
    category: "Marketplace",
    categoryProd: "Electronics" ,
    location: "California",
    brand: "KitchenAid",
    exchangeType: "1-2",
    verified: true,
    image: "./blender.webp",
  },
  {
    id: 5,
    title: "Phone",
    category: "Marketplace",
    categoryProd: "Electronics" ,
    location: "Texas",
    brand: "KitchenAid",
    exchangeType: "1-2",
    verified: true,
    image: "./mobile.webp",
  },
  {
    id: 6,
    title: "Laptop 2021",
    category: "Marketplace",
    categoryProd: "Electronics" ,
    location: "Texas",
    brand: "KitchenAid",
    exchangeType: "1-2",
    verified: true,
    image: "./laptop.webp",
  },
  {
    id: 7,
    title: "Mixer",
    category: "Marketplace",
    categoryProd: "Electronics" ,
    location: "California",
    brand: "KitchenAid",
    exchangeType: "1-2",
    verified: true,
    image: "./blender.webp",
  },
  {
    id: 8,
    title: "Phone",
    category: "Marketplace",
    categoryProd: "Electronics" ,
    location: "Texas",
    brand: "KitchenAid",
    exchangeType: "1-2",
    verified: true,
    image: "./mobile.webp",
  },
  {
    id: 9,
    title: "Laptop 2021",
    category: "Marketplace",
    categoryProd: "Electronics" ,
    location: "Texas",
    brand: "KitchenAid",
    exchangeType: "1-2",
    verified: true,
    image: "./laptop.webp",
  },
  {
    id: 10,
    title: "Mixer",
    category: "Marketplace",
    categoryProd: "Electronics" ,
    location: "California",
    brand: "KitchenAid",
    exchangeType: "1-2",
    verified: true,
    image: "./blender.webp",
  },
  {
    id: 11,
    title: "Phone",
    category: "Marketplace",
    categoryProd: "Electronics" ,
    location: "Texas",
    brand: "KitchenAid",
    exchangeType: "1-2",
    verified: true,
    image: "./mobile.webp",
  },
  {
    id: 12,
    title: "Laptop 2021",
    category: "Marketplace",
    categoryProd: "Electronics" ,
    location: "Texas",
    brand: "KitchenAid",
    exchangeType: "1-2",
    verified: true,
    image: "./laptop.webp",
  },
];

// Имитация API-запроса
export async function fetchOffers(): Promise<Offer[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockOffers), 500); // 0.5 сек задержки как у API
  });
}
