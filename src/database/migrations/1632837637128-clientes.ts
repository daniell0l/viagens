import {MigrationInterface, QueryRunner, Table } from "typeorm";


export class clientes1632837637128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table ({
            name: "clientes",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "cpf",
                    type: "varchar"
                },
                {
                    name: "age",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestemp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestemp",
                    default: "now()"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clientes")
    }

}
