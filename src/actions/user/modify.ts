'use server';

import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs';

export const modifyUserInformation = async( id: number, nombre: string, apellidoPaterno: string, apellidoMaterno: string, celular: string) => {

    try {

        await prisma.usuario.update({
            where: {
                id: id,
            },
            data: {
                nombres: nombre,
                apellidoPaterno: apellidoPaterno,
                apellidoMaterno: apellidoMaterno,
                celular: celular
            }
        });

        return {
            ok: true,
            message: 'Usuario actualizado correctamente.'
        }
        
    } catch (error) {
        console.log(error);
    }

}

export const updatePassword = async( id: number, password: string ) => {

    try {

        await prisma.usuario.update({
            where: {
                id: id
            },
            data: {
                password: bcryptjs.hashSync(password, 10)
            }
        });

        return {
            ok: true,
            message: 'Contraseña actualizada con éxito.'
        }
        
    } catch (error) {
        console.log(error);
    }

}
