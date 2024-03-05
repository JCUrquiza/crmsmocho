'use client';

import React from 'react'
import Link from 'next/link';
import { IoClose, IoPerson } from 'react-icons/io5'
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/store'
import { closeSidebar } from '@/store/sidebar/sidebarSlice';

export const Sidebar = () => {

    const stateSidebar = useAppSelector( state => state.sedebar.sidebar );
    const dispatch = useAppDispatch();

    return (
        <div>

            {/* Background */}
            {
                stateSidebar && (
                    <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-white opacity-30' />
                )
            }

            {/* Blur */}
            {
                stateSidebar && (
                    <div className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm' />
                )
            }

            <nav 
                className={
                    clsx(
                        "fixed p-5 right-0 top-0 w-[300px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                        {
                            'translate-x-full' : !stateSidebar
                        }
                    )
                }
            >

                <IoClose 
                    className='absolute top-5 right-5 cursor-pointer bg-black'
                    size={60}
                    onClick={ () => dispatch(closeSidebar()) }
                />

                <Link href={'/'} className='flex items-center mt-20 p-2 hover:bg-gray-100 rounded transition-all' style={{ color: 'black' }}>
                    <IoPerson size={30} />
                    <span className='ml-3 text-xl'>Perfil</span>
                </Link>

              

            </nav>

        </div>
    )
}
