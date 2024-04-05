// import React from 'react';
import bcryptjs from 'bcryptjs';

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
    password: string;
    correo: string;
    puestoId: string;
    sucursalId: string;
    estatusId: string;
}

interface SeedCatalogoTickets {
    nombre: string;
}

type ValidTitulo = 'Ingeniero' | 'Arquitecto';
type ValidRole = 'admin' | 'user' | 'client';
type ValidStatus = 'pendiente' | 'en proceso' | 'realizado';
type ValidCatalogoTickets = '';

interface SeedData {
    areas: SeedArea[];
    puestos: SeedPosition[];
    sucursales: SeedBranch[];
    estatus: SeedStatus[];
    usuarios: SeedUser[];
    catalogoTickets: SeedCatalogoTickets[];
}

export const initialData: SeedData = {

    areas: [
        {
            nombre: 'Sistemas'
        },
        {
            nombre: 'Credito y cobranza'
        }
    ],

    puestos: [
        {
            nombre: 'Desarrollador Frontend',
            areaId: ''
        },
        {
            nombre: 'Control Interno',
            areaId: ''
        }
    ],

    sucursales: [
        {
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
        {
            nombre: 'Guadalajara',
            zona: 'Occidente',
            calle: 'Av. Francisco Moran',
            municipio: 'La Grande',
            colonia: 'Nueva Conquista',
            numeroInterior: '152',
            numeroExterior: '3',
            codigoPostal: '11340',
            ciudad: 'Guadalajara',
            correo: 'guadalajara@correo.com',
            telefonoUno: '5587913412',
            telefonoDos: '5566778822'
        }
    ],

    estatus: [
        {
            codigo: 'ESTACT',
            nombre: 'Activo',
            color: '#009900'
        },{
            codigo: 'ESTPEN',
            nombre: 'Pendiente',
            color: '#0099ff'
        }
    ],

    usuarios: [
        {
            nombres: 'Juan Carlos',
            apellidoPaterno: 'Gonzalez',
            apellidoMaterno: 'Urquiza',
            titulo: 'Ingeniero',
            celular: '5513243423',
            correo: 'juan@google.com',
            password: bcryptjs.hashSync('123456'),
            puestoId: '1',
            sucursalId: '1',
            estatusId: '1'
        }, {
            nombres: 'Test1',
            apellidoPaterno: 'Predeterm',
            apellidoMaterno: 'Predeterm',
            titulo: 'Arquitecto',
            celular: '5513243421',
            correo: 'test1@google.com',
            password: bcryptjs.hashSync('123456'),
            puestoId: '2',
            sucursalId: '2',
            estatusId: '1'
        }
    ],

    catalogoTickets: [{
        nombre: 'Sistema'
    },{
        nombre: 'Impresora'
    }, {
        nombre: 'Cableado'
    }, {
        nombre: 'Red Teléfono'
    }, {
        nombre: 'Inventario'
    }, {
        nombre: 'Cámaras'
    }]

}
