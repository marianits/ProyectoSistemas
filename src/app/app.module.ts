import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Comercio/listar/listar.component';
import { AddComponent } from './Comercio/add/add.component';
import { EditComponent } from './Comercio/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ServiceService } from '../app/Service/service.service'
import { PaqueteService } from './Service/paquete.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './Paquetes/update/update.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AddPaqueteComponent } from './Paquetes/add/add.component';
import { ListarPaquetesComponent } from './Paquetes/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    UpdateComponent,
    AddPaqueteComponent,
    ListarPaquetesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceService, PaqueteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
