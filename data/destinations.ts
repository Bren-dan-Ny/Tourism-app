export type Destination = {
  id: string;
  name: string;
  country: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  category: "playa" | "montana" | "cultura" | "ciudad";
  image: string;
};

// datos de destino

export const destinations: Destination[] = [
  {
    id: "1",
    name: "París",
    country: "Francia",
    description:
      "La ciudad del amor y las luces. Disfruta de la Torre Eiffel, el Louvre, y la mejor gastronomía francesa.",
    price: 1200,
    rating: 4.8,
    reviews: 2847,
    category: "cultura",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
  },
  {
    id: "2",
    name: "Bali",
    country: "Indonesia",
    description:
      "Paraíso tropical con templos antiguos, arrozales y playas de arena blanca.",
    price: 800,
    rating: 4.7,
    reviews: 3201,
    category: "playa",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
  },
  {
    id: "3",
    name: "Machu Picchu",
    country: "Perú",
    description:
      "La ciudadela inca más famosa del mundo entre las montañas de los Andes.",
    price: 650,
    rating: 4.9,
    reviews: 4102,
    category: "montana",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800",
  },
  {
    id: "4",
    name: "Tokio",
    country: "Japón",
    description:
      "Donde la tradición milenaria se fusiona con la tecnología más avanzada del mundo.",
    price: 1500,
    rating: 4.8,
    reviews: 2950,
    category: "ciudad",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
  },
];
