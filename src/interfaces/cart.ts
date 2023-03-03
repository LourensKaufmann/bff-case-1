import { CartEntry } from "./cartEntry";

export interface Cart {
  entries: CartEntry[];
  price: CartPrice;
  delivery: Delivery;
  loyalty: Loyalty;
  discounts: CartDiscount[];
}

interface CartPrice {
  total: number;
  totalDiscount: number;
  totalExVat: number;
}

interface Loyalty {
  pointsToEarn: number;
  pointToBurn: number;
  isEnabled: boolean;
}

type DeliveryType = "home" | "store";
interface Delivery {
  type: DeliveryType;
  cost: number;
  dates: Date[];
  description: string;
}

export type DiscountType = "fixed" | "percentage";

interface CartDiscount {
  type: DiscountType;
  amount: number;
  name: string;
  description: string;
}
