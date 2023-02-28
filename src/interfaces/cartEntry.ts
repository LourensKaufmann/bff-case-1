export interface CartEntry {
    productId: string;
    productName: string;
    price: CartEntryPrice;
    quantity: number;
    deliveryDate: CartEntryDeliveryDate;
}

interface CartEntryPrice {
    total: number;
}

interface CartEntryDeliveryDate {
    earliestDate: Date;
    messageKey: string;
}
