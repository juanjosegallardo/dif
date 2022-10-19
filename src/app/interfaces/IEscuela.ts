import { ILocalidad } from "./ILocalidad";
import { IMunicipio } from "./IMunicipio";
import { IRuta } from "./IRuta";

export interface IEscuela
{
    id:number,
    plantel: string,
    marginacion : string,
    cct: string,
    nivel: string,
    municipio_id?: number,
    ruta_id?: number,
    localidad_id?: number,
    ruta: IRuta,   
    localidad: ILocalidad,
    municipio: IMunicipio,
}