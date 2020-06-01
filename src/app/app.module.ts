import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';
import { EstadoDelPedidoComponent } from './components/estado-del-pedido/estado-del-pedido.component';
import { CuentaEmpresaComponent } from './components/cuenta-empresa/cuenta-empresa.component';
import { CuentaClienteComponent } from './components/cuenta-cliente/cuenta-cliente.component';
import { ModificarClienteComponent } from './components/modificar-cliente/modificar-cliente.component';
import { ModificarEmpresaComponent } from './components/modificar-empresa/modificar-empresa.component';
import { MisServiciosClienteComponent } from './components/mis-servicios-cliente/mis-servicios-cliente.component';
import { MisServiciosEmpresaComponent } from './components/mis-servicios-empresa/mis-servicios-empresa.component';
import { RegistroLavadoraComponent } from './components/registro-lavadora/registro-lavadora.component';
import { ListadoLavadorasClienteComponent } from './components/listado-lavadoras-cliente/listado-lavadoras-cliente.component';
import { ListadoLavadorasEmpresaComponent } from './components/listado-lavadoras-empresa/listado-lavadoras-empresa.component';
import { FacturaEmpresaComponent } from './components/factura-empresa/factura-empresa.component';
import {HeaderService} from './shared/services/header.service';
import {AppService} from './shared/services/app.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListaDePedidosComponent } from './components/lista-de-pedidos/lista-de-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RegistroClienteComponent,
    RegistroEmpresaComponent,
    EstadoDelPedidoComponent,
    CuentaEmpresaComponent,
    CuentaClienteComponent,
    ModificarClienteComponent,
    ModificarEmpresaComponent,
    MisServiciosClienteComponent,
    MisServiciosEmpresaComponent,
    RegistroLavadoraComponent,
    ListadoLavadorasClienteComponent,
    ListadoLavadorasEmpresaComponent,
    FacturaEmpresaComponent,
    ListaDePedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    HeaderService
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
