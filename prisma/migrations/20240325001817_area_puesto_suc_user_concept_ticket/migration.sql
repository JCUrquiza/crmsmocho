-- CreateEnum
CREATE TYPE "Titulo" AS ENUM ('licenciado', 'ingeniero', 'arquitecto');

-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Puesto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "areaId" INTEGER NOT NULL,

    CONSTRAINT "Puesto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sucursal" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "zona" TEXT NOT NULL,
    "calle" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "colonia" TEXT NOT NULL,
    "numeroInterior" TEXT NOT NULL,
    "numeroExterior" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "telefonoUno" TEXT NOT NULL,
    "telefonoDos" TEXT NOT NULL,

    CONSTRAINT "Sucursal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CatalogoTicket" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "CatalogoTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estatus" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Estatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidoPaterno" TEXT NOT NULL,
    "apellidoMaterno" TEXT NOT NULL,
    "titulo" "Titulo" NOT NULL,
    "celular" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "areaId" INTEGER NOT NULL,
    "puestoId" INTEGER NOT NULL,
    "sucursalId" INTEGER NOT NULL,
    "estatusId" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tickets" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaAtendido" TIMESTAMP(3) NOT NULL,
    "fechaResuelto" TIMESTAMP(3) NOT NULL,
    "catalogoTicketId" INTEGER NOT NULL,
    "usuarioCreadorId" INTEGER NOT NULL,
    "estatusId" INTEGER NOT NULL,
    "sucursalId" INTEGER NOT NULL,
    "usuarioResuelve" INTEGER NOT NULL,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Puesto" ADD CONSTRAINT "Puesto_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_puestoId_fkey" FOREIGN KEY ("puestoId") REFERENCES "Puesto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_sucursalId_fkey" FOREIGN KEY ("sucursalId") REFERENCES "Sucursal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_estatusId_fkey" FOREIGN KEY ("estatusId") REFERENCES "Estatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_catalogoTicketId_fkey" FOREIGN KEY ("catalogoTicketId") REFERENCES "CatalogoTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_usuarioCreadorId_fkey" FOREIGN KEY ("usuarioCreadorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_estatusId_fkey" FOREIGN KEY ("estatusId") REFERENCES "Estatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_sucursalId_fkey" FOREIGN KEY ("sucursalId") REFERENCES "Sucursal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
