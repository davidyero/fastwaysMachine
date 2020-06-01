import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppStubService} from '../../shared/stubs/app.stub.service';
import {finalize} from 'rxjs/operators';
import {PedidosModel} from '../../shared/models/pedidos.model';
import {Constants} from '../../shared/constants/constants';

@Component({
  selector: 'app-lista-de-pedidos',
  templateUrl: './lista-de-pedidos.component.html',
  styleUrls: ['./lista-de-pedidos.component.scss']
})
export class ListaDePedidosComponent implements OnInit {

  public isLoading = true;
  public showError = false;
  public showList = true;
  public messageError = '';
  public pedidos: PedidosModel[] = [];
  public pedidoAceptado: PedidosModel;

  // Reemplazar por esta linea
  // constructor(private router: Router, private appService: AppService) {
  constructor(private router: Router, private appService: AppStubService) {
  }

  ngOnInit() {
    this.obtenerPedidos();
  }

  public obtenerPedidos(): void {
    this.appService.obtenerPedidos(localStorage.getItem('userFM'))
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (response: PedidosModel[]) => {
          this.pedidos = response;
        },
        () => {
          this.messageError = 'No hay pedidos aún :(';
          this.showError = true;
        }
      );
  }

  public aceptar(pedido: PedidosModel): void {
    this.isLoading = true;
    this.appService.aceptarPedido(pedido.id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        () => {
          this.pedidoAceptado = pedido;
          this.showList = false;
        }
      );
  }

  public rechazar(id: number): void {
    this.appService.rechazarPedido(id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        () => {
          this.router.navigate([Constants.URLS.PRINCIPAL]);
        }
      );
  }

  public terminar(id: number): void {
    this.appService.terminarPedido(id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        () => {
          localStorage.setItem('bill', id.toString());
          this.router.navigate([Constants.URLS.BILL_COMPANY]);
        }
      );
  }

  public hiddenAlert(): void {
    this.showError = false;
  }
}
