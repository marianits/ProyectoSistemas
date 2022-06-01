import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Comercio } from '../Models/Comercio';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url= 'http://localhost:9000/api/comercios'

  getComercios(){
    console.log(this.http.get<Comercio[]>(this.Url));
    return this.http.get<Comercio[]>(this.Url);
  }
}
