import React from 'react';
import { Title } from '@/components';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

export default function TicketsPage() {
    return (
        <div className='py-[-10]'>

            <Title title='Dashboard' subTitle='Welcome to the Dashboard Page!' />

            <div className='py-10'>

                <div className='pb-10'>
                    <h3>TODOS:</h3>
                    <ul className='px-10'>
                        <li className='flex'>
                            - &nbsp; <IoCheckmarkCircleOutline size={25} /> &nbsp;
                            Menú de opciones para desplegarse en cualquier pantalla (Tipo SideMenu).
                        </li>
                        <li className='flex'>
                            - &nbsp; <IoCheckmarkCircleOutline size={25} /> &nbsp;
                            Implementar Storage (Toolkit o Zustand).
                        </li>
                        <li> - Mejorar la distribución del topMenu</li>
                        <li> - Crear initialData para tickets</li>
                        <li> - Crear Modelo para usuarios (prisma)</li>
                        <li> - Crear Modelo para tickets (prisma)</li>
                        <li className='flex'>
                            - &nbsp; <IoCheckmarkCircleOutline size={25} /> &nbsp;
                            Crear Modal (UI)
                        </li>
                    </ul>
                </div>
                
                <h3>MÓDULOS:</h3>

                <div className='flex space-x-80'>

                    <div className='flex p-3'>
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

                    <div className='flex p-3'>
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
    )
}
