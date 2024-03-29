/*
  Warnings:

  - You are about to drop the column `areaId` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `codigoPostal` to the `Sucursal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_areaId_fkey";

-- AlterTable
ALTER TABLE "Sucursal" ADD COLUMN     "codigoPostal" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "areaId";
