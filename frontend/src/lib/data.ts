export type Media = { type: "image" | "video"; src: string; alt: string };
export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  image: string;
  color: string;
  badge: string;
  rating: number;
  stock: number;
  media?: Media[];
  specs?: Record<string, string>;
  description?: string;
};
export type Banner = {
  placement?: "main" | "side-top" | "side-bottom";
  target?: "mobile" | "desktop" | "both";
  cta?: string;
  href?: string;
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  price?: number;
  active: boolean;
};
export type Order = {
  id: string;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  subtotal: number;
  shipping: number;
  total: number;
  status: string;
  createdAt: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    city: string;
    address: string;
  };
};
export const money = (n: number) => "Rs. " + n.toLocaleString("en-PK");
const bundledPhotos = new Set([
  "photo-1511707171634-5f897ff02aa9",
  "photo-1517336714731-489689fd1ca8",
  "photo-1546868871-7041f2a55e12",
  "photo-1527814050087-3793815479db",
  "photo-1587829741301-dc798b83add3",
  "photo-1608043152269-423dbba4e7e1",
  "photo-1600294037681-c80b4cb5b434",
  "photo-1496181133206-80ce9b88a853",
  "photo-1497215728101-856f4ea42174",
  "photo-1553062407-98eeb64c6a62",
  "photo-1514228742587-6b1558fcca3d",
  "photo-1549298916-b41d501d3772",
  "photo-1524805444758-089113d48a6d",
  "photo-1598554747436-c9293d6a588f",
  "photo-1546435770-a3e426bf472b",
  "photo-1567538096630-e0c55bd6374c",
  "photo-1521572163474-6864f9cf17ab",
  "photo-1600210492486-724fe5c67fb0",
  "photo-1483985988355-763728e1935b",
  "photo-1516257984-b1b4d707412e",
  "photo-1616486338812-3dadae4b4ace",
  "photo-1509941943102-10c232535736",
  "photo-1616486029423-aaa4789e8c9a",
]);
export const photo = (id: string, w = 900) =>
  id.startsWith("/images/") ||
  id.startsWith("/api/media/") ||
  id.startsWith("https://res.cloudinary.com/p76rvfxz/image/upload/") ||
  id.startsWith("blob:")
    ? id
    : bundledPhotos.has(id)
      ? `/images/${id}.webp`
      : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
export const categories = [
  "All",
  "Smartwatches",
  "Audio",
  "Mobile Accessories",
  "Car Accessories",
  "Power Solutions",
  "Home Decor",
  "Toys",
  "Vlogging Setup",
  "Mounts & Stands",
  "PC & Laptop",
  "POS Package",
  "Gadgets",
];
export const demoOrders: Order[] = [
  {
    id: "SY-20481",
    items: [
      {
        id: "toy-jet-drone",
        name: "Fighter Jet RC Quadcopter Drone - Camouflage Edition",
        price: 5490,
        quantity: 1,
        image: "/api/media/5e45dd90-ceb5-4f78-a480-c303e1661de0.webp",
      },
    ],
    subtotal: 5490,
    shipping: 0,
    total: 5490,
    status: "Shipped",
    createdAt: "2026-09-19T12:00:00Z",
    customer: {
      name: "Ayesha Khan",
      email: "ayesha@example.com",
      phone: "03001234567",
      city: "Lahore",
      address: "Demo address, Gulberg, Lahore",
    },
  },
  {
    id: "SY-20462",
    items: [
      {
        id: "toy-monster-tractor",
        name: "4WD Off-Road Mini Toy Tractor",
        price: 1450,
        quantity: 2,
        image: "/api/media/335ac64a-28c2-49e6-a4b3-1a5d72622180.webp",
      },
    ],
    subtotal: 2900,
    shipping: 0,
    total: 2900,
    status: "Delivered",
    createdAt: "2026-09-15T12:00:00Z",
    customer: {
      name: "Ahmed Ali",
      email: "ahmed@example.com",
      phone: "03001234567",
      city: "Karachi",
      address: "Demo address, Clifton, Karachi",
    },
  },
];
