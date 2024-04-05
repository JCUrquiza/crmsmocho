'use client';

import { updateStatusTicket } from '@/actions';
import React, { useEffect } from 'react';

interface Props {
    respuesta: boolean;
    tickets: any[]
}

export const ListarTickets = ({ respuesta, tickets }: Props) => {

    const ticketAccion = async(id: number) => {
        const resp = await updateStatusTicket(id);
        console.log(resp);
    }

    return (
        <div className="pt-10 mb-10">

            {
                !respuesta ? (
                    <h5>Lo sentimos, no hay tickets en este momento.</h5>
                ) : (
                    <table className="min-w-full">

                        <thead className="bg-gray-200 border-b">
                            <tr>
                                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Id
                                </th>
                                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Concepto
                                </th>
                                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Descripción
                                </th>
                                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Fecha Creación
                                </th>
                                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Creador
                                </th>
                                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Estatus
                                </th>
                                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Acción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tickets.map( (ticket) => (
                                    <tr key={ ticket.id } className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            { ticket.id }
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            { ticket.catalogoTicket.nombre }
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            { ticket.descripcion }
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            { new Date(ticket.fechaCreacion).toLocaleString() }
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            { ticket.usuarioCreador.nombres }
                                        </td>

                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <span 
                                                className={`mx-2 text-white font-bold`} 
                                                style={{ backgroundColor: ticket.estatus.color, borderRadius: '0.5rem', padding: '5px' }}
                                            >
                                                { ticket.estatus.nombre }
                                            </span>
                                        </td>

                                        <td className='flex justify-center'>
                                            <button
                                                className='btn-primary my-2'
                                                onClick={ () => ticketAccion(ticket.id) }
                                            >
                                                {
                                                    ticket.estatus.codigo == 'ESTPEN' ? 'Atender' : 'Resuelto'
                                                }
                                            </button>
                                        </td>
                                    
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                )
            }

        </div>
    )
}
