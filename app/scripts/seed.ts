import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  const client = await prisma.client.create({
    data: {
      name: "Gym PowerFit",
      profiles: {
        create: {
          username: "gympowerfit",
          platform: "instagram",
          metrics: {
            create: [
              {
                date: new Date("2024-01-01"),
                followers: 12000,
                reach: 200000,
                likes: 3400,
                comments: 120,
                posts: 12
              },
              {
                date: new Date("2024-02-01"),
                followers: 12400,
                reach: 210000,
                likes: 3800,
                comments: 140,
                posts: 14
              }
            ]
          }
        }
      }
    }
  })

  console.log(client)
}

main()