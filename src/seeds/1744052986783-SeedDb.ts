import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1744052986783 implements MigrationInterface {
  name = 'SeedDb1744052986783';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    // password: 1234
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('foo', 'foo@gmail.com', '$2b$10$cV9YRej.cLAT/Wj1eWaEE.8teZSXB5xNLzvCXKskq1hEZv.LHp8vm')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First Article', 'This is the first article desc', 'This is the body of the first article', 'dragons,coffee', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second Article', 'This is the second article desc', 'This is the body of the second article', 'dragons,coffee', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
