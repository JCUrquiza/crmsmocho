import React from 'react';

interface SeedUser {
    name: string;
    email: string;
    role: ValidRole;
}

interface SeedTickets {
    descripcion: string;
}

type ValidRole = 'admin' | 'user' | 'client';
type ValidStatus = 'pendiente' | 'en proceso' | 'realizado';
type ValidCatalogoTickets = '';

interface SeedData {
    users: SeedUser[];
    tickets: SeedTickets[];
}

export const initialData: SeedData = {

    users: [
        {
            name: 'John Doe',
            email: '',
            role: 'admin'
        },
        {
            name: 'Jane Smith',
            email: '',
            role: 'user'
        }
    ],

    tickets: [
        {
            descripcion: 'Error en la conexión'
        }
    ]
    
}
