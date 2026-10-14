import { PrismaClient } from '../src/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { hashPassword } from 'better-auth/crypto'

const { ADMIN_NAME, ADMIN_EMAIL, ADMIN_USERNAME, ADMIN_PASSWORD, DATABASE_URL } = process.env

if (!ADMIN_EMAIL || !ADMIN_USERNAME || !ADMIN_PASSWORD) {
  console.error('ADMIN_EMAIL, ADMIN_USERNAME, dan ADMIN_PASSWORD wajib diisi di .env')
  process.exit(1)
}

if (ADMIN_PASSWORD.length < 12) {
  console.error('ADMIN_PASSWORD minimal 12 karakter')
  process.exit(1)
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: DATABASE_URL }),
})

const main = async () => {
  const email = ADMIN_EMAIL.toLowerCase()
  const username = ADMIN_USERNAME.toLowerCase()
  const passwordHash = await hashPassword(ADMIN_PASSWORD)

  const existing = await prisma.user.findFirst({
    where: { OR: [{ email }, { username }] },
  })

  if (existing) {
    await prisma.$transaction([
      prisma.user.update({
        where: { id: existing.id },
        data: { role: 'ADMIN', username, displayUsername: ADMIN_USERNAME },
      }),
      prisma.account.updateMany({
        where: { userId: existing.id, providerId: 'credential' },
        data: { password: passwordHash },
      }),
    ])
    console.log('Akun admin diperbarui')
    return
  }

  const user = await prisma.user.create({
    data: {
      name: ADMIN_NAME || 'Admin',
      email,
      username,
      displayUsername: ADMIN_USERNAME,
      emailVerified: true,
      role: 'ADMIN',
    },
  })

  await prisma.account.create({
    data: {
      accountId: user.id,
      providerId: 'credential',
      userId: user.id,
      password: passwordHash,
    },
  })

  console.log('Akun admin dibuat')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
