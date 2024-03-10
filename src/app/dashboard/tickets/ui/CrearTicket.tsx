'use client';

import React, { useState } from 'react';

export const CrearTicket = () => {

    const [viewModal, setViewModal] = useState(false);

    return (
        <div>

            <button className='btn btn-primary' onClick={ () => setViewModal(true) } >Crear Ticket</button>

            {/* Modal */}
            {
                viewModal && (
                    <div
                        className={`main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated ${viewModal ? 'fade-in': 'fade-out'}`}
                        style={{ background: 'rgba(0,0,0,.7)' }}
                    >
                        <div className="border border-blue-500 modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                            <div className="modal-content py-4 text-left px-6">
                                {/* Title */}
                                <div className="flex justify-between items-center pb-3">
                                    <p className="text-2xl font-bold text-gray-500">Datos generales de ticket</p>
                                    <div className="modal-close cursor-pointer z-50" onClick={ () => setViewModal(false) }>
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
                                    <form action="{{url_for('default.add_caretaker', apartment_id = apartment.id)}}" method="POST" id="add_caretaker_form"  className="w-full">
                                        <div className="">
                                            <div className="">
                                                <label className="text-md text-gray-600">Full Names</label>
                                                {/* for="names" */}
                                            </div>
                                            <div className="">
                                                <input type="text" id="names" name="names" className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md text-black" placeholder="Example. John Doe" />
                                                {/* autocomplete="off" */}
                                            </div>
                                            <div className="">
                                                <label className="text-md text-gray-600">Phone Number</label>
                                                {/* for="phone" */}
                                            </div>
                                            <div className="">
                                                <input type="text" id="phone" name="phone" className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md" placeholder="Example. 0729400426" />
                                                {/* autocomplete="off" */}
                                            </div>
                                            <div className="">
                                                <label className="text-md text-gray-600">ID Number</label>
                                                {/* for="id_number" */}
                                            </div>
                                            <div className="">
                                                <input type="number" id="id_number" name="id_number" className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md" placeholder="Caretaker's ID number" />
                                                {/* autocomplete="off" */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* Footer */}
                                <div className="flex justify-end pt-2 space-x-14">
                                    <button
                                        className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                                        onClick={ () => setViewModal(false)}
                                    >
                                        Cancel
                                    </button>
                                        
                                    <button
                                        className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                                        onClick={ () => setViewModal(false) }
                                    >
                                        Confirm
                                    </button>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }            
            {/* Modal */}

        </div>
    )

}
