import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Roles
  const roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Coordinador' },
    { id: 3, name: 'Docente' },
    { id: 4, name: 'Estudiante' },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { id: role.id },
      update: {},
      create: role,
    });
  }

  // Seed InscriptionStatus
  const inscriptionStatuses = [
    { id: 1, name: 'Inscrito' },
    { id: 2, name: 'Aprobado' },
    { id: 3, name: 'Rechazado' },
    { id: 4, name: 'Certificado' },
  ];

  for (const status of inscriptionStatuses) {
    await prisma.inscriptionStatus.upsert({
      where: { id: status.id },
      update: {},
      create: status,
    });
  }

  // Seed Categories
  const categories = [
    { id: 1, name: 'Programación' },
    { id: 2, name: 'Big Data' },
    { id: 3, name: 'Blockchain' },
    { id: 4, name: 'Marketing' },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { id: category.id },
      update: {},
      create: category,
    });
  }

  // Seed Modalities
  const modalities = [
    { id: 1, name: 'Virtual' },
    { id: 2, name: 'Remoto' },
    { id: 3, name: 'Presencial' },
  ];

  for (const modality of modalities) {
    await prisma.modality.upsert({
      where: { id: modality.id },
      update: {},
      create: modality,
    });
  }

  // Seed Users
  const users = [
    {
      id: 1,
      email: 'dev.alexander.daza@gmail.com',
      first_name: 'Alexander',
      last_name: 'Daza',
      phone: '573212191184',
      verified_email_at: new Date(),
      role_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: user,
    });
  }
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
