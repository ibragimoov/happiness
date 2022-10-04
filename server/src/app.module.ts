import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { CourseModule } from "./course/course.module";
import { AuthModule } from "./auth/auth.module";

import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./models/user.model";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        TypeOrmModule.forRoot({
            type: "mysql",
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [User],
            synchronize: true,
        }),
        UserModule,
        CourseModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
