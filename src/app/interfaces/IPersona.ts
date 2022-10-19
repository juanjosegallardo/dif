import { IApoyo } from "./IApoyo";
import { IEscuela } from "./IEscuela";
import { ILocalidad } from "./ILocalidad";
import { IMunicipio } from "./IMunicipio";

export interface IPersona
{
    id:number,
    ap_paterno: string,
    ap_materno: string,
    nombre: string;
    curp: string,
    sexo: string,
    fecha_nacimiento: Date,
    vulnerabilidad: string,
    manzana: string,
    calle: string,
    colonia: string,
    numero_exterior: string,
    escuela?: IEscuela,
    municipio?: IMunicipio,
    localidad?: ILocalidad,
    apoyos?: IApoyo[],
    
}