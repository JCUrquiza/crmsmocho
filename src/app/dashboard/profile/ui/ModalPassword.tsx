'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '@/store';
import { useDispatch } from 'react-redux';
import { closeModalTickets } from '@/store/modal/modalSlice';

type FormInputs = {
    currentPassword: string;
    newPassword: string;
    repeatNewPassword: string;
}

export const ModalPassword = () => {

    const stateModal = useAppSelector ( state => state.modal.tickets );
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormInputs>();
    
    const onSubmit: SubmitHandler<FormInputs> = async(data) => {
        console.log(data);
        console.log('Click en enviar form');
    }

    return (

        stateModal && (
            <div
                className={`main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated ${stateModal ? 'fade-in': 'fade-out'}`}
                style={{ background: 'rgba(0,0,0,.7)' }}
            >
                <div className="border border-blue-500 modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 text-left px-6">
                        {/* Title */}
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold text-gray-500">Actualización de contraseña</p>
                            <div className="modal-close cursor-pointer z-50" onClick={ () => dispatch( closeModalTickets() ) }>
                                <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        {/* Body */}
                        <div className="my-5 mr-5 ml-5 flex justify-center">
                            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                            {/* action="{{url_for('default.add_caretaker', apartment_id = apartment.id)}}" id="add_caretaker_form" */}
                                <div>
                                    <div className="flex flex-col">
                                        <label className="text-md text-gray-600">Contraseña Actual:</label>
                                        <input 
                                            className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md text-black"
                                            type="password"
                                            placeholder="Nuve123!."
                                            {...register('currentPassword')}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-md text-gray-600">Nueva contraseña:</label>
                                        <input 
                                            className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md text-black"
                                            type="password"
                                            placeholder="Paleta987),"
                                            {...register('newPassword', { pattern: {
                                                value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[^\s]+$/,
                                                message: 'Debe de tener al menos un número y un caracter especial'}
                                            })}
                                        />
                                        { errors.newPassword && <p className='text-red-500'>{ errors.newPassword.message }</p> }
                                    </div>
                                    <div>
                                        <label className="text-md text-gray-600">Repita la nueva contraseña:</label>
                                        <input
                                            className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md text-black"
                                            type="password"
                                            placeholder="Paleta987),"
                                            {...register('repeatNewPassword', {
                                                required: 'Este campo es requerido',
                                                validate: (value) => value === getValues('newPassword') || 'Las contraseñas no coinciden'
                                            })}
                                        />
                                        { errors.repeatNewPassword && <p className='text-red-500'>{ errors.repeatNewPassword.message }</p> }
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="flex justify-end pt-2">
                                    <button
                                        className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                                        onClick={ () => dispatch( closeModalTickets() )}
                                    >
                                        Cancelar
                                    </button>

                                    <button
                                        className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"                            
                                    >
                                        Enviar
                                    </button>        
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )   
    )
}
