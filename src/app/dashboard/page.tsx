import React from 'react';
import { Title } from '@/components';

export default function () {
    return (
        <div className='py-[-10]'>

            <Title title='Dashboard' subTitle='Welcome to the Dashboard Page!' />

            <div className='py-10'>

                <div className='pb-10'>
                    <h3>TODOS:</h3>
                    <ul className='px-10'>
                        <li> - Menú de opciones para desplegarse en cualquier pantalla (Tipo SideMenu).</li>
                        <li> - Implementar Storage (Toolkit o Zustand).</li>
                        <li> - Mejorar la distribución del topMenu</li>
                    </ul>
                </div>
                
                <h3>MÓDULOS:</h3>
                <div className='flex p-5'>
    	            <input type='checkbox' className=' bg-red-400 h-10 w-10 rounded-[100%] cursor-pointer 
                        appearance-none peer z-20 checked:opacity-50  transition-all duration-300 
                        checked:mt-1 checked:h-8 checked:w-8
                    '/>
	                <div className="absolute h-16 w-16 bg-gray-800 rounded-[100%]  opacity-0 transition-all duration-200
                        peer-checked:rounded-[2%] peer-checked:h-96 peer-checked:w-80 peer-checked:opacity-100 peer-checked:visible
                        flex flex-col px-3 pt-12 invisible">
		                <div className='flex flex-col gap-3'>
			                <div className='w-full h-12 bg-green-600 rounded-xl flex justify-center items-center text-white font-bold'>
                                <p className='text-center'>
				                    Implementar pantalla de api´s (Pokemon, clima, etc).
                                </p>
			                </div>
			                <div className='w-full h-12 bg-green-600 rounded-xl flex justify-center items-center text-white font-bold'>
				                Sistema de Tickets
			                </div>
			                <div className='w-full h-12 bg-green-600 rounded-xl flex justify-center items-center font-bold'>
				                Creación de Usuarios
			                </div>
			                <div className='w-full h-12 bg-green-600 rounded-xl flex justify-center items-center text-white font-bold'>
				                Inventario
			                </div>
			                <div className='w-full h-12 bg-green-600 rounded-xl flex justify-center items-center text-white font-bold'>
				                Drag & Drop
			                </div>
		                </div>
	                </div>
                </div>

            </div>

        </div>
    )
}
