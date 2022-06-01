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
      this.comercios=data
    })
  }
}
