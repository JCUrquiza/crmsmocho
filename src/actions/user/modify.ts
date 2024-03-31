'use server';

import prisma from '@/lib/prisma';

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
            message: 'Usuario actualizado correctamente'
        }
        
    } catch (error) {
        console.log(error);
    }

}