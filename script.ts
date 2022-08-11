import { PrismaClient } from "@prisma/client";
import { constants } from "buffer";

const prisma = new PrismaClient()

async function main() {
    //
    // Write Prisma client query here..
    //

    // Add new record
    // const user = await prisma.user.create({
    //     data: {
    //         name: "BOb",
    //         email: "bob@prisma.io",
    //     },
    // })
    // console.log(user)

    // see all record
    // const users = await prisma.user.findMany()
    // console.log(users)

    // const user = await prisma.user.create({
    //     data: {
    //         name: "rupi",
    //         email: "rupi@prisma.io",
    //         posts: {
    //             create: {
    //                 title: "rupi tabetai"
    //             }
    //         }
    //     }
    // })
    // console.log(user)

    const usersWithPosts = await prisma.user.findMany({
        include: {
            posts: true,
        }
    })
    console.dir(usersWithPosts, { depth: null })
}

main().then(async () => [
    await prisma.$disconnect
]).catch(async (err) => {
    console.log(err)
    await prisma.$disconnect
    process.exit(1)
})