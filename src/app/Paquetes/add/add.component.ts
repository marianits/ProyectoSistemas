import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Paquete } from 'src/app/Models/Paquete';
import { PaqueteService } from '../../Service/paquete.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddPaqueteComponent implements OnInit {

  constructor(private router:Router, private service:PaqueteService) { }

  ngOnInit(): void {
  }

  paquete:Paquete = new Paquete();
  Guardar(){
    this.service.createPaquete(this.paquete)
    .subscribe(data=>{
      alert("Se Agrego con Exito!! ");
      this.router.navigate(["listarPaquetes"]);
    })
  }

}
