/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, NotePaper, User } from "@prisma/client";

export class NotePaperServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.NotePaperFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotePaperFindManyArgs>
  ): Promise<number> {
    return this.prisma.notePaper.count(args);
  }

  async findMany<T extends Prisma.NotePaperFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotePaperFindManyArgs>
  ): Promise<NotePaper[]> {
    return this.prisma.notePaper.findMany(args);
  }
  async findOne<T extends Prisma.NotePaperFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotePaperFindUniqueArgs>
  ): Promise<NotePaper | null> {
    return this.prisma.notePaper.findUnique(args);
  }
  async create<T extends Prisma.NotePaperCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotePaperCreateArgs>
  ): Promise<NotePaper> {
    return this.prisma.notePaper.create<T>(args);
  }
  async update<T extends Prisma.NotePaperUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotePaperUpdateArgs>
  ): Promise<NotePaper> {
    return this.prisma.notePaper.update<T>(args);
  }
  async delete<T extends Prisma.NotePaperDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotePaperDeleteArgs>
  ): Promise<NotePaper> {
    return this.prisma.notePaper.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.notePaper
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
