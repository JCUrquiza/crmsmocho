-- AlterTable
ALTER TABLE "Tickets" ALTER COLUMN "fechaAtendido" DROP NOT NULL,
ALTER COLUMN "fechaResuelto" DROP NOT NULL,
ALTER COLUMN "usuarioResuelve" DROP NOT NULL;
