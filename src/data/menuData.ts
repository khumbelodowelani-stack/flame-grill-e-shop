export interface MenuItem {
  id: string;
  name: string;
  prices: { size: string; price: number }[];
  category: string;
  description?: string;
  image?: string;
}

export const menuData: MenuItem[] = [
  // Pizzas
  { id: "garlic-chita", name: "Garlic Chita", prices: [{ size: "S", price: 80 }, { size: "M", price: 100 }, { size: "L", price: 125 }, { size: "XL", price: 150 }], category: "Pizzas" },
  { id: "margherita", name: "Margherita", prices: [{ size: "S", price: 90 }, { size: "M", price: 110 }, { size: "L", price: 135 }, { size: "XL", price: 160 }], category: "Pizzas" },
  { id: "salami", name: "Salami", prices: [{ size: "S", price: 100 }, { size: "M", price: 120 }, { size: "L", price: 145 }, { size: "XL", price: 170 }], category: "Pizzas" },
  { id: "chicken", name: "Chicken", prices: [{ size: "S", price: 110 }, { size: "M", price: 130 }, { size: "L", price: 155 }, { size: "XL", price: 180 }], category: "Pizzas" },
  { id: "tikka-chicken", name: "Tikka Chicken", prices: [{ size: "S", price: 130 }, { size: "M", price: 150 }, { size: "L", price: 175 }, { size: "XL", price: 200 }], category: "Pizzas" },
  { id: "butter-chicken", name: "Butter Chicken", prices: [{ size: "S", price: 130 }, { size: "M", price: 150 }, { size: "L", price: 175 }, { size: "XL", price: 200 }], category: "Pizzas" },
  { id: "sweet-chilli-chicken", name: "Sweet Chilli Chicken", prices: [{ size: "S", price: 130 }, { size: "M", price: 150 }, { size: "L", price: 175 }, { size: "XL", price: 200 }], category: "Pizzas" },
  { id: "chick-bacon", name: "Chick & Macon", prices: [{ size: "S", price: 130 }, { size: "M", price: 150 }, { size: "L", price: 175 }, { size: "XL", price: 200 }], category: "Pizzas" },
  { id: "cheeza", name: "Cheeza", prices: [{ size: "S", price: 80 }, { size: "M", price: 100 }, { size: "L", price: 125 }, { size: "XL", price: 150 }], category: "Pizzas" },
  { id: "deep-dish-chicken", name: "Deep Dish Chicken", prices: [{ size: "Full", price: 230 }], category: "Pizzas" },
  { id: "deep-dish-cheeza", name: "Deep Dish Cheeza", prices: [{ size: "Full", price: 230 }], category: "Pizzas" },

  // Burgers & Toasties
  { id: "beef-burger-single", name: "Beef Burger - Single", prices: [{ size: "Regular", price: 70 }], category: "Burgers & Toasties" },
  { id: "beef-burger-double", name: "Beef Burger - Double", prices: [{ size: "Regular", price: 95 }], category: "Burgers & Toasties" },
  { id: "beef-burger-triple", name: "Beef Burger - Triple", prices: [{ size: "Regular", price: 120 }], category: "Burgers & Toasties" },
  { id: "smash-burger-single", name: "Smash Beef Burger - Single", prices: [{ size: "Regular", price: 100 }], category: "Burgers & Toasties" },
  { id: "smash-burger-double", name: "Smash Beef Burger - Double", prices: [{ size: "Regular", price: 120 }], category: "Burgers & Toasties" },
  { id: "smash-burger-triple", name: "Smash Beef Burger - Triple", prices: [{ size: "Regular", price: 140 }], category: "Burgers & Toasties" },
  { id: "chicken-mayo", name: "Chicken & Mayo Sandwich with Fries", prices: [{ size: "Regular", price: 105 }, { size: "Large", price: 110 }], category: "Burgers & Toasties" },
  { id: "vienna-sandwich", name: "Vienna Sandwich", prices: [{ size: "Regular", price: 100 }, { size: "Large", price: 105 }], category: "Burgers & Toasties" },
  { id: "steak-sandwich", name: "Steak Sandwich Full House", prices: [{ size: "Regular", price: 120 }], category: "Burgers & Toasties" },
  { id: "steak-roti", name: "Steak Roti", prices: [{ size: "Regular", price: 105 }], category: "Burgers & Toasties" },

  // Grills
  { id: "boerie", name: "Boerie", prices: [{ size: "Regular", price: 80 }], category: "Grills" },
  { id: "hotdog-single", name: "Hot Dog - Single", prices: [{ size: "Regular", price: 40 }], category: "Grills" },
  { id: "hotdog-double", name: "Hot Dog - Double", prices: [{ size: "Regular", price: 60 }], category: "Grills" },
  { id: "vienna-parcel-3", name: "Vienna Parcel - 3", prices: [{ size: "Regular", price: 70 }], category: "Grills" },
  { id: "vienna-parcel-6", name: "Vienna Parcel - 6", prices: [{ size: "Regular", price: 130 }], category: "Grills" },
  { id: "full-peri-wings", name: "4 Full Peri Wings", prices: [{ size: "Regular", price: 80 }], category: "Grills" },
  { id: "tbone", name: "T-Bone", prices: [{ size: "Regular", price: 100 }], category: "Grills" },
  { id: "mix-grill", name: "Mix Grill", prices: [{ size: "Regular", price: 200 }], category: "Grills" },

  // Rib Fest
  { id: "ribs-chips-500g", name: "Ribs & Chips - 500g", prices: [{ size: "Regular", price: 200 }], category: "Rib Fest", description: "Served with Fries" },
  { id: "ribs-chips-1kg", name: "Ribs & Chips - 1kg", prices: [{ size: "Regular", price: 350 }], category: "Rib Fest", description: "Served with Fries" },
  { id: "rib-combo1", name: "Rib Combo1: 2 Chops, Sausage, 2 Boerries", prices: [{ size: "Regular", price: 325 }], category: "Rib Fest" },
  { id: "rib-combo2", name: "Rib Combo2: Ribs, T-Bone, Sausage, 2 Boerries", prices: [{ size: "Regular", price: 410 }], category: "Rib Fest" },
  { id: "rib-combo3", name: "Rib Combo3: Ribs, 4 Chops, 2 Sausage, 4 Boerries", prices: [{ size: "Regular", price: 490 }], category: "Rib Fest" },
  { id: "family-box1", name: "Family Box1: Ribs, 4 Chops, 2 Sausage & 2 Garlic Rolls", prices: [{ size: "Regular", price: 550 }], category: "Rib Fest" },
  { id: "family-box2", name: "Family Box2: 800g Ribs, T-Bone, 3 Chops, 4 Sausage & 4 Boerries", prices: [{ size: "Regular", price: 710 }], category: "Rib Fest" },
  { id: "family-box3", name: "Family Box3: 1kg Ribs, 10 Chops, 8 Sausage, 8 Wings & 6 Boerries", prices: [{ size: "Regular", price: 980 }], category: "Rib Fest" },

  // Gatsby's
  { id: "polony-gatsby", name: "Polony Gatsby", prices: [{ size: "Half", price: 65 }, { size: "Full", price: 100 }], category: "Gatsby's" },
  { id: "vienna-gatsby", name: "Vienna Gatsby", prices: [{ size: "Half", price: 90 }, { size: "Full", price: 150 }], category: "Gatsby's" },
  { id: "chicken-gatsby", name: "Chicken Gatsby", prices: [{ size: "Half", price: 120 }, { size: "Full", price: 200 }], category: "Gatsby's" },
  { id: "steak-gatsby", name: "Steak Gatsby", prices: [{ size: "Half", price: 140 }, { size: "Full", price: 240 }], category: "Gatsby's" },
  { id: "chicken-roti-gatsby", name: "Chicken Roti Gatsby", prices: [{ size: "Half", price: 130 }, { size: "Full", price: 240 }], category: "Gatsby's" },
  { id: "steak-roti-gatsby", name: "Steak Roti Gatsby", prices: [{ size: "Half", price: 130 }, { size: "Full", price: 270 }], category: "Gatsby's" },
  { id: "samoosa-gatsby", name: "Samoosa: Chicken / Cheese & Corn", prices: [{ size: "3 for", price: 820 }], category: "Gatsby's" },
  { id: "halfmoons-steak", name: "Halfmoons: Steak", prices: [{ size: "3 for", price: 825 }], category: "Gatsby's" },
];

export const categories = [
  "Pizzas",
  "Burgers & Toasties",
  "Grills",
  "Rib Fest",
  "Gatsby's",
];

// Category images mapping
export const categoryImages: Record<string, string> = {
  "Pizzas": "pizza",
  "Burgers & Toasties": "burger",
  "Grills": "wings",
  "Rib Fest": "ribs",
  "Gatsby's": "gatsby",
};
