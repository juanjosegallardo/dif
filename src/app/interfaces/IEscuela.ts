import { ILocalidad } from "./ILocalidad";
import { IMunicipio } from "./IMunicipio";
import { IRuta } from "./IRuta";

export interface IEscuela
{
    id:number,
    id_interno:string,
    plantel: string,
    marginacion : string,
    cct: string,
    nivel: string,
    ruta_id?: number,
    localidad_id?: number,
    ruta: IRuta,   
    localidad: ILocalidad,
}