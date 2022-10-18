import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinTable,
    ManyToMany,
} from "typeorm";
import { User } from "./user.model";

@Entity({ name: "role", synchronize: false })
export class Roles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    value: string;

    @Column({ nullable: false })
    description: string;

    @ManyToMany(() => User, (user) => user.roles)
    @JoinTable()
    users: User[];
}
