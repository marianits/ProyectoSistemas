import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Comercio, ComercioResponse } from '../Models/Comercio';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url= 'http://localhost:9000/api/comercios'

  getComercios(){
    var ruta = this.Url + "/listarComercios";
    var response = this.http.get<ComercioResponse>(ruta)
    return response;
  }
  createComercio(){
    var ruta = this.Url + "/listarComercios";
    var response = this.http.post<Comercio(ruta)
  }
}
