import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEscuela } from 'src/app/interfaces/IEscuela';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  obtener(){
    return this.httpClient.get(`${environment.ruta_api}/escuelas`);
  }

  guardar(data: IEscuela){
    return this.httpClient.post(`${environment.ruta_api}/escuelas`, data);
  }
}
