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
    const { areas, puestos, estatus, sucursales, usuarios, catalogoTickets } = initialData;

    // Áreas:
    await prisma.area.createMany({
        data: areas
    });
    const areaSistemas = await prisma.area.findFirst({
        where: {
            nombre: 'Sistemas'
        }
    });
    const areaCC = await prisma.area.findFirst({
        where: {
            nombre: 'Credito y cobranza'
        }
    });

    // Puestos
    puestos.forEach( async(puesto) => {

        const { nombre } = puesto;
        if (nombre == 'Desarrollador Frontend') {
            await prisma.puesto.create({
                data: {
                    nombre: 'Desarrollador Frontend',
                    areaId: areaSistemas!.id
                }
            });
        } else {
            await prisma.puesto.create({
                data: {
                    nombre: 'Control Interno',
                    areaId: areaCC!.id
                }
            });
        }

    });

    // Estatus
    await prisma.estatus.createMany({
        data: estatus
    });

    // Sucursales
    await prisma.sucursal.createMany({
        data: sucursales
    });

    // Búsqueda de puestos
    const puestoDesarrollador = await prisma.puesto.findFirst({
        where: {
            nombre: 'Desarrollador Frontend'
        }
    });
    const puestoControlInterno = await prisma.puesto.findFirst({
        where: {
            nombre: 'Control Interno'
        }
    });
    // Búsqueda de sucursales
    const sucursalVallejo = await prisma.sucursal.findFirst({
        where: {
            nombre: 'Vallejo'
        }
    });
    const sucursalGuadalajara = await prisma.sucursal.findFirst({
        where: {
            nombre: 'Guadalajara'
        }
    });
    const estatusId = await prisma.estatus.findFirst();

    // Usuario
    usuarios.forEach( async(usuario) => {

        const { 
            nombres, 
            apellidoPaterno, 
            apellidoMaterno,
            celular,
            correo,
            password
        } = usuario;
        if (nombres == 'Juan Carlos') {
            await prisma.usuario.create({
                data: {
                    nombres,
                    apellidoPaterno,
                    apellidoMaterno,
                    titulo: 'Ingeniero',
                    celular,
                    correo,
                    password,
                    puestoId: puestoDesarrollador!.id,
                    sucursalId: sucursalVallejo!.id,
                    estatusId: estatusId!.id
                }
            });
        } else {
            await prisma.usuario.create({
                data: {
                    nombres,
                    apellidoPaterno,
                    apellidoMaterno,
                    titulo: 'Licenciado',
                    celular,
                    correo,
                    password,
                    puestoId: puestoControlInterno!.id,
                    sucursalId: sucursalGuadalajara!.id,
                    estatusId: estatusId!.id
                }
            });
        }

    });

    // Catálogo
    await prisma.catalogoTicket.createMany({
        data: catalogoTickets
    });
    
    console.log('Seed Ejecutado Correctamente');
}

(() => {
    // El script NO SE DEBE DE EJECUTAR EN PRODUCCIÓN
    if ( process.env.NODE_ENV === 'production' ) return;

    main();
})();
