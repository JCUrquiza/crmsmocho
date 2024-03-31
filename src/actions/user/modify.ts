'use server';

import prisma from '@/lib/prisma';

export const modifyUserInformation = async( id: number, nombre: string, apellidoPaterno: string, apellidoMaterno: string, celular: string) => {

    try {

        // const userToModify = prisma.usuario.findUnique({
        //     where: {
        //         id: +id
        //     }
        // });
        // if (!userToModify) throw new Error('Usuario no encontrado');

        const data = prisma.usuario.update({
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
            message: 'Usuario actualizado con éxito'
        }
        
    } catch (error) {
        console.log(error);
    }

}