import { CartEntry } from "./cartEntry";

export interface Cart {
    cartEntries: CartEntry[];
    totalPrice: number;
    deliveryModes: DeliveryMode[];
    loyaltyPointsToEarn: number;
    loyaltyPointsToBurn: number;
    discount: CartEntryDiscount;
    isGuestCart: boolean;
    isLoyaltyEnabled: boolean;
}

interface CartEntryDiscount {
    appliedDiscounts: any[]; // TODO
    discountValues: any[]; // TODO
}

interface DeliveryMode {
    cost: number;
    description: string;
}