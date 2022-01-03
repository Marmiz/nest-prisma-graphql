import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    return 'This action creates a cat';
  }

  @Get()
  findAll(): Observable<any[]> {
    return of([]);
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns the cat with id ${id}`;
  }
}
