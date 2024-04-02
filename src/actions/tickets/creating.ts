'use server';

import prisma from '@/lib/prisma';

export const getConcepts = async() => {

    try {

        const concepts = await prisma.catalogoTicket.findMany({});

        return {
            ok: true,
            concepts
        }
        
    } catch (error) {
        console.log(error);
    }

}

export const saveTicket = async(conceptoId: number, descripcion: string, idUsuarioCreador: number, idSucursal: number) => {

    try {

        // Buscamos el estatus de 'Pendiente' para poder asignarlo a los nuevos tickets que se creen
        const resEstatus = await prisma.estatus.findFirst({
            where: {
                codigo: 'ESTPEN'
            }
        })

        // TODO: Agregar el status de pendiente en el seed
        // TODO: Buscar el status y darle el status de pendiente
        // TODO: La sucursal

        const saveTicket = await prisma.tickets.create({
            data: {
                descripcion: descripcion,
                fechaCreacion: new Date(),
                catalogoTicketId: conceptoId,
                usuarioCreadorId: idUsuarioCreador,
                estatusId: resEstatus!.id,
                sucursalId: idSucursal,
            }
        });

        console.log(saveTicket);

        return {
            ok: true,
            message: 'Ticket creado correctamente'
        }
        
    } catch (error) {
        console.log(error);
    }

}

