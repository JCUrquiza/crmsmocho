import React from 'react';
import { Subtitle } from '@/components';

export const SucursalesForm = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Enviando formulario...');
        
    }

    return (

        <div className='pt-5'>

            <Subtitle title='Ingresa los datos requeridos' />

            <form onSubmit={handleSubmit}>

                <div className='flex flex-row'>

                    <div className='flex flex-col w-1/2 m-3'>

                        <label htmlFor="nombre">Nombre:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={1} />

                        <label htmlFor="zona">Zona:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={3} />

                        <label htmlFor="telefonoUno">Teléfono Uno:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={5} />

                    </div>

                    <div className='flex flex-col w-1/2 m-3'>

                        <label htmlFor="correo">Correo:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={2} />

                        <label htmlFor="telefonoDos">Teléfono Dos:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={4} />

                        <div className='flex justify-end'>
                            <button className='btn-primary mt-6 w-1/2'>Enviar</button>
                        </div>

                    </div>

                </div>

            </form>

        </div>

    )
    
}
