
export interface Ticket {
    id: number,
    descripcion: string,
    fechaCreacion: Date,
    fechaAtendido: Date,
    fechaResuelto: Date,
    catalogoTicketId: number,
    usuarioCreadorId: number,
    estatusId: number,
    sucursalId: number,
    usuarioResuelve: number
}
