import React from 'react';
import { Subtitle, Title } from '@/components';

export const AreasForm = () => {

    return (

        <div className='pt-5'>

            <Subtitle title='Ingresa los datos requeridos' />

            <form>

                <div className='flex flex-row'>

                    <div className='flex flex-col w-1/2 m-3'>

                        <label htmlFor="email">Área:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="email" />

                        <div className='flex justify-start'>
                            <button className='btn-primary mt-6 w-1/2'>Enviar</button>
                        </div>

                    </div>

                    <div className='flex flex-col w-1/2 m-3'>

                        <label htmlFor="email">Puesto:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="email" />
                
                    </div>

                </div>

            </form>

        </div>

    )

}
