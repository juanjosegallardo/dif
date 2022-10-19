import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPersona } from 'src/app/interfaces/IPersona';
import { RouterOutlet } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) {

   
   }

   obtener()
   {
    return this.http.get(`${environment.ruta_api}/personas`);
   }

   guardar(data: IPersona)
   {
    return this.http.post(`${environment.ruta_api}/personas`, data);
   }

   actualizar(id: number, data:IPersona)
   {
    return this.http.put(`${environment.ruta_api}/personas/${id}`, data);
   }

   eliminar(id: number)
   {
    return this.http.delete(`${environment.ruta_api}/personas/${id}`);
   }


}
