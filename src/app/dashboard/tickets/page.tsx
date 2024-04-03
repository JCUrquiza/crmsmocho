import React from 'react';
import { Title } from '@/components';
import { CrearTicket } from './ui/CrearTicket';
import { getAllTickets } from '@/actions';
import { ListarTickets } from './ui/ListarTickets';

export default async function TicketPage() {

    const ticketsData = await getAllTickets();

    return (

        <div>

            <Title title='Sistema de Tickets' subTitle='Administración de tickets' />

            <CrearTicket />

            <ListarTickets tickets={ticketsData?.message} />

        </div>

    )

}
