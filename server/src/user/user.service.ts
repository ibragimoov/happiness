import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/models/user.model";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
    async createUser(dto: CreateUserDto) {
        const candidate = await this.getUserByEmail(dto.email);

        if (candidate) {
            throw new HttpException(
                "Пользователь с таким email уже зарегистрирован",
                HttpStatus.BAD_REQUEST
            );
        }

        const user = await this.userRepository.create(dto);
        return user;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({
            where: { email },
        });
        return user;
    }

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    async getAllUsers() {
        return await this.userRepository.find();
    }
}
