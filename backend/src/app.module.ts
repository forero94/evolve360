import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [PrismaModule, UsersModule, ProductsModule, SubscriptionsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
