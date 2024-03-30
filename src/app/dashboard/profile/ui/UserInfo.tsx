'use client';

import React from 'react';
import { useAppSelector } from '@/store';
import { Subtitle } from '@/components';

export const UserInfo = () => {

    const userData = useAppSelector( state => state.user)
    console.log(userData);

    return (

        <div className='p-5'>

            <Subtitle title='Información del usuario' />

            <div className='flex flex-row p-5'>

                <div className='flex flex-col w-1/2'>

                    <h4 className='text-2xl'>Nombre(s): { userData.nombres }</h4>
                    <h4 className='text-2xl'>Apellido Materno: { userData.apellidoMaterno }</h4>
                    <h4 className='text-2xl'>Correo: { userData.correo }</h4>
                    <h4 className='text-2xl'>Puesto: { userData.puestoNombre }</h4>
                    
                </div>

                <div className='flex flex-col w-1/2'>

                    <h4 className='text-2xl'>Apellido Materno: { userData.apellidoPaterno }</h4>
                    <h4 className='text-2xl'>Título: { userData.titulo }</h4>
                    <h4 className='text-2xl'>Celular: { userData.celular }</h4>
                    <h4 className='text-2xl'>Sucursal: { userData.sucursalNombre }</h4>
                    
                </div>

            </div>

        </div>

    )

}
