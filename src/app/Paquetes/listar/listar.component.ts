import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Paquete } from 'src/app/Models/Paquete';
import { PaqueteService } from '../../Service/paquete.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarPaquetesComponent implements OnInit {

  paquetes:Paquete[];
  constructor(private service:PaqueteService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPaquetes()
    .subscribe(data=>{
      this.paquetes=data._embedded.paqueteList
    })
  }
  Add(): void{
    this.router.navigate(["addPaquete"]);
  }
  Editar(paquete:Paquete): void{
    localStorage.setItem("id", paquete.id.toString());
    this.router.navigate(["edit"]);
  }
  Eliminar(paquete:Paquete): void{
    this.service.deletePaquete(paquete)
    .subscribe(data=>{
      this.paquetes=this.paquetes.filter(p=>p!==paquete);
      alert("Paquete eliminado...");
    })
  }
}
