import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../models/user.model";
import { Roles } from "../models/role.model";
import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";

@Module({
    controllers: [RolesController],
    providers: [RolesService],
    imports: [TypeOrmModule.forFeature([Roles, User])],
    exports: [RolesService],
})
export class RolesModule {}
