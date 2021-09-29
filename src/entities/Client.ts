import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("clients")
class Claint {
    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    idade: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }


}

export { Claint}