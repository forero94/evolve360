import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderItemDto {
    id: string;
    actualQuantity: number;
    actualPrice: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    status?: string;
    totalFinalPrice?: number;
    items?: UpdateOrderItemDto[];
}
