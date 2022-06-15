import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PaqueteInventario } from 'src/app/Models/PaqueteInventario';
import { PaqueteService } from '../../Service/paquete.service'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddPaqueteComponent implements OnInit {

  constructor(private router:Router, private service:PaqueteService) { }

  ngOnInit(): void {
  }

  checked = new FormControl('');
  paquete:PaqueteInventario = new PaqueteInventario();
  Guardar(){
    console.log(this.paquete);
    this.paquete.id_comercio = 1;
    this.paquete.id_tipo_paquete = 1;
    this.paquete.link_paquete = '';
    this.service.createPaquete(this.paquete)
    .subscribe(data=>{
      alert("Se Agrego con Exito!! ");
      this.router.navigate(["listarPaquetes"]);
    })
  }

}
