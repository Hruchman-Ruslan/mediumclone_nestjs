import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUsernameToUsers1744394426255 implements MigrationInterface {
    name = 'AddUsernameToUsers1744394426255'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
    }

}
