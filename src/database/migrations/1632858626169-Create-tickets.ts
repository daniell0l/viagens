import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTickets1632858626169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table ({
            name: "tickets",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "code",
                    type: "varchar",
                },
                {
                    name: "data",
                    type: "varchar",
                },
                {
                    name: "hora",
                    type: "varchar",
                },
                {
                    name: "airplanes_id",
                    type: "uuid",
                },
                {
                    name: "clients_id",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },

            ],
            foreignKeys: [
                {
                    name: "FKUserSenderTickets",
                    referencedTableName: "clients",
                    referencedColumnNames: ["id"],
                    columnNames: ["clients_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",
                },
                {
                    name:"FKairplanesTickets",
                    referencedTableName: "airplanes",
                    referencedColumnNames: ["id"],
                    columnNames: ["airplanes_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",
                }  
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tickets");
    }

}