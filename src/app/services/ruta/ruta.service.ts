import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRuta } from 'src/app/interfaces/IRuta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor(private http: HttpClient) { }


  obtener()
   {
    return this.http.get(`${environment.ruta_api}/rutas`);
   }

   guardar(data: IRuta)
   {
    return this.http.post(`${environment.ruta_api}/rutas`, data);
   }
}
