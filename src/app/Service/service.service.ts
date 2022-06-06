import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RequestResponse } from '../Models/Utils/RequestResponse';
import { ComercioList } from '../Models/ComercioList';
import { Comercio } from '../Models/Comercio'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url= 'http://localhost:9000/api/comercios'

  getComercios(){
    var ruta = this.Url + "/listarComercios";
    var response = this.http.get<RequestResponse<ComercioList>>(ruta)
    return response;
  }

  createComercio(comercio:Comercio){
    var ruta = this.Url + "/crearNuevoComercio";
    comercio.link_logo="https://imgur.com/22zktlI"
    var response = this.http.post<Comercio>(ruta,comercio);
    return response;
  }

  getComercioId(id:number){
    var ruta = this.Url +"/" +id ;
    return this.http.get<Comercio>(ruta)
  }

  updateComercio(comercio:Comercio){
    var ruta = this.Url +"/" ;
    return this.http.put<Comercio>(ruta+comercio.id,comercio);
  }

  deleteComercio(comercio:Comercio){
    var ruta = this.Url +"/" ;
    return this.http.delete(ruta+comercio.id);
  }

}
