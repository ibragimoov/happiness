import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinTable,
    ManyToMany,
} from "typeorm";
import { Roles } from "./role.model";

@Entity({ name: "user", synchronize: false })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    first_name: string;

    @Column({ length: 50 })
    last_name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToMany(() => Roles, (roles) => roles.users)
    @JoinTable()
    roles: Roles[];
}
