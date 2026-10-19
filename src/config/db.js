require("dotenv").config()

const {PrismaPg} = require("@prisma/adapter-pg")
const {PrismaClient} = require("../generated/prisma/client")

const adaptador = new PrismaPg ({
    connectionString: process.env.DATABASE_URL
})

const prisma = new PrismaClient ({adapter: adaptador})

module.exports = prisma