import React from 'react';
import { Title } from '@/components';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import crypto from 'crypto';

export default function TicketsPage() {

    const listTODOS = [{
            id: crypto.randomUUID(),
            nombre: 'Menú de opciones para desplegarse en cualquier pantalla (Tipo SideMenu).',
            check: true
        },{
            id: crypto.randomUUID(),
            nombre: 'Implementar Storage (Toolkit o Zustand).',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Mejorar la distribución del topMenu',
            check: false
        },{
            id: crypto.randomUUID(),
            nombre: 'Crear initialData para áreas',
            check: true
        },{
            id: crypto.randomUUID(),
            nombre: 'Crear initialData para puestos',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Crear initialData para sucursal',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Crear initialData para estatus',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Crear initialData para usuarios',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Crear Modelo para usuarios (prisma)',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Crear Modelo para tickets (prisma)',
            check: false
        }, {
            id: crypto.randomUUID(),
            nombre: 'Crear Model para permisos y funcionalidad',
            check: false
        }, {
            id: crypto.randomUUID(),
            nombre: 'Crear server components para creación de áreas',
            check: false
        }, {
            id: crypto.randomUUID(),
            nombre: 'Crear server components para creación de sucursales',
            check: false
        }, {
            id: crypto.randomUUID(),
            nombre: 'Crear server components para creación de usuarios',
            check: false
        }, {
            id: crypto.randomUUID(),
            nombre: 'Mejorar lógica para mostrar esta lista',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Almacenar la información obtenida del usuario del server action en redux',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Mostrar la información del usuario en PerfilPage',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Vista para usuario (que modifique su contraseña)',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Vista para usuario (que modifique su nombre, apellidos y celular)',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Server Action para modificar/actualizar los datos personales del usuario:',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Password',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Nombre. apellidos y celular',
            check: true
        }, {
            id: crypto.randomUUID(),
            nombre: 'Crear InitialData para conceptos de tickets',
            check: false
        }
    ]

    return (
        <div className='py-[-10]'>

            <Title title='Dashboard' subTitle='Welcome to the Dashboard Page!' />

            <div className='py-10'>

                <div className='flex flex-row w-full'>

                    <div className='flex flex-col w-1/2 m-3'>
                        <h3>TODOS:</h3>

                        <ul>

                        {
                            listTODOS.map( item => (
                                    <li key={ item.id } className='flex'>
                                        {
                                            item.check && (
                                                <IoCheckmarkCircleOutline size={25} />
                                            )
                                        }
                                        - { item.nombre }
                                    </li>
                                ))
                            }
                        </ul>

                    </div>

                    <div className='flex flex-row w-1/2 mt-3'>

                        <h3>MÓDULOS:</h3>

                        <div className='flex flex-row mt-10'>

                            <div className='flex pr-3'>
                                <input type='checkbox' className=' bg-red-400 h-10 w-10 rounded-[100%] cursor-pointer 
                                    appearance-none peer z-20 checked:opacity-50  transition-all duration-300 
                                    checked:mt-1 checked:h-8 checked:w-8
                                '/>
                                <div className="absolute h-16 w-16 bg-gray-800 rounded-[100%] opacity-0 transition-all duration-200
                                    peer-checked:rounded-[2%] peer-checked:h-96 peer-checked:w-80 peer-checked:opacity-100 peer-checked:visible
                                    flex flex-col px-3 pt-12 invisible">
                                    <div className='flex flex-col gap-5'>
                                        <div className='w-full h-12 bg-green-600 rounded-xl flex justify-center items-center text-white font-bold'>
                                            <p className='text-center'>
                                                Implementar pantalla de api´s (Pokemon, clima, etc).
                                            </p>
                                        </div>
                                        <div className='w-full h-8 bg-green-600 rounded-xl flex justify-center items-center text-white font-bold'>
                                            Sistema de Tickets
                                        </div>
                                        <div className='w-full h-8 bg-green-600 rounded-xl flex justify-center items-center font-bold'>
                                            Creación de Usuarios/Empleados
                                        </div>
                                        <div className='w-full h-8 bg-green-600 rounded-xl flex justify-center items-center font-bold'>
                                            Creación de Clientes
                                        </div>
                                        <div className='w-full h-8 bg-green-600 rounded-xl flex justify-center items-center text-white font-bold'>
                                            Inventario
                                        </div>
                                        <div className='w-full h-8 bg-green-600 rounded-xl flex justify-center items-center text-white font-bold'>
                                            Drag & Drop
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex pl-32'>
                                <input type='checkbox' className=' bg-red-400 h-10 w-10 rounded-[100%] cursor-pointer 
                                    appearance-none peer z-20 checked:opacity-50  transition-all duration-300 
                                    checked:mt-1 checked:h-8 checked:w-8
                                '/>
                                <div className="absolute h-16 w-16 bg-gray-800 rounded-[100%] opacity-0 transition-all duration-200
                                    peer-checked:rounded-[2%] peer-checked:h-96 peer-checked:w-80 peer-checked:opacity-100 peer-checked:visible
                                    flex flex-col px-3 pt-12 invisible">
                                    <div className='flex flex-col gap-5'>
                                        <div className='w-full h-12 bg-green-600 rounded-xl flex justify-center items-center text-white font-bold'>
                                            <p className='text-center'>
                                                Implementar pantalla de api´s (Pokemon, clima, etc).
                                            </p>
                                        </div>
                                        <div className='w-full h-8 bg-green-600 rounded-xl flex justify-center items-center text-white font-bold'>
                                            Sistema de Tickets
                                        </div>
                                        <div className='w-full h-8 bg-green-600 rounded-xl flex justify-center items-center font-bold'>
                                            Creación de Usuarios/Empleados
                                        </div>
                                        <div className='w-full h-8 bg-green-600 rounded-xl flex justify-center items-center font-bold'>
                                            Creación de Clientes
                                        </div>
                                        <div className='w-full h-8 bg-green-600 rounded-xl flex justify-center items-center text-white font-bold'>
                                            Inventario
                                        </div>
                                        <div className='w-full h-8 bg-green-600 rounded-xl flex justify-center items-center text-white font-bold'>
                                            Drag & Drop
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>

            </div>

        </div>
    )
}
