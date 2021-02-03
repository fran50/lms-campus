import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubirService {

  constructor(private httpCliente: HttpClient) { }

  subirFoto(datos: FormData){
    const token = localStorage.getItem('token') || '';
    return this.httpCliente.post('http://localhost:3000/subir', datos,{
      headers:{
        'mytoken':token
      }
    }).pipe(
      tap(resp =>{})
    );
  }
}
