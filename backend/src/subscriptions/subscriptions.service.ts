import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Injectable()
export class SubscriptionsService {
  constructor(private prisma: PrismaService) { }

  create(createSubscriptionDto: CreateSubscriptionDto) {
    const { items, ...subscriptionData } = createSubscriptionDto;
    return this.prisma.subscription.create({
      data: {
        ...subscriptionData,
        items: {
          create: items,
        },
      },
      include: {
        items: true,
      },
    });
  }

  findAll() {
    return this.prisma.subscription.findMany({
      include: {
        items: {
          include: { product: true },
        },
        user: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.subscription.findUnique({
      where: { id },
      include: {
        items: {
          include: { product: true },
        },
        user: true,
      },
    });
  }

  update(id: string, updateSubscriptionDto: UpdateSubscriptionDto) {
    // Note: updating nested items needs more complex logic for production (upsert/delete/update)
    // For MVP, simplified:
    const { items, ...subscriptionData } = updateSubscriptionDto;
    return this.prisma.subscription.update({
      where: { id },
      data: subscriptionData,
    });
  }

  remove(id: string) {
    return this.prisma.subscription.delete({
      where: { id },
    });
  }
}
