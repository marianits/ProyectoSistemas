import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Comercio } from 'src/app/Models/Comercio';
import { ServiceService } from '../../Service/service.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  comercio:Comercio = new Comercio();
  cities = ['bar', 'bi', 'co'];
  Guardar(){
    this.service.createComercio(this.comercio)
    .subscribe(data=>{
      alert("Se Agrego con Exito!! ");
      this.router.navigate(["listar"]);
    })
  }

}
