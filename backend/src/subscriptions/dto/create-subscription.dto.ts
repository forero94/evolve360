export class CreateSubscriptionDto {
    userId: string;
    frequency: string; // "weekly" | "monthly"
    dayOfWeek?: number;
    dayOfMonth?: number;
    deliveryTimeSlot: string;
    items: SubscriptionItemDto[];
}

export class SubscriptionItemDto {
    productId: string;
    quantity: number;
}
