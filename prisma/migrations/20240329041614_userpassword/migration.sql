/*
  Warnings:

  - The values [licenciado,ingeniero,arquitecto] on the enum `Titulo` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `password` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Titulo_new" AS ENUM ('Licenciado', 'Ingeniero', 'Arquitecto');
ALTER TABLE "Usuario" ALTER COLUMN "titulo" TYPE "Titulo_new" USING ("titulo"::text::"Titulo_new");
ALTER TYPE "Titulo" RENAME TO "Titulo_old";
ALTER TYPE "Titulo_new" RENAME TO "Titulo";
DROP TYPE "Titulo_old";
COMMIT;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "password" TEXT NOT NULL;
