import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}
