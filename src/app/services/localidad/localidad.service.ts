import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILocalidad } from 'src/app/interfaces/ILocalidad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  constructor(
    private httpClient: HttpClient
  ) { }

  obtener(){
    return this.httpClient.get(`${environment.ruta_api}/localidades`);
  }

  guardar(data: ILocalidad){
    return this.httpClient.post(`${environment.ruta_api}/localidades`, data);
  }
}
