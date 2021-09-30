import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
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
    @OneToOne(() => Claint)
    client: Claint;

    @Column()
    airplanes_id: string;

    @JoinColumn({ name: "airplanes_id"})
    @OneToOne(() => Airplane)
    airplane: Airplane;

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

export { Ticket }