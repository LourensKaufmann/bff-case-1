import { DiscountType } from "./cart";

interface Service {
  name: string;
  id: string;
  vat: number;
  vatPercentage: number;
  price: number;
  sku: string;
}
interface Product {
  vat: number;
  vatPercentage: number;
  price: number;
  id: string;
  sku: string;
  name: string;
  services: Service[];
}

interface BaseCartEntry {
  quantity: number;
  discounts: CartEntryDiscount[];
  delivery: CartEntryDelivery;
  price: CartEntryPrice;
  type?: CartEntryType;
  id: string;
}
interface CartEntryProduct extends BaseCartEntry {
  type: "product";
  product: Product;
}

interface CartEntryService extends BaseCartEntry {
  type: "service";
  service: Service;
}

export type CartEntry = CartEntryService | CartEntryProduct;

type CartEntryType = "product" | "service";

interface CartEntryPrice {
  total: number;
  vat: number;
  vatPercentage: number;
}

interface EarliestMoment {
  date: Date;
  description: string;
}

interface CartEntryDelivery {
  earliestMoment: EarliestMoment;
}

interface CartEntryDiscount {
  type: DiscountType;
}
interface CartEntryDiscount {
  type: DiscountType;
  amount: number;
  name: string;
  description: string;
}
