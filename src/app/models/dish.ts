export interface Dish {
  id: number;               // Auto-incremented primary key
  restaurantId: number;    // Foreign key to restaurant
  category: string;         // Menu category (e.g., "Dessert", "Main")
  name: string;             // Menu item name
  description?: string;     // Optional description
  price: number;            // Price as a number (e.g., 15.99)
}

export interface CartItem{
  dish : Dish;
  count : number;
}
