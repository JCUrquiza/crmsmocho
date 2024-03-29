'use server';

import prisma from "@/lib/prisma";
import bcryptjs from 'bcryptjs';

export const loginUser = async( email: string, password: string ) => {

    try {
        
        const user = await prisma.usuario.findFirst({
            where: {
                correo: email
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
