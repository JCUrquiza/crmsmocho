'use server';

import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs';

export const loginUser = async( email: string, password: string ) => {

    try {
        
        const user = await prisma.usuario.findFirst({
            where: {
                correo: email,
                estatus: {
                    codigo: 'ESTACT'
                }
            },
            select: {
                id: true,
                nombres: true,
                apellidoPaterno: true,
                apellidoMaterno: true,
                password: true,
                celular: true,
                correo: true,
                titulo: true,
                puesto: {
                    select: {
                        nombre: true
                    }
                },
                sucursal: {
                    select: {
                        nombre: true
                    }
                }
            }
        });

        if ( user === null ) {
            return {
                ok: false,
                message: 'Datos proporcionados inexistentes.'
            }
        };
        
        // Comparar las contraseñas:
        if ( !bcryptjs.compareSync( password, user?.password ) ) {
            return {
                ok: false,
                message: 'Credenciales incorrectas.'
            }
        };
    
        return {
            ok: true,
            message: user
        }

    } catch (error) {
        console.log(error);
    }

}
