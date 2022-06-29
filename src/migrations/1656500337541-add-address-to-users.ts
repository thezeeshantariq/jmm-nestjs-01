import { MigrationInterface, QueryRunner } from "typeorm";

export class addAddressToUsers1656500337541 implements MigrationInterface {
    name = 'addAddressToUsers1656500337541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users"
            ADD "address" character varying NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users" DROP COLUMN "address"
        `);
    }

}
