import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinTable,
    ManyToMany,
} from "typeorm";
import { Roles } from "./role.model";

@Entity({ name: "user" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    first_name: string;

    @Column({ nullable: true })
    last_name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToMany(() => Roles, (roles) => roles.users)
    @JoinTable({ name: "user-role" })
    roles: Roles[];
}
