'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '@/store';
import { Subtitle } from '@/components';

type FormInputs = {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    celular: string;
}

export const UserInfo = () => {

    const userData = useAppSelector( state => state.user );

    const [toggleModifyInfo, setToggleModifyInfo] = useState(false);

    const { register, handleSubmit, formState: {errors} } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async(data) => {
        if ( !data ) return;
        
        console.log(data);
        
    }
    
    return (

        <div className='p-5'>

            <Subtitle title='Información del usuario' />

            <button 
                className='btn-primary'
                onClick={() => setToggleModifyInfo(!toggleModifyInfo)}
            >
                Actualizar información
            </button>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='flex flex-row'>

                    <div className='flex flex-col w-1/2 mt-3 gap-3'>

                        <label className='text-2xl' htmlFor="nombre">Nombre(s):</label>
                        {
                            !toggleModifyInfo ? (
                                <h4 className='text-1xl mb-8'>{ userData.nombres }</h4>
                            ) : (
                                <>
                                    <input
                                        className="px-5 py-2 border bg-gray-200 rounded my-2 mx-2 text-black"
                                        defaultValue={ userData.nombres }
                                        type="text"
                                        {...register('nombre', { pattern: {
                                            value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/,
                                            message: 'Ingresa sólo letras.' }
                                        })}
                                        tabIndex={1}
                                    />
                                    { errors.nombre && <p className='text-red-500'>{ errors.nombre.message }</p> }
                                </>
                            )
                        }
                        
                        <label className='text-2xl' htmlFor="apellidoMaterno">Apellido Materno:</label>
                        {
                            !toggleModifyInfo ? (
                                <h4 className='text-1xl mb-8'>{ userData.apellidoMaterno }</h4>
                            ) : (
                                <>
                                    <input
                                        className="px-5 py-2 border bg-gray-200 rounded my-2 mx-2 text-black"
                                        type="text"
                                        defaultValue={ userData.apellidoMaterno }
                                        {...register('apellidoMaterno', { pattern: {
                                            value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/,
                                            message: 'Ingresa sólo letras.' }
                                        })}
                                        tabIndex={3}
                                    />
                                    { errors.apellidoMaterno && <p className='text-red-500'>{ errors.apellidoMaterno.message }</p> }
                                </>
                            )
                        }

                        
                        <label className='text-2xl' htmlFor="correo">Correo:</label>
                        <h4 className='text-1xl mb-8'>{ userData.correo }</h4>

                        
                        <label className='text-2xl' htmlFor="puestoNombre">Puesto:</label>
                        <h4 className='text-1xl mb-8'>{ userData.puestoNombre }</h4>
                    
                    </div>

                    <div className='flex flex-col w-1/2 mt-3 gap-3'>

                        <label className='text-2xl' htmlFor="apellidoPaterno">Apellido Paterno:</label>
                        {
                            !toggleModifyInfo ? (
                                <h4 className='text-1xl mb-8'>{ userData.apellidoPaterno }</h4>
                            ) : (
                                <>
                                    <input
                                        className="px-5 py-2 border bg-gray-200 rounded my-2 mx-2 text-black"
                                        type="text"
                                        defaultValue={ userData.apellidoPaterno }
                                        {...register('apellidoPaterno', { pattern: {
                                            value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/,
                                            message: 'Ingresa sólo letras.' }
                                        })}
                                        tabIndex={2}
                                    />
                                    { errors.apellidoPaterno && <p className='text-red-500'>{ errors.apellidoPaterno.message }</p> }
                                </>
                            )
                        }

                        <label className='text-2xl' htmlFor="titulo">Título:</label>
                        <h4 className='text-1xl mb-8'>{ userData.titulo }</h4>

                        <label className='text-2xl' htmlFor="celular">Celular:</label>
                        {
                            !toggleModifyInfo ? (
                                <h4 className='text-1xl mb-8'>{ userData.celular }</h4>
                            ) : (
                                <>
                                    <input 
                                        className="px-5 py-2 border bg-gray-200 rounded my-2 mx-2 text-black"
                                        type="text"
                                        defaultValue={ userData.celular }
                                        {...register('celular', { pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Ingresa sólo números' }
                                        })}
                                        tabIndex={4}
                                    />
                                    { errors.celular && <p className='text-red-500'>{ errors.celular.message }</p> }
                                </>
                            )
                        }

                        <label className='text-2xl' htmlFor="sucursalNombre">Sucursal:</label>
                        <h4 className='text-1xl mb-8'>{ userData.sucursalNombre }</h4>

                        {
                            toggleModifyInfo && (
                                <div className='flex justify-end'>
                                    <button className='btn-primary mt-6 w-1/2'>Enviar</button>
                                </div>
                            )
                        }
                    
                    </div>

                </div>

            </form>

        </div>

    )

}
