import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1630565036734 implements MigrationInterface {
  name = 'init1630565036734';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "publishers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "siret" integer NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_9d73f23749dca512efc3ccbea6a" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "games" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "price" integer NOT NULL, "tags" text NOT NULL, "release_date" TIMESTAMP NOT NULL DEFAULT now(), "publisherId" integer, CONSTRAINT "PK_c9b16b62917b5595af982d66337" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "games" ADD CONSTRAINT "FK_ac1293076b49d61bb4a47d8b485" FOREIGN KEY ("publisherId") REFERENCES "publishers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "games" DROP CONSTRAINT "FK_ac1293076b49d61bb4a47d8b485"`
    );
    await queryRunner.query(`DROP TABLE "games"`);
    await queryRunner.query(`DROP TABLE "publishers"`);
  }
}
