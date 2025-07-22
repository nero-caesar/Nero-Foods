export type MenuItemType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  buttonText?: string;
};

const menuData: MenuItemType[] = [
  {
    id: 1,
    name: "Jollof Rice",
    description: "Spicy Nigerian Jollof with fried plantain",
    price: 1500,
    image: "/images/jollof.jpg",
    category: "Main",
    buttonText: "Order Now",
  },
  {
    id: 2,
    name: "Pepper Soup",
    description: "Hot goat meat pepper soup with spices",
    price: 2000,
    image: "/images/peppersoup.jpg",
    category: "Soup",
    buttonText: "Order Now",
  },
  {
    id: 3,
    name: "Egusi Soup",
    description: "Traditional melon seed soup with pounded yam",
    price: 1800,
    image: "/images/egusi.jpg",
    category: "Soup",
    buttonText: "Order Now",
  },
  {
    id: 4,
    name: "Moi Moi",
    description: "Steamed bean pudding with peppers and spices",
    price: 1200,
    image: "/images/moimoi.jpg",
    category: "Side Dish",
    buttonText: "Order Now",
  },
  {
    id: 5,
    name: "Suya Skewers",
    description: "Spicy grilled meat skewers with onions and tomatoes",
    price: 2500,
    image: "/images/suya.jpg",
    category: "Appetizer",
    buttonText: "Order Now",
  },
  {
    id: 6,
    name: "Puff Puff",
    description: "Sweet fried dough balls, perfect for snacking",
    price: 800,
    image: "/images/puffpuff.jpg",
    category: "Snack",
    buttonText: "Order Now",
  }
];

export default menuData;
