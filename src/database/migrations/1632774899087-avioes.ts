import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class avioes1632774899087 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table ({
            name: "avioes",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "code",
                    type: "varchar"
                },
                {
                    name: "brand",
                    type: "varchar"
                },
                {
                    name: "model",
                    type: "varchar"
                },
                {
                    name: "year",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "update_at",
                    type: "timestemp",
                    default: "now()"
                }
            ]

        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("avioes");
    }

}
