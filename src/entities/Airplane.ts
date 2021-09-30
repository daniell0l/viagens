import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"


@Entity("airplanes")
class Airplane {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    code: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    year: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();

        }
    }
}

export { Airplane }
