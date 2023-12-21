import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const admin = await prisma.role.upsert({
    where: { id: "admin" },
    update: {},
    create: {
        id: "admin",
        name: "Adminisztrátor",
        description: "A rendszer adminisztrátora",
        users: {
            create: {
                name: "Sándor",
                username: "sanya",
                password: "$2a$12$CuOoLfvQMWtUkGMVgs9Gzum0PQqNazQsarKOI1vpnIPaSgDIFerfC" //teszt
            }
        }
    }

  })
  const accountant = await prisma.role.upsert({
    where: { id: "accountant" },
    update: {},
    create: {
        id: "accountant",
        name: "Könyvelő",
        users: {
            create: {
                name: "Vándor",
                username: "vanya",
                password: "$2a$12$CuOoLfvQMWtUkGMVgs9Gzum0PQqNazQsarKOI1vpnIPaSgDIFerfC"
            }
        }
    }

  })
  const user = await prisma.role.upsert({
    where: { id: "user" },
    update: {},
    create: {
        id: "user",
        name: "Felhasználó",
        users: {
            create: {
                name: "Bándor",
                username: "banya",
                password: "$2a$12$CuOoLfvQMWtUkGMVgs9Gzum0PQqNazQsarKOI1vpnIPaSgDIFerfC"
            }
        }
    }

  })

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })