import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) { }

  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: {
        scheduledDate: new Date(createOrderDto.scheduledDate),
        status: 'pending',
        totalEstimatedPrice: createOrderDto.totalEstimatedPrice,
        subscriptionId: createOrderDto.subscriptionId,
      },
    });
  }

  findAll() {
    return this.prisma.order.findMany({
      include: {
        subscription: {
          include: { user: true },
        },
        items: {
          include: { product: true },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        subscription: {
          include: { user: true },
        },
        items: {
          include: { product: true },
        },
      },
    });
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    const { items, ...orderData } = updateOrderDto;

    return this.prisma.order.update({
      where: { id },
      data: {
        ...orderData,
        ...(items && {
          items: {
            update: items.map(item => ({
              where: { id: item.id },
              data: {
                actualQuantity: item.actualQuantity,
                actualPrice: item.actualPrice,
              },
            })),
          },
        }),
      },
    });
  }

  remove(id: string) {
    return this.prisma.order.delete({
      where: { id },
    });
  }

  async generateDailyOrders(date: Date) {
    // Logic to find subscriptions that should trigger on this date
    // 1. Get day of week (0-6)
    // 2. Get day of month (1-31)
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();

    const activeSubscriptions = await this.prisma.subscription.findMany({
      where: {
        isActive: true,
        OR: [
          { frequency: 'weekly', dayOfWeek: dayOfWeek },
          { frequency: 'monthly', dayOfMonth: dayOfMonth },
        ],
      },
      include: { items: { include: { product: true } } },
    });

    const createdOrders: any[] = [];

    for (const sub of activeSubscriptions) {
      let estimatedTotal = 0;
      sub.items.forEach(item => {
        estimatedTotal += item.quantity * item.product.pricePerUnit;
      });

      const order = await this.prisma.order.create({
        data: {
          subscriptionId: sub.id,
          scheduledDate: date,
          status: 'pending',
          totalEstimatedPrice: estimatedTotal,
          items: {
            create: sub.items.map(item => ({
              productId: item.productId,
              quantity: item.quantity,
            })),
          },
        },
      });
      createdOrders.push(order);
    }

    return createdOrders;
  }
}
