import React from 'react';

export const UsuariosForm = () => {

    return (

        <div>

            <form>

                <div className='flex flex-row' >

                    <div className='flex flex-col w-1/2 m-3'>

                        <label htmlFor="email">Nombre(s):</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={1} />

                        <label htmlFor="email">Apellido Materno:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={3} />

                        {/* TODO: Leer de la BBDD las sucurales en forma de lista */}
                        <label htmlFor="email">Sucursal:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={5} />

                        {/* TODO: Leer de la BBDD los puestos en forma de lista */}
                        <label htmlFor="email">Puesto:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={7} />

                        <label htmlFor="email">Celular:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={9} />
                        
                    </div>

                    <div className='flex flex-col w-1/2 m-3'>

                        <label htmlFor="email">Apellido Paterno:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={2} />

                        <label htmlFor="email">Título:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={4} />
    
                        {/* TODO: Leer de la BBDD las áreas en forma de lista */}
                        <label htmlFor="email">Área:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="text" tabIndex={6} />

                        <label htmlFor="email">Correo:</label>
                        <input className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black" type="email" tabIndex={8} />

                    </div>

                </div>

            </form>

        </div>

    )
}
