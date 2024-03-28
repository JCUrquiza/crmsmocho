'use client';

import React, { useState } from 'react';
import { IoBusiness, IoGitNetwork, IoPersonAdd } from 'react-icons/io5';
import { AreasForm } from './AreasForm';
import { SucursalesForm } from './SucursalesForm';
import { UsuariosForm } from './UsuariosForm';

export const Creaciones = () => {

    const [areasActive, setAreasActive] = useState(false);
    const [sucursalesActive, setSucursalesActive] = useState(false);
    const [usuariosActive, setUsuariosActive] = useState(false);

    const toggleFormView = (formulario: string) => {

        if ( formulario == 'area') {
            setAreasActive(true);
            setSucursalesActive(false);
            setUsuariosActive(false);
        } else if ( formulario == 'sucursal') {
            setAreasActive(false);
            setSucursalesActive(true);
            setUsuariosActive(false);
        } else {
            setAreasActive(false);
            setSucursalesActive(false);
            setUsuariosActive(true);
        }

    }

    return (

        <div>

            <div className="flex flex-col md:flex-row justify-between items-start mt-10 gap-5 w-full">

                <div 
                    className="flex-1 md:w-1/3 flex flex-col items-center justify-center p-5 border border-white hover:bg-gray-700 cursor-pointer transition duration-300"
                    onClick={ () => toggleFormView('area') }
                >
                    <IoGitNetwork size={50} />
                    <span className='ml-3 text-xl text-white'>Áreas</span>
                </div>

                <div 
                    className="flex-1 md:w-1/3 flex flex-col items-center justify-center p-5 border border-white hover:bg-gray-700 cursor-pointer transition duration-300"
                    onClick={ () => toggleFormView('sucursal') }
                    >
                    <IoBusiness size={50} />
                    <span className='ml-3 text-xl text-white'>Sucursales</span>
                </div>

                <div 
                    className="flex-1 md:w-1/3 flex flex-col items-center justify-center p-5 border border-white hover:bg-gray-700 cursor-pointer transition duration-300"
                    onClick={ () => toggleFormView('usuario') }
                >
                    <IoPersonAdd size={50} />
                    <span className='ml-3 text-xl text-white'>Usuarios</span>
                </div>

            </div>

            {/* Formulario de Areas */}
            {
                areasActive && (
                    <AreasForm />
                )
            }
            {/* Formulario de Sucursales */}
            {
                sucursalesActive && (
                    <SucursalesForm />
                )
            }
            {/* Formulario de Usuarios */}
            {
                usuariosActive && (
                    <UsuariosForm /> 
                )
            }

        </div>

    )

}
