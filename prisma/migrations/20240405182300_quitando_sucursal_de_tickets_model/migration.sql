/*
  Warnings:

  - You are about to drop the column `sucursalId` on the `Tickets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tickets" DROP CONSTRAINT "Tickets_sucursalId_fkey";

-- AlterTable
ALTER TABLE "Tickets" DROP COLUMN "sucursalId";
