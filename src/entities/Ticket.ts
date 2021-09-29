import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Airplane } from "./Airplane";
import { Claint } from "./Client";

@Entity("tickets")
class Ticket {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    code: string;

    @Column()
    data: string;

    @Column()
    hora: string;
    
    @Column()
    clients_id: string;

    @JoinColumn({ name: "clients_id" })
    @ManyToOne(() => Claint)
    client: Claint;

    @Column()
    airplanes_id: string;

    @JoinColumn({ name: "airplanes_id"})
    @ManyToOne(() => Airplane)
    airplane: Airplane;

    @CreateDateColumn()
    created_id: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Ticket }