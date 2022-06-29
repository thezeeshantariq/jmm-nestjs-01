import { MigrationInterface, QueryRunner } from "typeorm";

export class changeFieldTypesInUsers1656501967012 implements MigrationInterface {
    name = 'changeFieldTypesInUsers1656501967012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "isActive"
            SET DEFAULT true
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "address" DROP NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "address"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "isActive" DROP DEFAULT
        `);
    }

}
