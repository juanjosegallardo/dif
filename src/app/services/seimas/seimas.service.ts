import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISeims } from 'src/app/interfaces/ISeims';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeimasService {

  constructor(private http: HttpClient) {

   
  }

  obtener(curp: string)
  {
    return this.http.post<ISeims>(`${environment.ruta_seimas}`, {curp});
  }

  
}
