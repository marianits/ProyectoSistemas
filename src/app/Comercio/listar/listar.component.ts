import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Comercio } from 'src/app/Models/Comercio';
import { ServiceService } from '../../Service/service.service'


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  comercios:Comercio[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getComercios()
    .subscribe(data=>{
      this.comercios=data._embedded.comercioList
    })
  }
  Add(): void{
    this.router.navigate(["add"]);
  }
  Editar(comercio:Comercio): void{
    localStorage.setItem("id", comercio.id.toString());
    this.router.navigate(["edit"]);
  }
  Eliminar(comercio:Comercio): void{
    this.service.deleteComercio(comercio)
    .subscribe(data=>{
      this.comercios=this.comercios.filter(c=>c!==comercio);
      alert("Usuario eliminado...");
    })
  }
}
