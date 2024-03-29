// import React from 'react';

interface SeedArea {
    nombre: string;
}

interface SeedPosition {
    nombre: string;
    areaId: string;
}

interface SeedBranch {
    nombre: string;
    zona: string;
    calle: string;
    municipio: string;
    colonia: string;
    numeroInterior: string;
    numeroExterior: string;
    codigoPostal: string;
    ciudad: string;
    correo: string;
    telefonoUno: string;
    telefonoDos: string;
}

interface SeedStatus {
    codigo: string;
    nombre: string;
    color: string;
}

interface SeedUser {
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    titulo: ValidTitulo;
    celular: string;
    correo: string;
    puestoId: string;
    sucursalId: string;
    estatusId: string;
}

type ValidTitulo = 'Ingeniero' | 'Arquitecto';
type ValidRole = 'admin' | 'user' | 'client';
type ValidStatus = 'pendiente' | 'en proceso' | 'realizado';
type ValidCatalogoTickets = '';

interface SeedData {
    area: SeedArea;
    puesto: SeedPosition;
    sucursal: SeedBranch;
    estatus: SeedStatus;
    usuario: SeedUser;
}

export const initialData: SeedData = {

    area: {
        nombre: 'Sistemas'
    },

    puesto: {
        nombre: 'Desarrollador Frontend',
        areaId: ''
    },

    sucursal: {
        nombre: 'Vallejo',
        zona: 'Norte',
        calle: 'Av. Siempre Viva',
        municipio: 'Gustavo A. Madero',
        colonia: 'Industrial Vallejo',
        numeroInterior: '156',
        numeroExterior: 'S/N',
        codigoPostal: '98267',
        ciudad: 'CDMX',
        correo: 'vallejo@correo.com',
        telefonoUno: '5587913486',
        telefonoDos: '5566778899'
    },

    estatus: {
        codigo: 'ESTACT',
        nombre: 'Activo',
        color: '#f1b6c9'
    },

    usuario: {
        nombres: 'Juan Carlos',
        apellidoPaterno: 'Gonzalez',
        apellidoMaterno: 'Urquiza',
        titulo: 'Ingeniero',
        celular: '5513243423',
        correo: 'juan@google.com',
        puestoId: '1',
        sucursalId: '1',
        estatusId: '1'
    }

}
