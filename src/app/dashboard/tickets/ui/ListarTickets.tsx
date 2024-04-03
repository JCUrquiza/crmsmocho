'use client';

import React, { useEffect } from 'react';

interface Props {
    tickets: any[]
}

export const ListarTickets = ({ tickets }: Props) => {

    useEffect(() => {
        console.log(tickets);
        console.log('Hola');
    }, []);

    return (
        <div className="pt-10 mb-10">

                <table className="min-w-full">

                    <thead className="bg-gray-200 border-b">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Id
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Concepto
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Descripción
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Fecha Creación
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Creador
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Estatus
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
                                    {/* <td className="px-6 py-3 whitespace-nowrap">
                                        <span 
                                            className={`inline-block px-2 py-1 text-gray-800 bg-${ticket.estatus.color}-200 rounded-lg`}
                                            style={{ backgroundColor: `var(--${ticket.estatus.color})` }}
                                        >
                                            {ticket.estatus.nombre}
                                        </span>
                                    </td> */}
                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>
    )
}
