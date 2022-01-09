import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const harry = await prisma.user.upsert({
    where: { email: 'hp@hogwarts.com' },
    update: {},
    create: {
      email: 'hp@hogwarts.com',
      name: 'Harry Potter',
    },
  });

  const draco = await prisma.user.upsert({
    where: { email: 'dm@hogwarts.com' },
    update: {},
    create: {
      email: 'dm@hogwarts.com',
      name: 'Draco Malfoy',
    },
  });
  console.log({ harry, draco });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
