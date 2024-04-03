import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {

    // 1.- Borrar registros previos
    await Promise.all([
        prisma.tickets.deleteMany(),
        prisma.usuario.deleteMany(),
        prisma.sucursal.deleteMany(),
        prisma.estatus.deleteMany(),
        prisma.puesto.deleteMany(),
        prisma.area.deleteMany(),
        prisma.catalogoTicket.deleteMany()
    ]);

    // 2.- Intertar registros:
    const { area, puesto, estatus, sucursal, usuario, catalogoTickets } = initialData;
    // Área:
    await prisma.area.create({
        data: area
    });
    const areaId = await prisma.area.findFirst();
    // Puesto
    await prisma.puesto.create({
        data: {
            nombre: puesto.nombre,
            areaId: areaId!.id
        }
    });
    // Estatus
    await prisma.estatus.createMany({
        data: estatus
    });
    // Sucursal
    await prisma.sucursal.create({
        data: {
            nombre: sucursal.nombre,
            zona: sucursal.zona,
            calle: sucursal.calle,
            municipio: sucursal.municipio,
            colonia: sucursal.colonia,
            numeroInterior: sucursal.numeroInterior,
            numeroExterior: sucursal.numeroExterior,
            codigoPostal: sucursal.codigoPostal,
            ciudad: sucursal.ciudad,
            correo: sucursal.correo,
            telefonoUno: sucursal.telefonoUno,
            telefonoDos: sucursal.telefonoDos
        }
    });
    const puestoId = await prisma.puesto.findFirst();
    const sucursalId = await prisma.sucursal.findFirst();
    const estatusId = await prisma.estatus.findFirst();
    // Usuario
    // TODO: Falta agregar campo password
    await prisma.usuario.create({
        data: {
            nombres: usuario.nombres,
            apellidoPaterno: usuario.apellidoPaterno,
            apellidoMaterno: usuario.apellidoMaterno,
            titulo: 'Ingeniero',
            celular: usuario.celular,
            correo: usuario.correo,
            password: usuario.password,
            puestoId: puestoId!.id,
            sucursalId: sucursalId!.id,
            estatusId: estatusId!.id
        }
    });
    // Catálogo
    await prisma.catalogoTicket.createMany({
        data: catalogoTickets
    })
    
    console.log('Seed Ejecutado Correctamente');
}

(() => {
    // El script NO SE DEBE DE EJECUTAR EN PRODUCCIÓN
    if ( process.env.NODE_ENV === 'production' ) return;

    main();
})();
