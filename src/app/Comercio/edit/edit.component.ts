import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Comercio } from 'src/app/Models/Comercio';
import { ServiceService } from '../../Service/service.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  comercio:Comercio = new Comercio();
  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getComercioId(+id!)
    .subscribe(data=>{
      this.comercio=data
    })
  }

  Actualizar(){
    this.service.updateComercio(this.comercio).subscribe(data=>{
      this.comercio=data;
      alert("Actualizado con exito...")
      this.router.navigate(["listar"]);
    })
  }

}
