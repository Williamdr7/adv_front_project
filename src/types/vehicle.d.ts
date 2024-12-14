export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  popular_vehicles: string[];
  price: {
    min_price: number;
    max_price: number;
  };
  vehicle_transmission: null;
  eligible_for_armoured: boolean;
};
