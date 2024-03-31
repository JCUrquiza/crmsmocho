'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { store } from '@/store';
import { saveDataUser } from '@/store/user/userSlice';
import { loginUser } from '@/actions';

type FormInputs = {
    email: string;
    password: string;
}

interface UserData {
    id: number;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    celular: string;
    correo: string;
    titulo: string;
    puesto: { nombre: string }
    sucursal: { nombre: string }
}

export const LoginForm = () => {

    const router = useRouter();
    const [messageErrorLogin, setMessageErrorLogin] = useState('');
    const [errorLogin, setErrorLogin] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = async(data) => {
        if ( !data ) return;
        // Implementación del server action para loggeo
        const resp = await loginUser( data.email, data.password );
        // Condicional para mostrar el mensaje de error si no se logró autenticar al usuario
        if ( resp?.ok === false ) {
            if ( typeof resp.message === 'string' ) {
                setErrorLogin(true);
                setMessageErrorLogin( resp?.message );
            }
        }

        // En caso de éxito
        if ( resp?.ok) {
            // Constante para tener el tipo de la respuesta
            const userData = resp.message as UserData;
            
            // Almacenar la información del usuario en el storage
            store.dispatch( saveDataUser({
                id: userData.id,
                nombres: userData.nombres,
                apellidoPaterno: userData.apellidoPaterno,
                apellidoMaterno: userData.apellidoMaterno,
                celular: userData.celular,
                correo: userData.correo,
                titulo: userData.titulo,
                puestoNombre: userData.puesto.nombre,
                sucursalNombre: userData.sucursal.nombre
            }));
            // Y reenvío a dashboard
            router.replace('/dashboard');
        }
    }

    return (
        
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

            {
                errors.email?.type === 'required' && (
                    <span className='text-red-600'>El correo es obligatorio</span>
                )
            }
            <label htmlFor="email">Correo electrónico</label>
            <input 
                className={
                    clsx("px-5 py-2 border bg-gray-200 rounded mb-5 text-black w-full",
                    {
                        "border-red-400 border-4": errors.email
                    })
                }
                type="email"
                autoFocus
                {...register('email', { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
            />

            {
                errors.password?.type === 'required' && (
                    <span className='text-red-600'>La contraseña es obligatoria</span>
                    )
                }
            <label htmlFor="password">Contraseña</label>
            <input 
                className={
                    clsx("px-5 py-2 border bg-gray-200 rounded mb-5 text-black w-full",
                    {
                        "border-red-400 border-4": errors.password
                    })
                }
                type="password"
                {...register('password', { required: true })}
            />

            {
                errorLogin && (
                    <span className='text-red-600'>{ messageErrorLogin }</span>
                )
            }
            <button className='btn-primary text-center mt-5 w-full'>
                Ingresar
            </button>
            
            {/* divisor line */ }
            <div className="flex items-center my-5">
                <div className="flex-1 border-t border-gray-500"></div>
                {/* <div className="px-2 text-gray-800">O</div> */}
                <div className="flex-1 border-t border-gray-500"></div>
            </div>

        </form>

    )

}
