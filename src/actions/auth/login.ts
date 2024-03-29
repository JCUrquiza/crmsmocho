'use server';

import prisma from "@/lib/prisma";

export const loginUser = async( email: string ) => {

    try {
        
        const user = await prisma.usuario.findFirst({
            where: {
                correo: email
            }
        });

        if ( user === null ) {
            return {
                ok: false,
                message: 'Usuario no enconstrado'
            }
        };

        console.log(user);

        return {
            ok: true,
            message: user
        }

    } catch (error) {
        console.log(error);
    }

}
