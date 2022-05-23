/*
  Warnings:

  - The primary key for the `Wood` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Wood" DROP CONSTRAINT "Wood_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Wood_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Wood_id_seq";
