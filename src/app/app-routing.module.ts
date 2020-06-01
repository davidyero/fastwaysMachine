import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrincipalComponent} from './components/principal/principal.component';
import {RegistroClienteComponent} from './components/registro-cliente/registro-cliente.component';
import {RegistroEmpresaComponent} from './components/registro-empresa/registro-empresa.component';
import {ListadoLavadorasClienteComponent} from './components/listado-lavadoras-cliente/listado-lavadoras-cliente.component';
import {Constants} from './shared/constants/constants';
import {MisServiciosEmpresaComponent} from './components/mis-servicios-empresa/mis-servicios-empresa.component';
import {MisServiciosClienteComponent} from './components/mis-servicios-cliente/mis-servicios-cliente.component';
import {ListadoLavadorasEmpresaComponent} from './components/listado-lavadoras-empresa/listado-lavadoras-empresa.component';
import {ModificarClienteComponent} from './components/modificar-cliente/modificar-cliente.component';
import {ModificarEmpresaComponent} from './components/modificar-empresa/modificar-empresa.component';
import {CuentaEmpresaComponent} from './components/cuenta-empresa/cuenta-empresa.component';
import {CuentaClienteComponent} from './components/cuenta-cliente/cuenta-cliente.component';
import {FacturaEmpresaComponent} from './components/factura-empresa/factura-empresa.component';
import {EstadoDelPedidoComponent} from './components/estado-del-pedido/estado-del-pedido.component';
import {RegistroLavadoraComponent} from './components/registro-lavadora/registro-lavadora.component';
import {ListaDePedidosComponent} from './components/lista-de-pedidos/lista-de-pedidos.component';


const routes: Routes = [
  {
    path: Constants.URLS.PRINCIPAL,
    component: PrincipalComponent
  },
  {
    path: Constants.URLS.REGISTER_USER,
    component: RegistroClienteComponent
  },
  {
    path: Constants.URLS.REGISTER_COMPANY,
    component: RegistroEmpresaComponent
  },
  {
    path: Constants.URLS.LIST_USER,
    component: ListadoLavadorasClienteComponent
  },
  {
    path: Constants.URLS.LIST_COMPANY,
    component: ListadoLavadorasEmpresaComponent
  },
  {
    path: Constants.URLS.SERVICES_USER,
    component: MisServiciosClienteComponent
  },
  {
    path: Constants.URLS.SERVICES_COMPANY,
    component: MisServiciosEmpresaComponent
  },
  {
    path: Constants.URLS.MODIFY_USER,
    component: ModificarClienteComponent
  },
  {
    path: Constants.URLS.MODIFY_COMPANY,
    component: ModificarEmpresaComponent
  },
  {
    path: Constants.URLS.ACCOUNT_USER,
    component: CuentaClienteComponent
  },
  {
    path: Constants.URLS.ACCOUNT_COMPANY,
    component: CuentaEmpresaComponent
  },
  {
    path: Constants.URLS.BILL_COMPANY,
    component: FacturaEmpresaComponent
  },
  {
    path: Constants.URLS.ORDER_STATE,
    component: EstadoDelPedidoComponent
  },
  {
    path: Constants.URLS.SERVICE,
    component: ListaDePedidosComponent
  },
  {
    path: Constants.URLS.REGISTER_LAVADORA,
    component: RegistroLavadoraComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
