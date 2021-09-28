import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClient1632857883549 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table ({
            name: "clients",
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
        await queryRunner.dropTable("clients")
    }

}
