import React from 'react';
import { Title } from '@/components';
import { CrearTicket } from './ui/CrearTicket';
import { getAllTickets } from '@/actions';

export default function TicketPage() {

    return (

        <div>

            <Title title='Sistema de Tickets' subTitle='Administración de tickets' />

            <CrearTicket />

            <div className="pt-10 mb-10">

                <table className="min-w-full">

                    <thead className="bg-gray-200 border-b">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Id
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Nombre completo
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Descripción
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Estatus
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Mark
                            </td>
                            <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Conexión a internet
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 ">
                                <span className='mx-2 text-green-800'>Finalizada</span>
                            </td>

                        </tr>

                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Mark
                            </td>
                            <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                Reseteo de usuario
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 ">
                                <span className='mx-2 text-red-800'>Detenida</span>
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    )

}
