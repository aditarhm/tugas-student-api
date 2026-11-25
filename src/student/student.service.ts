import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { nim: string; nama: string; jurusan: string }) {
    return this.prisma.student.create({
      data,
    });
  }

  async findAll(jurusan?: string) {
    return this.prisma.student.findMany({
      where: jurusan
        ? {
            jurusan: {
              contains: jurusan,
              mode: 'insensitive',
            },
          }
        : undefined,
      orderBy: { id: 'asc' },
    });
  }

  async countStudents() {
    const total = await this.prisma.student.count();
    return { totalStudents: total };
  }

  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({
      where: { id },
    });
    if (!student) {
      throw new NotFoundException(`Student dengan id ${id} tidak ditemukan`);
    }
    return student;
  }

  async update(id: number, data: { nim?: string; nama?: string; jurusan?: string }) {
    await this.findOne(id);
    return this.prisma.student.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.student.delete({
      where: { id },
    });
  }
}

