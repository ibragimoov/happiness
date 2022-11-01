import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from "@nestjs/common";
import { CourseService } from "./course.service";
import { CreateCourseDto } from "./dto/create-course.dto";

@Controller("/course")
export class CourseController {
    constructor(private courseService: CourseService) {}

    @Get()
    getAll() {
        return this.courseService.getAll();
    }

    @Get(":id")
    getOne(@Param() params) {
        return this.courseService.getOne(params.id);
    }

    @Post()
    createCourse(@Body() dto: CreateCourseDto) {
        return this.courseService.create(dto);
    }

    @Put(":id")
    update(@Param() params, @Body() dto: CreateCourseDto) {
        return this.courseService.update(params.id, dto);
    }

    @Delete(":id")
    delete(@Param() params) {
        return this.courseService.delete(params.id);
    }
}
