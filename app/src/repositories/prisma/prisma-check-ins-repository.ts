import { prisma } from '@/lib/prisma'
import { CheckIn, Prisma } from '@prisma/client'

import { CheckInsRepository } from '../check-ins-repository.interface'

export class PrismaCheckInsRepository implements CheckInsRepository {
  async countByUserId(userId: string): Promise<number> {
    return await prisma.checkIn.count({
      where: {
        user_id: userId,
      },
    })
  }

  async findManyByUserId(userId: string, page: number) {
    return await prisma.checkIn.findMany({
      skip: page,
      take: 20,
      where: {
        user_id: userId,
      },
    })
  }

  async findByUserIdOnDate(
    userId: string,
    date: Date,
  ): Promise<CheckIn | null> {
    const checkIn = await prisma.checkIn.findFirst({
      where: {
        user_id: userId,
        created_at: date,
      },
    })

    return checkIn
  }

  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = await prisma.checkIn.create({
      data,
    })

    return checkIn
  }
}
