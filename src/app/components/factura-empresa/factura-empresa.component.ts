import {Component, OnInit} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {Constants} from '../../shared/constants/constants';
import {Router} from '@angular/router';
import {AppStubService} from '../../shared/stubs/app.stub.service';
import {PedidosModel} from '../../shared/models/pedidos.model';

@Component({
  selector: 'app-factura-empresa',
  templateUrl: './factura-empresa.component.html',
  styleUrls: ['./factura-empresa.component.scss']
})
export class FacturaEmpresaComponent implements OnInit {

  public isLoading = true;
  public pedidoTerminado: PedidosModel;
  public id = localStorage.getItem('bill');

  // Reemplazar por esta linea
  // constructor(private router: Router, private appService: AppService) {
  constructor(private router: Router, private appService: AppStubService) {
  }

  ngOnInit() {
    this.consultarPedido();
  }

  public consultarPedido(): void {
    this.appService.consultarPedido(this.id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (response: PedidosModel) => {
          this.pedidoTerminado = response;
        }
      );
  }

  public goToPrincipal(): void {
    this.router.navigate([Constants.URLS.PRINCIPAL]);
  }

}
