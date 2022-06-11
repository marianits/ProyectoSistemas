import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RequestResponse } from '../Models/Utils/RequestResponse';
import { PaqueteList } from '../Models/PaqueteList';
import { Paquete } from '../Models/Paquete'
@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor(private http:HttpClient) { }
  Url= 'http://localhost:9000/api/paquetes'

  getPaquetes(){
    var ruta = this.Url + "/listarPaquetes";
    var response = this.http.get<RequestResponse<PaqueteList>>(ruta)
    return response;
  }

  createPaquete(paquete:Paquete){
    var ruta = this.Url + "/crearNuevoPaquete";
    var response = this.http.post<Paquete>(ruta,paquete);
    return response;
  }

  getPaqueteId(id:number){
    var ruta = this.Url +"/" +id ;
    return this.http.get<Paquete>(ruta)
  }

  updatePaquete(paquete:Paquete){
    var ruta = this.Url +"/" ;
    return this.http.put<Paquete>(ruta+paquete.id,paquete);
  }

  deletePaquete(paquete:Paquete){
    var ruta = this.Url +"/" ;
    return this.http.delete(ruta+paquete.id);
  }

}
