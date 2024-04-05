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

export const saveTicket = async(conceptoId: number, descripcion: string, idUsuarioCreador: number) => {

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

export const getAllTickets = async() => {

    try {

        const ticketsResponse = await prisma.tickets.findMany({
            select: {
                id: true,
                descripcion: true,
                fechaCreacion: true,
                fechaAtendido: true,
                fechaResuelto: true,
                catalogoTicket: {
                    select: {
                        id: true,
                        nombre: true
                    }
                },
                usuarioCreador: {
                    select: {
                        id: true,
                        nombres: true,
                        apellidoPaterno: true,
                        apellidoMaterno: true,
                        sucursal: {
                            select: {
                                nombre: true
                            }
                        }
                    }
                },
                estatus: {
                    select: {
                        id: true,
                        codigo: true,
                        nombre: true,
                        color: true
                    }
                }
            }
        });

        if (ticketsResponse.length == 0) {
            return {
                ok: false,
                message: 'No hay tickets'
            }
        }

        return {
            ok: true,
            message: ticketsResponse
        };
        
    } catch (error) {
        console.log(error);
    }

}

export const updateStatusTicket = async(idTicket: number) => {

    try {
        // Buscamos los estatus a asignar
        const estatusAtendiendo = await prisma.estatus.findFirst({
            where: {
                codigo: 'ESTATE'
            }
        });
        const estatusResuelto = await prisma.estatus.findFirst({
            where: {
                codigo: 'ESTRES'
            }
        });
        // Buscamos el ticket a cambiar
        const ticketId = await prisma.tickets.findFirst({
            where: {
                id: idTicket
            },
            select: {
                estatus: {
                    select: {
                        codigo: true,
                        nombre: true
                    }
                }
            }
        });
        if (!ticketId) throw new Error('No se encontró el ticket');

        // Si el estatus es pendiente ->  atendiendo y si es atendiendo entonces atendiento -> resuelto
        if (ticketId?.estatus.codigo == 'ESTPEN') {
            await prisma.tickets.update({
                where: {
                    id: idTicket
                }, 
                data: {
                    estatusId: estatusAtendiendo?.id
                }
            });
        } else {
            await prisma.tickets.update({
                where: {
                    id: idTicket
                }, 
                data: {
                    estatusId: estatusResuelto?.id
                }
            });
        }

        return {
            ok: true,
            message: 'Ticket actualizado correctamente'
        }
        
    } catch (error) {
        console.log(error);
    }

}

