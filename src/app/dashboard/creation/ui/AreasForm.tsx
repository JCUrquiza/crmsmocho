import React from 'react';
import { Title } from '@/components';

export const AreasForm = () => {

    return (

        <div>

            {/* TODO: Crear título para elementos de formulario */}
            <Title title='Creación de áreas' />

            <form>

                <label htmlFor="email">Área:</label>
                <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="email" />

                <label htmlFor="email">Puesto:</label>
                <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="email" />

                

            </form>

        </div>

    )

}
