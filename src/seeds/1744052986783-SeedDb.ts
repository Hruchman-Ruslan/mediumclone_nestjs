import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1744052986783 implements MigrationInterface {
  name = 'SeedDb1744052986783';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );
  }

  public async down(): Promise<void> {}
}
