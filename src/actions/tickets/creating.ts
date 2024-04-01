'use server';

import prisma from '@/lib/prisma';

export const getConcepts = async() => {

    try {

        const concepts = await prisma.catalogoTicket.findMany({});

        return {
            ok: true,
            concepts
        }
        
    } catch (error) {
        console.log(error);
    }

}
