import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() body: { nim: string; nama: string; jurusan: string }) {
    return this.studentService.create(body);
  }

  @Get()
  findAll(@Query('jurusan') jurusan?: string) {
    return this.studentService.findAll(jurusan);
  }

  // Endpoint lanjutan (opsional nilai tambah): hitung total data di database
  @Get('count')
  countStudents() {
    return this.studentService.countStudents();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { nim?: string; nama?: string; jurusan?: string },
  ) {
    return this.studentService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.remove(id);
  }
}