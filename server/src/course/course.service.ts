import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Chapters } from "src/entities/course-chapter.entity";
import { Course } from "src/entities/course.entity";
import { Enrollment } from "src/entities/enrollment.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateCourseDto } from "./dto/create-course.dto";

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course)
        private courseRepository: Repository<Course>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Enrollment)
        private enrollmentRepository: Repository<Enrollment>
    ) {}

    async getAll() {
        return await this.courseRepository.find();
    }

    async getOne(id: any) {
        const course = await this.courseRepository.find({ where: { id: id } });

        if (!course) {
            throw new BadRequestException({ message: "Курс не найден" });
        }

        return course;
    }

    async create(dto: CreateCourseDto) {
        try {
            const user = await this.userRepository.findOne({
                where: { id: dto.user_id },
            });

            if (!user) {
                throw new BadRequestException("Пользователь не найден");
            }

            const course = await this.courseRepository.save({
                ...dto,
            });

            const enrollment = {
                enrollment_date: new Date(),
                is_paid_subscription: "0",
                user: user,
                course: course,
            };

            await this.enrollmentRepository.save({ ...enrollment });

            return course;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id: any) {
        const course = await this.courseRepository.delete({ id: id });
        return {
            message: "deleting success",
        };
    }

    async update(id: number, dto: CreateCourseDto) {
        await this.courseRepository.update(
            { id: id },
            {
                title: dto.title,
                brief: dto.brief,
            }
        );

        return {
            message: "update success",
        };
    }
}
