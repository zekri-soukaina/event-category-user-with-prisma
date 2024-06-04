import { ObjectId } from "mongodb";
import { PrismaClient } from "@prisma/client";

import eventData from "../data/events.json" assert { type: "json" };
import userData from "../data/users.json" assert { type: "json" };
import categoryData from "../data/categories.json" assert { type: "json" };

const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });

async function main() {
  // Clear existing data
  // await prisma.order.deleteMany({});
  // await prisma.book.deleteMany({});
  // await prisma.user.deleteMany({});

  // First destructure Data
  const { events } = eventData;
  const { users } = userData;
  const { categories } = categoryData;

  for (const category of categories) {
    // event.id = new ObjectId().toHexString();
    await prisma.category.upsert({
      where: { id: category.id },
      update: {},
      create: category,
    });
  }

  // Create Users
  for (const user of users) {
    const existingUser = await prisma.user.findUnique({
      where: { username: user.username },
    });
    if (!existingUser) {
      // user.id = new ObjectId().toHexString();
      await prisma.user.create({
        data: user,
      });
    } else {
      console.log(
        `User with username '${user.username}' already exists. Skipping insertion.`
      );
    }
  }

  for (const event of events) {
    console.log("event: ", event);
    event.id = new ObjectId().toHexString();
    // find the book and user ids based on thiere JSON IDs
    const category = categories.find(
      (category) => category.id === event.categoryIds
    );
    const user = users.find((user) => user.id === event.createdBy);
    // skip if book or user not found
    if (!category || !user) {
      console.error(`category or user not found for order Id ${event.id}`);
      continue;
    }
    await prisma.event.upsert({
      where: { id: event.id },
      update: {},
      create: event,
    });
  }
  //   for (const event of events) {
  //     event.id = new ObjectId().toHexString();
  //     await prisma.event.upsert({
  //       where: { id: event.id },
  //       update: {},
  //       create: {
  //         ...event,
  //         categories: {
  //           connect: category.categoryIds.map((category) => ({ id: category.id })),
  //         },
  //       },
  //     });
  //   }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
