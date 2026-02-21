const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log("Seeding database...");

    // Create a User
    const user = await prisma.user.create({
        data: {
            fullName: "Juan Pérez",
            address: "Av. Siempre Viva 742",
            phoneWhatsApp: "+5491112345678",
            email: "juan@example.com"
        }
    });

    // Create Products
    const asado = await prisma.product.create({
        data: {
            name: "Asado Premium (1kg)",
            unit: "kg",
            pricePerUnit: 12000,
            category: "Carne Vacuna"
        }
    });

    const vacio = await prisma.product.create({
        data: {
            name: "Vacío de Novillo (1kg)",
            unit: "kg",
            pricePerUnit: 13500,
            category: "Carne Vacuna"
        }
    });

    // Create a Subscription
    const sub = await prisma.subscription.create({
        data: {
            userId: user.id,
            frequency: "weekly",
            dayOfWeek: 5, // Friday
            deliveryTimeSlot: "10:00 - 14:00",
            isActive: true,
            items: {
                create: [
                    { productId: asado.id, quantity: 2 }, // 2 kg of Asado
                    { productId: vacio.id, quantity: 1 }  // 1 kg of Vacío
                ]
            }
        },
        include: { items: true }
    });

    // Generate a Pending Order from that Subscription
    const estimatedTotal = (2 * asado.pricePerUnit) + (1 * vacio.pricePerUnit);

    const order = await prisma.order.create({
        data: {
            subscriptionId: sub.id,
            scheduledDate: new Date(),
            status: "pending",
            totalEstimatedPrice: estimatedTotal,
            items: {
                create: sub.items.map(item => ({
                    productId: item.productId,
                    quantity: item.quantity
                }))
            }
        }
    });

    console.log("Database seeded successfully!");
    console.dir({ user, asado, sub, order }, { depth: null });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
