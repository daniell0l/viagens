import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class passagens1632841205786 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table ({
            name: "passagens",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "user_sender",
                    type: " uuid",
                },
                {
                    name: "user_receiver",
                    type: "uuid",
                },
                {
                    name: "avioes_id",
                    type: "uuid",
                },
                {
                    name: "message",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestemp",
                    default: "now()"
                },

            ],
            foreignKeys: [
                {
                    name: "FKUserSenderPassagens",
                    referencedTableName: "clientes",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_sender"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",

                },
                {
                    name: "FKUserReceiverPassagens",
                    referencedTableName: "clientes",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_receiver"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",
                },
                {
                    name: "FKAvioesPassagens",
                    referencedTableName: "avioes",
                    referencedColumnNames: ["id"],
                    columnNames: ["avioes_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL",
                }
            ]
        })
    )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("passagens")
    }

}
